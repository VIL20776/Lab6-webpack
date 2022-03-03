import {friends10} from "./friends10";
import uncanny from "../images/uncanny/uncanny1.png"

export function friends9 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You won, but ...";
    image.src = uncanny;
    image.alt = "uncanny1";
    page.innerHTML = `Everyone is mad at you.<br/>
        They call you cheater and other things.`;
    link.innerHTML = "Next";
    link.onclick = friends10();
     
}