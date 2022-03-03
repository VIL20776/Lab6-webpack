import {friends7} from "./friends7";
import canny from "../images/canny/canny6.png"

export function friends6 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "You win all the free for all minigames";
    image.src = canny;
    image.alt = "canny6";
    page.innerHTML = `You win all the free for all minigames<br/>
        and the everyone against you minigames too so far.<br/>
        You feel unstopabled.`;
    link.innerHTML = "Next";
    link.onclick = friends7();
     
}