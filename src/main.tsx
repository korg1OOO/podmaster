import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { useEffect } from "react";

// Extend the Window interface to include pixelId
declare global {
  interface Window {
    pixelId: string;
  }
}

function Root() {
  useEffect(() => {
    window.pixelId = "685be3be0a03918eb3fab5a0";
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    document.head.appendChild(script);
  }, []);

  return <App />;
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<Root />);