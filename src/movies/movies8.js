import {movies9} from "./movies9";
import uncanny from "../images/uncanny/uncanny8.png";

export function movies8 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "This is the end";
    image.src = uncanny;
    image.alt = "uncanny8";
    page.innerHTML = `There is nowhere to scape and nowhere to hide.<br/>
        It's the end for you and you already accepted your fate.`;
    link.innerHTML = "Next";
    link.onclick = movies9();
     
}