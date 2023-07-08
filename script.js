const container = document.querySelector(".container");
const Left = document.querySelector(".left")
const Right = document.querySelector(".right")

Left.addEventListener('mouseenter', () => container.classList.add("hover-left"))
Left.addEventListener("mouseleave", () => container.classList.remove("hover-left"))

Right.addEventListener("mouseenter", () => container.classList.add("hover-right"))
Right.addEventListener("mouseleave", () => container.classList.remove("hover-right"))

