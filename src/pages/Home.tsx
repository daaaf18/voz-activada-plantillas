import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, Mic, BookOpen, MessageCircle, Gamepad2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Plataforma para el empoderamiento femenino
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Voz Activada
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Un espacio seguro donde las voces femeninas se escuchan, se apoyan y se empoderan.
              Juntas construimos un futuro más justo e igualitario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="lg" className="group">
                  Únete a la comunidad
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/voces-silenciadas">
                <Button variant="outline" size="lg">
                  Conoce las historias
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-secondary" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros <span className="bg-gradient-hero bg-clip-text text-transparent">Espacios</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre las diferentes secciones diseñadas para informar, educar y empoderar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voces Silenciadas */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Voces Silenciadas</CardTitle>
                </div>
                <CardDescription>
                  Historias y testimonios que necesitan ser escuchados para crear conciencia y cambio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/voces-silenciadas">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explorar historias
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Nos Faltan Ellas */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Shield className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle>Nos Faltan Ellas</CardTitle>
                </div>
                <CardDescription>
                  Centro de recursos, ayuda y base de datos para mujeres desaparecidas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/nos-faltan-ellas">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Acceder a recursos
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* HerStory */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>HerStory</CardTitle>
                </div>
                <CardDescription>
                  Podcasts y contenido multimedia sobre historias de mujeres inspiradoras.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/herstory">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Escuchar podcasts
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ella Dice */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Ella Dice</CardTitle>
                </div>
                <CardDescription>
                  Foro de la comunidad donde puedes compartir experiencias y conectar con otras mujeres.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/ella-dice">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Unirse al foro
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Aprende */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Aprende</CardTitle>
                </div>
                <CardDescription>
                  Juegos educativos interactivos sobre igualdad de género y empoderamiento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/aprende">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Comenzar a jugar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Nosotras */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Nosotras</CardTitle>
                </div>
                <CardDescription>
                  Conoce nuestro equipo y la misión que nos impulsa cada día.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/nosotras">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Conocer el equipo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para hacer oír tu voz?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de mujeres empoderadas y sé parte del cambio que el mundo necesita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="hero" size="lg">
                Crear cuenta gratuita
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" size="lg">
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Plataforma</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/voces-silenciadas" className="hover:text-primary transition-colors">Voces Silenciadas</Link></li>
                <li><Link to="/nos-faltan-ellas" className="hover:text-primary transition-colors">Nos Faltan Ellas</Link></li>
                <li><Link to="/herstory" className="hover:text-primary transition-colors">HerStory</Link></li>
                <li><Link to="/ella-dice" className="hover:text-primary transition-colors">Ella Dice</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/aprende" className="hover:text-primary transition-colors">Aprende</Link></li>
                <li><Link to="/ayuda" className="hover:text-primary transition-colors">Ayuda</Link></li>
                <li><Link to="/rastro-nacional" className="hover:text-primary transition-colors">Rastro Nacional</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Información</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/nosotras" className="hover:text-primary transition-colors">Nosotras</Link></li>
                <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-primary transition-colors">Términos</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Voz Activada. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;