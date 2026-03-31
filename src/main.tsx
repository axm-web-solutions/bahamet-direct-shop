import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import favicon from "@/assets/logo.jpg";

const faviconLink =
  (document.querySelector("link[rel='icon']") as HTMLLinkElement | null) ??
  (() => {
    const link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
    return link;
  })();
faviconLink.type = "image/jpeg";
faviconLink.href = favicon;

createRoot(document.getElementById("root")!).render(<App />);
