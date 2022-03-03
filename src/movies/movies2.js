import {movies3} from "./movies3";
import uncanny from "../images/uncanny/uncanny2.png";

 export function movies2 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "A blackout happens";
    image.src = uncanny;
    image.alt = "uncanny2";
    page.innerHTML = `A blackout just happend. <br/>
        Everything turns black.`;
    link.innerHTML = "Next";
    link.onclick = movies3();
     
}