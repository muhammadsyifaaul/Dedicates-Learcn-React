import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";
import { StrictMode } from "react";


createRoot(document.getElementById('root')).render(

      <StrictMode>
      <Counter />
    </StrictMode>
    )
  