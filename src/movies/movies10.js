import normal from "../images/normal.png";

export function movies10 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "It was your mom";
    image.src = normal;
    image.alt = "normal";
    page.innerHTML = `AIt was your mom after all.<br/>
        She came earlier than expected and to your room to check<br/>
        if you were alright. <br/>
        You really were scared, but you think that this is <br/>
        going to be a good story to tell in the future.`;
    link.innerHTML = "End"
    link.onclick = () => {
            window.location.replace("index.html");
        }
}