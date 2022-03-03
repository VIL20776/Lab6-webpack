import {movies5} from "./movies5";
import uncanny from "../images/uncanny/uncanny4.png";

export function movies4 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "The movie went like this";
    image.src = uncanny;
    image.alt = "uncanny4";
    page.innerHTML = `You remembered than the movie you just watched<br/>
        went something like this. <br/>
        All of this is just a coincidence right? <br/>
        ... Right?`;
    link.innerHTML = "Next";
    link.onclick = movies5();
     
}