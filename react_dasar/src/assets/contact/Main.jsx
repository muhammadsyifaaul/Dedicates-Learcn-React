import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactForn from "./ContactForn";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContactForn />
    </StrictMode>
);