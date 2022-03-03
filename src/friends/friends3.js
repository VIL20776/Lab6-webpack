import {friends4} from "./friends4";
import canny from "../images/canny/canny3.png"

export function friends3 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "They want to play Mario Party";
    image.src = canny;
    image.alt = "canny3";
    page.innerHTML = `You feel lucky today, so you accept it.<br/>
        Everyone else is saying than they are going to make <br/>
        sure than you get in the last position, but you are <br/>
        up for the challenge.`;
    link.innerHTML = "Next";
    link.onclick = friends4();
     
}