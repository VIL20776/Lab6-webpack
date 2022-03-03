import normal from "./images/normal.png";

export function indexContent () {
    let header = document.getElementById("header");
    let subheader = document.getElementById("subheader");
    let img = document.getElementById("image");
    let page = document.getElementById("page");
    let newA1 = document.getElementById("moviesLink");
    let newA2 = document.getElementById("friendsLink");

    //Asignacion de atributos
    header.textContent = "You are alone in your house at night";
    subheader.textContent = "(Mr. Incredible Story Mode Meme)";
    img.src = normal;
    img.alt = "normal";
    page.innerHTML = `You are alone in your house at night,<br/>
        your mother went to the supermarket and she won't<br/>
        come back any time soon.<br/>
        Nothing really happens were you live so there's nothing<br/>
        to worry about.<br/>
        <br/>
        You decide to...<br/>`;
    newA1.href = "story1.html";
    newA1.innerHTML = "Watch movie"
    newA2.href = "story2.html";
    newA2.innerHTML = "Call friends";
}