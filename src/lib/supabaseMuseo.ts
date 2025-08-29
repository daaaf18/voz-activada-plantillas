/* Conexion especificamente para la BD para museo mujeres */ 

import { createClient } from "@supabase/supabase-js";

export const supabaseMuseo = createClient(
    import.meta.env.VITE_SUPABASE_WOMEN_URL,
    import.meta.env.VITE_SUPABASE_WOMEN_ANON_KEY
);

