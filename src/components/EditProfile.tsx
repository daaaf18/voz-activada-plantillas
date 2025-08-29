import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "../lib/supabaseClient";

interface EditProfileProps {
  userId: string; 
  onSave: () => void;
  onCancel: () => void;
}

export const EditProfile = ({ userId, onSave, onCancel }: EditProfileProps) => {
  const [formData, setFormData] = useState({
    name: "",
    profileImage: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Función para generar iniciales
  const getInitials = (name: string) => name.split(" ").map(n => n[0]).join("").toUpperCase();

  // Cargar datos de perfil
  useEffect(() => {
    if (!supabase) {
      console.log("Supabase no disponible, cargando datos simulados");
      setFormData({ name: `Usuario ${userId.slice(0, 5)}`, profileImage: "" });
      return;
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profile")
        .select("full_name, avatar_url")
        .eq("id", userId)
        .single();

      if (!error && data) {
        setFormData({
          name: data.full_name || `Usuario ${userId.slice(0, 5)}`,
          profileImage: data.avatar_url || "",
        });
      }
    };

    fetchProfile();
  }, [userId]);

  // Manejar subida de imagen
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!supabase) {
      console.log("Supabase no disponible, imagen no se subirá");
      return;
    }

    const file = event.target.files?.[0];
    if (!file) return;

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;

    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}/${crypto.randomUUID()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { cacheControl: "3600", upsert: true });
    if (error) return;

    const { data: publicUrlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    setFormData(prev => ({ ...prev, profileImage: publicUrlData.publicUrl }));

    await supabase
      .from("profile")
      .update({ avatar_url: publicUrlData.publicUrl })
      .eq("id", user.id);
  };

  // Guardar cambios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      console.log("Supabase no disponible, cambios simulados");
      toast({ title: "¡Perfil actualizado!", description: "Cambios simulados guardados correctamente." });
      onSave();
      return;
    }

    setIsLoading(true);

    const { error } = await supabase
      .from("profile")
      .upsert({ id: userId, full_name: formData.name, avatar_url: formData.profileImage });

    if (!error) {
      toast({ title: "¡Perfil actualizado!", description: "Tus cambios se guardaron correctamente." });
      onSave();
    } else {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }

    setIsLoading(false);
  };

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl bg-gradient-primary bg-clip-text text-transparent">
            Editar Perfil
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Imagen de perfil */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-20 h-20 border-4 border-primary/20">
                <AvatarImage src={formData.profileImage} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-bold">
                  {getInitials(formData.name)}
                </AvatarFallback>
              </Avatar>
              <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center cursor-pointer transition-smooth">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Haz clic en el icono para cambiar tu foto
            </p>
          </div>

          {/* Campos del formulario */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Tu nombre completo"
                required
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              variant="hero"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Guardando..." : "Guardar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
