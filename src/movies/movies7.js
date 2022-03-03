import {movies8} from "./movies8";
import uncanny from "../images/uncanny/uncanny7.png";

export function movies7 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Someone is going up";
    image.src = uncanny;
    image.alt = "uncanny7";
    page.innerHTML = `You hear footsteps from the stairs.<br/>
        Someone is going up, and your room is just up the stairs.`;
    link.innerHTML = "Next";
    link.onclick = movies8();
     
}