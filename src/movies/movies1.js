import {movies2} from "./movies2";
import uncanny from "../images/uncanny/uncanny1.png";

export function movies1() {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You whatched a horror movie";
    image.src = uncanny;
    image.alt = "uncanny1";
    page.innerHTML = `It was way scarier than what you expected.`;  
    link.innerHTML = "Next";  
    link.onclick = movies2();
}