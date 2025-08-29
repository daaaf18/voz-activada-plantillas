import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import {UserProfile} from "@/components/UserProfile";

const Perfil = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <UserProfile />
  );
};

export default Perfil;
