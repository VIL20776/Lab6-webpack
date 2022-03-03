import {friends8} from "./friends8";
import canny from "../images/canny/canny7.png"

export function friends7 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Jackpot!";
    image.src = canny;
    image.alt = "canny7";
    page.innerHTML = `Just a few turns to end, you stealed all the coins<br/>
        from the one that had the most coins.
        You are rich!`;
    link.innerHTML = "Next";
    link.onclick = friends8();
     
}