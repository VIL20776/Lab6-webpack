import {friends3} from "./friends3";
import canny from "../images/canny/canny2.png"

export function friends2 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Everyone came here";
    image.src = canny;
    image.alt = "canny2";
    page.innerHTML = `Everyone came here and they brought sodas and nachos.`;
    link.innerHTML = "Next";
    link.onclick = friends3();
}