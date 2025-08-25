import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Target, Eye, Users, Mail, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import headerImage from "@/assets/herstory-header.jpg";

const Nosotras = () => {
  const teamMembers = [
    {
      name: "Ana García",
      role: "Fundadora & CEO",
      description: "Abogada especializada en derechos humanos con 10+ años de experiencia. Apasionada por la justicia social y el empoderamiento femenino.",
      initials: "AG",
      email: "ana@herstory.com",
      linkedin: "ana-garcia-herstory"
    },
    {
      name: "Carmen López",
      role: "Directora de Contenido",
      description: "Periodista y escritora enfocada en historias de mujeres. Ha trabajado en medios internacionales cubriendo temas de género y derechos.",
      initials: "CL",
      email: "carmen@herstory.com",
      linkedin: "carmen-lopez-content"
    },
    {
      name: "María Rodríguez",
      role: "Coordinadora de Comunidad",
      description: "Psicóloga clínica especializada en trauma y apoyo a víctimas. Líder en programas de rehabilitación y empoderamiento comunitario.",
      initials: "MR",
      email: "maria@herstory.com",
      linkedin: "maria-rodriguez-community"
    },
    {
      name: "Sofia Torres",
      role: "Directora de Tecnología",
      description: "Ingeniera en sistemas con experiencia en plataformas sociales. Enfocada en crear tecnología accesible y segura para mujeres.",
      initials: "ST",
      email: "sofia@herstory.com",
      linkedin: "sofia-torres-tech"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={headerImage} 
          alt="HerStory Header" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Nosotras</h1>
            <p className="text-lg italic">El equipo detrás de HerStory</p>
          </div>
        </div>
      </div>

      <Navbar />

      <div className="container py-12">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Crear un espacio digital seguro y empoderador donde las voces femeninas sean escuchadas, 
                valoradas y amplificadas. Trabajamos para visibilizar las historias que han sido silenciadas 
                y construir una comunidad de apoyo mutuo que inspire el cambio social.
              </p>
              <div className="flex items-center mt-6 space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Empoderamiento a través de la narrativa</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ser la plataforma líder en América Latina para el empoderamiento femenino, donde cada mujer 
                tenga las herramientas, el apoyo y la confianza necesarios para contar su historia, 
                reclamar su espacio y contribuir a un mundo más equitativo e inclusivo.
              </p>
              <div className="flex items-center mt-6 space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Transformando vidas, cambiando el mundo</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Empatía</h3>
                <p className="text-sm text-muted-foreground">Escuchamos con el corazón y comprendemos cada historia</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Comunidad</h3>
                <p className="text-sm text-muted-foreground">Fortalecemos lazos y construimos redes de apoyo</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Propósito</h3>
                <p className="text-sm text-muted-foreground">Cada acción tiene un impacto positivo y medible</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Transparencia</h3>
                <p className="text-sm text-muted-foreground">Operamos con honestidad y responsabilidad</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">¿Quieres unirte a nuestro equipo?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Siempre estamos buscando personas apasionadas que compartan nuestra visión 
                de un mundo más equitativo e inclusivo.
              </p>
              <Button size="lg" variant="default">
                Ver oportunidades
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nosotras;