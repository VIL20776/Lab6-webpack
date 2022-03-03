import {friends2} from "./friends2";
import canny from "../images/canny/canny1.png"

export function friends1 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You called your friends";
    image.src = canny;
    image.alt = "canny1";
    page.innerHTML = `Coincidentally, most of them are around were you live.<br/>
        They are going to be here in a few minutes.`;
    link.innerHTML = "Next";
    link.onclick = friends2();
}