{/* Mostrar las tarjetas en un grid resposivo*/ }
import WomanCard from "./WomanCard";
import { useMujeres } from "../hooks/useMuseoMujeres";

const WomenGrid = () => {
  const { mujeres, loading, error } = useMujeres();

  if (loading) return <p className="text-center text-gray-500">Cargando mujeres...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {mujeres.map((mujer) => (
        <WomanCard
          key={mujer.id}
          id={mujer.id}
          imageUrl={mujer.imagen_url || "/assets/default.png"}
          nombreConocido={mujer.nombre_conocido}
          citas={mujer.citas || []}
        />
   
      ))}
    </div>
  );
};


export default WomenGrid;
