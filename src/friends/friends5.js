import {friends6} from "./friends6";
import canny from "../images/canny/canny5.png"

export function friends5 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "First turn!";
    image.src = canny;
    image.alt = "canny5";
    page.innerHTML = `You get the first turn!<br/>
        There is no way you are going to lose.`;
    link.innerHTML = "Next";
    link.onclick = friends6(); 
}