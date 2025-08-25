import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import headerImage from "@/assets/herstory-header.jpg";


type Pregunta = {
  question: string;
  options: string[];
  answer: number;
};

const categorias: Record<string, Pregunta[]> = {
  igualdadGenero: [
    { question: "¿Qué es la igualdad de género?", options: ["Hombres y mujeres con mismos derechos", "Solo mujeres tienen más derechos", "Solo hombres tienen más derechos", "No existen leyes"], answer: 0 },
    { question: "¿Cuál es un ejemplo de desigualdad de género?", options: ["Mismo salario por mismo trabajo", "Mujeres ganando menos que hombres por igual trabajo", "Mismo acceso a educación", "Participación igual en política"], answer: 1 },
    { question: "¿Qué significa empoderamiento femenino?", options: ["Dar poder solo a mujeres", "Que las mujeres tomen decisiones y lideren", "Quitar derechos a hombres", "Ignorar la igualdad"], answer: 1 },
    { question: "ODS relacionado con igualdad de género", options: ["ODS 3", "ODS 5", "ODS 7", "ODS 10"], answer: 1 },
    { question: "Un estereotipo de género es...", options: ["Una creencia que limita roles de género", "Un tipo de salario", "Un derecho legal", "Un premio"], answer: 0 },
    { question: "¿Qué busca la brecha salarial de género?", options: ["Igualar salarios", "Que hombres ganen más", "Que mujeres ganen más", "Ignorar salarios"], answer: 0 },
    { question: "Violencia de género es...", options: ["Abuso solo físico", "Abuso basado en género", "Abuso laboral solo", "Ignorar leyes"], answer: 1 },
    { question: "Equidad vs igualdad", options: ["Son lo mismo", "Equidad considera necesidades distintas", "Equidad no existe", "Igualdad es injusta"], answer: 1 },
    { question: "Participación política femenina", options: ["Debe ser limitada", "Debe ser igual que masculina", "No importa", "Solo en algunos países"], answer: 1 },
    { question: "Educación inclusiva significa...", options: ["Acceso igualitario a todos", "Solo educación para hombres", "Solo educación para mujeres", "Ignorar la educación"], answer: 0 },
  ],
  historiaMujeres: [
    { question: "Primera mujer en recibir Nobel de la Paz", options: ["Marie Curie", "Malala Yousafzai", "Bertha von Suttner", "Rigoberta Menchú"], answer: 2 },
    { question: "Quién luchó por el sufragio femenino en EEUU", options: ["Susan B. Anthony", "Frida Kahlo", "Simone de Beauvoir", "Clara Zetkin"], answer: 0 },
    { question: "Famosa científica que descubrió radio", options: ["Ada Lovelace", "Marie Curie", "Rosalind Franklin", "Jane Goodall"], answer: 1 },
    { question: "Mujer pionera en aviación", options: ["Amelia Earhart", "Harriet Tubman", "Marie Curie", "Valentina Tereshkova"], answer: 0 },
    { question: "Primera mujer presidenta en el mundo", options: ["Sirimavo Bandaranaike", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"], answer: 0 },
    { question: "Activista por derechos civiles en EEUU", options: ["Rosa Parks", "Eleanor Roosevelt", "Malala Yousafzai", "Marie Curie"], answer: 0 },
    { question: "Premio Nobel de Literatura femenina", options: ["Toni Morrison", "Gabriela Mistral", "Virginia Woolf", "Todas las anteriores"], answer: 3 },
    { question: "Mujer importante en computación temprana", options: ["Ada Lovelace", "Marie Curie", "Grace Hopper", "Rosalind Franklin"], answer: 0 },
    { question: "Pionera del movimiento feminista en Francia", options: ["Simone de Beauvoir", "Marie Curie", "Jeanne d'Arc", "Clara Zetkin"], answer: 0 },
    { question: "Conocida por su activismo por niñas", options: ["Malala Yousafzai", "Rosa Parks", "Angela Merkel", "Marie Curie"], answer: 0 },
  ],
  derechosHumanos: [
    { question: "Declaración Universal de Derechos Humanos se firmó en", options: ["1945", "1948", "1950", "1960"], answer: 1 },
    { question: "Derecho a educación es...", options: ["Derecho fundamental", "Solo opcional", "Solo para hombres", "Solo para mujeres"], answer: 0 },
    { question: "Derecho a la salud significa...", options: ["Acceso a servicios médicos", "Opcional", "Solo hospitales privados", "No es derecho"], answer: 0 },
    { question: "Derecho a la igualdad", options: ["Igualdad ante la ley", "Solo hombres", "Solo mujeres", "Solo ricos"], answer: 0 },
    { question: "Derecho a la libertad de expresión", options: ["Expresar ideas sin represalias", "No se permite", "Solo en redes", "Solo adultos"], answer: 0 },
    { question: "Prohibición de tortura es un", options: ["Derecho humano", "Ley opcional", "Costumbre", "Norma social"], answer: 0 },
    { question: "Derecho a voto es", options: ["Fundamental", "Solo hombres", "Solo mujeres", "No existe"], answer: 0 },
    { question: "Derecho a reunirse es", options: ["Permitir reuniones pacíficas", "Solo políticos", "Solo estudiantes", "No permitido"], answer: 0 },
    { question: "Derecho a privacidad incluye", options: ["Protección de datos personales", "Publicar todo online", "Ignorar privacidad", "Solo empresas"], answer: 0 },
    { question: "Derecho laboral incluye", options: ["Trabajo justo y seguro", "Salario arbitrario", "Sin contratos", "Solo voluntariado"], answer: 0 },
  ],
  activismoSocial: [
    { question: "Activismo social es...", options: ["Acción para cambiar la sociedad", "Ignorar problemas", "Solo protestas violentas", "Solo redes sociales"], answer: 0 },
    { question: "Una forma de activismo pacífico", options: ["Marchas y campañas", "Robos", "Ataques", "Ignorar causas"], answer: 0 },
    { question: "Voluntariado es", options: ["Ayudar sin fines de lucro", "Trabajo obligatorio", "Solo por dinero", "Ignorar causas"], answer: 0 },
    { question: "Lobbying responsable significa", options: ["Influir en políticas", "Ignorar leyes", "Solo propaganda", "Robos"], answer: 0 },
    { question: "Difusión de información correcta es", options: ["Educar y concienciar", "Mentir", "Ignorar hechos", "Solo rumores"], answer: 0 },
    { question: "Manifestación pacífica es", options: ["Expresar opiniones legalmente", "Violenta", "Ilegal", "Ignorar causas"], answer: 0 },
    { question: "Uso de redes para activismo", options: ["Campañas y concientización", "Solo memes", "Ignorar redes", "Spam"], answer: 0 },
    { question: "Acción comunitaria efectiva", options: ["Trabajar con comunidad", "Solo individuos", "Ignorar problemas", "Solo gobierno"], answer: 0 },
    { question: "Empoderamiento social incluye", options: ["Dar voz a todos", "Ignorar a minorías", "Solo líderes", "Solo ricos"], answer: 0 },
    { question: "Solidaridad es", options: ["Apoyar causas justas", "Ignorar problemas", "Solo palabras", "Solo dinero"], answer: 0 },
  ],
  arteYCultura: [
    { question: "El arte es...", options: ["Expresión creativa", "Solo pintura", "Solo música", "Solo baile"], answer: 0 },
    { question: "Cultura incluye...", options: ["Tradiciones y costumbres", "Solo música", "Solo religión", "Solo idioma"], answer: 0 },
    { question: "Mujeres en arte importante", options: ["Frida Kahlo", "Todas las anteriores", "Mary Cassatt", "Artemisia Gentileschi"], answer: 1 },
    { question: "Movimientos culturales incluyen", options: ["Renaissance, Modernismo", "Solo actual", "Solo pasado", "Nada"], answer: 0 },
    { question: "Arte feminista busca", options: ["Visibilizar mujeres", "Ignorar género", "Solo estética", "Solo hombres"], answer: 0 },
    { question: "Música y empoderamiento femenino", options: ["Canciones que inspiran igualdad", "Ignorar música", "Solo instrumental", "Solo hombres"], answer: 0 },
    { question: "Literatura escrita por mujeres", options: ["Jane Austen, Gabriela Mistral", "Solo hombres", "Ignorar literatura", "Solo infantil"], answer: 0 },
    { question: "Teatro feminista destaca...", options: ["Temas de igualdad", "Solo comedia", "Solo danza", "Ignorar género"], answer: 0 },
    { question: "Patrimonio cultural incluye...", options: ["Tradiciones y arte", "Solo edificios", "Solo monumentos", "Nada"], answer: 0 },
    { question: "Museos destacan...", options: ["Mujeres artistas", "Solo hombres", "Solo historia", "Nada"], answer: 0 },
  ],
};


  const Aprende = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handleAnswer = (index: number) => {
    if (!selectedCategory) return;

    const preguntaActual = categorias[selectedCategory][currentIndex];

    if (index === preguntaActual.answer) {
      toast({ title: "¡Correcto!" });
    } else {
      toast({ title: "Incorrecto", description: "Intenta de nuevo" });
    }

    if (currentIndex < categorias[selectedCategory].length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      toast({ title: "¡Has terminado la categoría!" });
      setSelectedCategory(null);
    }
  };

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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Aprende</h1>
            <p className="text-lg italic">Explora y reflexiona</p>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Sección de trivias */}
      <section className="py-16 container mx-auto">
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(categorias).map((cat) => (
              <Button key={cat} onClick={() => handleCategorySelect(cat)}>
                {cat.replace(/([A-Z])/g, " $1").toUpperCase()}
              </Button>
            ))}
          </div>
        )}

        {selectedCategory && (
          <div className="mt-8 p-6 border rounded-lg bg-background/50">
            <h2 className="text-xl font-bold mb-2">
              Pregunta {currentIndex + 1} de {categorias[selectedCategory].length}
            </h2>
            <p className="mb-4">{categorias[selectedCategory][currentIndex].question}</p>
            <div className="grid grid-cols-1 gap-3">
              {categorias[selectedCategory][currentIndex].options.map((opt, i) => (
                <Button key={i} onClick={() => handleAnswer(i)}>
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Aprende;




