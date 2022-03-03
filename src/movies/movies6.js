import {movies7} from "./movies7";
import uncanny from "../images/uncanny/uncanny6.png";

export function movies6 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You tried to make a call";
    image.src = uncanny;
    image.alt = "uncanny6";
    page.innerHTML = `You tried to make a call with your smartphone.<br/>
        But you forgot to charge it, so it doesn't turn on.`;
    link.innerHTML = "Next";
    link.onclick = movies7();
     
}