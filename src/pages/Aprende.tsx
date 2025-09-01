// pages/Aprende.tsx
import { useState } from "react";
import Trivias from "@/components/aprende/Trivias";
import Memorama from "@/components/aprende/Memorama";
import OrdenarPalabras from "@/components/aprende/OrdenarPalabras";
import { Button } from "@/components/ui/button";

const Aprende = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-purple-200 p-6 flex flex-col items-center overflow-hidden">
      {/* Burbujas flotantes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-20 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-100 rounded-full opacity-40 animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-purple-300 rounded-full opacity-25 animate-pulse-slow"></div>

  <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 p-6 rounded-2xl shadow-xl text-center mb-8">
  <h1 className="text-5xl font-extrabold text-white mb-2">
    Aprende Jugando
  </h1>
  <p className="text-white text-lg max-w-2xl mx-auto">
    Explora nuestros juegos educativos: Trivias, Memorama y el Quiz “Qué mujer histórica eres”. 
    Aprende de forma divertida y colorida, con contenido interesante y entretenido.
  </p>
</div>

      {!activeGame && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl z-10 relative">
          <div
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setActiveGame("trivia")}
          >
            <img
              src="/img/juegos/trivias.png"
              alt="Trivias"
              className="w-full h-64 object-cover"
            />
            <span className="absolute bottom-2 left-0 w-full text-center text-white font-bold text-xl bg-purple-700/60 py-1">
              Trivias
            </span>
          </div>

          <div
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setActiveGame("memorama")}
          >
            <img
              src="/img/juegos/memorama.png"
              alt="Memorama"
              className="w-full h-64 object-cover"
            />
            <span className="absolute bottom-2 left-0 w-full text-center text-white font-bold text-xl bg-purple-700/60 py-1">
              Memorama
            </span>
          </div>

          <div
      className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={() => setActiveGame("ordenarPalabras")}
    >
      <img
        src="/img/juegos/ordenarpalabras.png"
        alt="Ordenar Palabras"
        className="w-full h-64 object-cover"
      />
      <span className="absolute bottom-2 left-0 w-full text-center text-white font-bold text-xl bg-purple-700/60 py-1">
        Ordenar Palabras
      </span>
    </div>

          <div
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setActiveGame("quiz")}
          >
            <img
              src="/img/juegos/quizmujerhistorica.png"
              alt="Quiz Mujer Histórica"
              className="w-full h-64 object-cover"
            />
            <span className="absolute bottom-2 left-0 w-full text-center text-white font-bold text-xl bg-purple-700/60 py-1">
              Qué mujer histórica eres
            </span>
          </div>
        </div>
      )}

      {activeGame === "trivia" && (
        <div className="w-full mt-8 z-10 relative">
          <Trivias onClose={() => setActiveGame(null)} />
        </div>
      )}
      {activeGame === "memorama" && (
        <div className="w-full mt-8 z-10 relative">
          <Memorama onClose={() => setActiveGame(null)} />
        </div>
      )}
      {activeGame === "ordenarPalabras" && (
  <div className="w-full mt-8 z-10 relative">
    <OrdenarPalabras />
  </div>
)}


      <div className="mt-12 z-10 relative flex flex-col items-center gap-4">
        <Button
          onClick={() => window.location.href = "/"} 
          className="bg-purple-900 text-white hover:bg-purple-800 px-6 py-2 rounded-xl shadow-md"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default Aprende;










