import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Users, Phone, Globe } from "lucide-react";

const Ayuda = () => {
  const organizaciones = [
    {
      name: "Mujeres Unidas A.C.",
      description: "Apoyo a víctimas de violencia de género y programas de empoderamiento femenino.",
      phone: "55 1234 5678",
      website: "https://mujeresunidas.org",
    },
    {
      name: "Red de Mujeres Seguras",
      description: "Brinda refugio temporal y asistencia legal a mujeres en situación de riesgo.",
      phone: "55 9876 5432",
      website: "https://redmujeresseguras.org",
    },
    {
      name: "Educación y Equidad",
      description: "Programas educativos para niñas y adolescentes en zonas vulnerables.",
      phone: "55 2468 1357",
      website: "https://educacionyequidad.org",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Sección de Ayuda</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conoce las organizaciones que apoyan a mujeres y niñas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizaciones.map((org, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {org.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{org.description}</p>
                <div className="flex flex-col space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    {org.phone}
                  </p>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Globe className="h-4 w-4" />
                    Visitar sitio web
                  </a>
                </div>
              </CardContent>
              <div className="p-4 flex justify-end">
                <Button size="sm" onClick={() => window.open(org.website, "_blank")}>
                  Más información
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ayuda;
