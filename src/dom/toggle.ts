import { TOGGLE_CONTAINER_ID } from "../constants";
import { SoilAiSettings } from "../types";
import { createStyledElement } from "./create-element";

export function createToggle(settings: SoilAiSettings) {
  const container = createStyledElement(
    "div",
    {
      position: "fixed",
      bottom: "15px",
      right: "15px",
      zIndex: "9999",
      color: "white",
      backgroundColor: "black",
      borderRadius: "5px",
      padding: "6px",
    },
    { id: TOGGLE_CONTAINER_ID }
  );

  const checkbox = createStyledElement(
    "input",
    {},
    {
      type: "checkbox",
      id: "soilAiCheckbox",
      alt: "Soil AI",
      checked: localStorage.getItem("soilAiEnabled") !== "false",
    }
  );
  checkbox.addEventListener("change", () => {
    localStorage.setItem("soilAiEnabled", checkbox.checked.toString());
    if (!checkbox.checked) settings.removeAll?.();
  });

  const label = createStyledElement(
    "label",
    { marginRight: "5px" },
    { htmlFor: "soilAiCheckbox", textContent: "Soil AI" }
  );

  container.appendChild(label);
  container.appendChild(checkbox);
  document.body.appendChild(container);
}
