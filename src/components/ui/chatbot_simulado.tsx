import { useEffect } from "react";
import chatIcon from "@/assets/chatbot_icon-removebg-preview.png";

export default function ChatbotSimulado() {
  useEffect(() => {
    setTimeout(() => {
      const buttonId = "chatbot-bubble-simulado";
      const windowId = "chatbot-window-simulado";

      if (document.getElementById(buttonId)) return;

      // --- Botón flotante ---
      const button = document.createElement("button");
      button.id = buttonId;
      Object.assign(button.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, hsl(340,70%,75%), hsl(270,60%,85%))",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 0 12px hsl(270,100%,95%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        animation: "chatbot-pulse 2s infinite",
      });

      const img = document.createElement("img");
      img.src = chatIcon;
      img.style.width = "75%";
      img.style.height = "75%";
      img.style.objectFit = "contain";
      button.appendChild(img);

      // --- Estilos ---
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes chatbot-pulse {0%{transform:scale(1);}50%{transform:scale(1.15);}100%{transform:scale(1);}}
        #${windowId}{
          position:fixed;bottom:120px;right:20px;width:300px;max-height:400px;
          background:white;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.3);
          overflow:hidden;display:flex;flex-direction:column;
          transform:scale(0);opacity:0;transition:transform .3s ease,opacity .3s ease;
          z-index:9998;font-family:sans-serif;
        }
        #${windowId}.show{transform:scale(1);opacity:1;}
        #${windowId}-header{
          background:linear-gradient(135deg,hsl(340,70%,75%),hsl(270,60%,85%));
          color:white;padding:10px;font-weight:bold;display:flex;justify-content:space-between;align-items:center;
        }
        #${windowId}-content{padding:10px;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;}
        #${windowId}-close{cursor:pointer;font-weight:bold;}
        .chat-message{padding:6px 10px;border-radius:12px;max-width:80%;}
        .bot{background:hsl(270,60%,85%);color:#000;align-self:flex-start;}
        .user{background:hsl(340,70%,75%);color:#000;align-self:flex-end;}
        #${windowId}-input-bar{display:flex;padding:6px;border-top:1px solid #ddd;}
        #${windowId}-input-bar input{flex:1;padding:6px 8px;border-radius:12px;border:1px solid #ccc;}
        #${windowId}-input-bar button{margin-left:4px;padding:6px 10px;border:none;border-radius:12px;background:hsl(270,60%,85%);cursor:pointer;}
      `;
      document.head.appendChild(style);

      // --- Ventana ---
      const windowDiv = document.createElement("div");
      windowDiv.id = windowId;

      const header = document.createElement("div");
      header.id = `${windowId}-header`;
      header.innerHTML = `Auren <span id="${windowId}-close">&times;</span>`;

      const content = document.createElement("div");
      content.id = `${windowId}-content`;

      const inputBar = document.createElement("div");
      inputBar.id = `${windowId}-input-bar`;
      inputBar.innerHTML = `<input type="text" placeholder="Escribe algo..."/><button>Enviar</button>`;

      windowDiv.appendChild(header);
      windowDiv.appendChild(content);
      windowDiv.appendChild(inputBar);
      document.body.appendChild(windowDiv);

      button.onclick = () => {
        windowDiv.classList.toggle("show");
        if (windowDiv.classList.contains("show") && !windowDiv.dataset.opened) {
          // mensaje de bienvenida inicial
          addMessage("Hola 👋, soy Auren 🌸✨ tu guía en HerStory. Estoy aquí para contarte historias de mujeres que merecen ser recordadas 💜", "bot");
          windowDiv.dataset.opened = "true";
        }
      };

      const closeBtn = document.getElementById(`${windowId}-close`);
      closeBtn?.addEventListener("click", () => windowDiv.classList.remove("show"));
      document.body.appendChild(button);

      // --- Chat lógico ---
      const input = inputBar.querySelector("input") as HTMLInputElement;
      const sendBtn = inputBar.querySelector("button") as HTMLButtonElement;

      function addMessage(text: string, from: "bot" | "user") {
        const msg = document.createElement("div");
        msg.className = `chat-message ${from}`;
        msg.textContent = text;
        content.appendChild(msg);
        content.scrollTop = content.scrollHeight;
      }

      function botReply() {
        const replies = [
          "¡Qué interesante lo que me dices! 🤔",
          "Jajaja totalmente, pienso lo mismo 😎",
          "Mmm, cuéntame más 👀",
          "Eso suena genial 🚀",
          "Entiendo, déjame pensarlo un poco...",
          "Me alegra que lo menciones 💡",
        ];
        const random = replies[Math.floor(Math.random() * replies.length)];
        setTimeout(() => addMessage(random, "bot"), 800);
      }

      sendBtn.onclick = () => {
        if (!input.value.trim()) return;
        addMessage(input.value, "user");
        botReply();
        input.value = "";
      };

    }, 0);
  }, []);

  return null;
}
