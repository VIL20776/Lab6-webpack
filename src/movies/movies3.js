import {movies4} from "./movies4";
import uncanny from "../images/uncanny/uncanny3.png";

export function movies3 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Someone is trying to enter to the house";
    image.src = uncanny;
    image.alt = "uncanny3";
    page.innerHTML = `You hear like someone is trying to open the main <br/>
        door of your house. <br/>
        ...`;
    link.innerHTML = "Next";
    link.onclick = movies4();
     
}