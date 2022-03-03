import normal from "../images/normal.png"

export function friends10 () {
    let header = document.getElementById("header");
    let image = document.getElementById("image");
    let page = document.getElementById("page");
    let link = document.getElementById("link");

    header.textContent = "Your mom came back";
    image.src = normal;
    image.alt = "normal";
    page.innerHTML = `Your mom came back from the supermarket.<br/>
        She says that is going to do something for everyone to eat<br/>
        Everyone seems to forget about your victory,<br/>
        no friends lost today.`;
    link.innerHTML = "End";
    link.href = "index.html";
}