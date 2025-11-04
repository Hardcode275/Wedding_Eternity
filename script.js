const PETAL_COUNT = 30;
const container = document.getElementById("petal-container");
const colors = [
  "rgba(255, 255, 255, 0.8)",
  "rgba(255, 200, 200, 0.9)",
  "rgba(255, 255, 255, 0.6)",
];

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.top = `-${Math.random() * 200}px`;
  petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  const size = 15 + Math.random() * 20;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 0.7}px`;

  const duration = 10 + Math.random() * 10;
  const delay = Math.random() * 10;

  petal.style.animation = `
    fall ${duration}s linear infinite,
    sway ${5 + Math.random() * 5}s ease-in-out alternate infinite ${delay}s
  `;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;

  container.appendChild(petal);

  petal.addEventListener("animationiteration", () => {
    petal.remove();
    createPetal();
  });
}

for (let i = 0; i < PETAL_COUNT; i++) {
  createPetal();
}

function toggleCollapsible(id) {
  const content = document.getElementById(id);
  const header = content.previousElementSibling;
  const arrowIcon = header.querySelector("#arrowIcon");
  const headerText = header.querySelector("h3");

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    arrowIcon.classList.remove("rotate-180");
    headerText.textContent = "Guía Rápida de Instalación (Abrir)";
  } else {
    content.classList.add("expanded");
    arrowIcon.classList.add("rotate-180");
    headerText.textContent = "Guía Rápida de Instalación (Cerrar)";
  }
}
window.toggleCollapsible = toggleCollapsible;
