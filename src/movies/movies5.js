import {movies6} from "./movies6";
import uncanny from "../images/uncanny/uncanny5.png";

export function movies5 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "The dogs from the street went crazy";
    image.src = uncanny;
    image.alt = "uncanny5";
    page.innerHTML = `All the street dogs started to bark loudly.<br/>
        Just like in the movie. <br/>
        ...`;
    link.innerHTML = "Next";
    link.onclick = movies6();
     
}