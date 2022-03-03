import {friends9} from "./friends9";
import canny from "../images/canny/canny8.png"

export function friends8 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You won!";
    image.src = canny;
    image.alt = "canny8";
    page.innerHTML = `Thanks to the bonus stars from the end, you had enough<br/>
        to get the first place.<br/>
        You won! Even when everyone else tried their best to ruin you.`;
    link.innerHTML = "Next";
    link.onclick = friends9();
     
}