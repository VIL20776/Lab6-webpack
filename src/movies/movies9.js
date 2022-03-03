import {movies10} from "./movies10";
import uncanny from "../images/uncanny/uncanny1.png";

export function movies9 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Lights came back";
    image.src = uncanny;
    image.alt = "uncanny1";
    page.innerHTML = `The lights came back, you feel somewhat less scared.`;
    link.innerHTML = "Next";
    link.onclick = movies10();
}