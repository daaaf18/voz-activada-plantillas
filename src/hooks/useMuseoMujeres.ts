{/* Mandar a llamar datos desde la BD */ }
import {useEffect, useState} from "react"; 
import { supabaseMuseo } from "@/lib/supabaseMuseo";

export interface Cita{
    texto: string; 
}

export interface Mujer{
    id: number; 
    imagen_url: string; 
    nombre_conocido: string; 
    citas: Cita[];
}

export const useMujeres = () => {
  const [mujeres, setMujeres] = useState<Mujer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMujeres = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabaseMuseo
          .from("mujeres")
          .select("id, nombre_conocido, imagen_url, citas(texto)");

        if (error) throw error;

        setMujeres(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMujeres();
  }, []);

  return { mujeres, loading, error };
};