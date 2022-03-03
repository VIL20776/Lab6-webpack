import {friends5} from "./friends5";
import canny from "../images/canny/canny4.png"

export function friends4 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You called your friends";
    image.src = canny;
    image.alt = "canny4";
    page.innerHTML = `Nobody picked Waluigi.<br/>
        Thats good, because he is your good luck character.<br/>
        You already have a good feeling about this.`;
    link.innerHTML = "Next";
    link.onclick = friends5();
     
}