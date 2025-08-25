import { useEffect } from "react";
import chatIcon from "@/assets/chatbot_icon-removebg-preview.png"; // Ajusta el path si cambias la carpeta

declare global {
  interface Window {
    Intercom?: any;
  }
}

export default function Chatbot() {
  useEffect(() => {
    // Evita añadir el botón y script varias veces
    if (document.getElementById("chatbot-script")) return;

    // Crear botón flotante
    const button = document.createElement("button");
    button.id = "chatbot-bubble";

    Object.assign(button.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, hsl(340, 70%, 75%), hsl(270, 60%, 85%))", // gradiente rosa→lavanda
      color: "white",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 0 12px hsl(270, 100%, 95%)", // glow lavanda
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "9999",
      animation: "chatbot-pulse 2s infinite",
    });

    // Crear la imagen del icono dentro del botón
    const img = document.createElement("img");
    img.src = chatIcon;
    img.style.width = "80%";
    img.style.height = "80%";
    img.style.objectFit = "contain";
    button.appendChild(img);

    // Animación de latido
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes chatbot-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);

    // Acción al hacer clic
    button.onclick = () => {
      if (window.Intercom) {
        window.Intercom("show");
      } else {
        alert("Chatbot aún no cargado"); // prueba temporal
      }
    };

    // Agregar botón al body
    document.body.appendChild(button);

    // Cargar script de Intercom
    const script = document.createElement("script");
    script.id = "chatbot-script";
    script.src = "https://widget.intercom.io/widget/tu-app-id"; // Cambia esto por tu ID real
    script.async = true;
    document.body.appendChild(script);

    // Cleanup al desmontar componente
    return () => {
      document.body.removeChild(button);
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
