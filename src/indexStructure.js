export function indexStructure () {
    //Creacion de elementos
    let newDiv = document.createElement("div");
    let newH1 = document.createElement("h1");
    let newH2 = document.createElement("h2");
    let newImg = document.createElement("img");
    let newP = document.createElement("p");
    let newUl = document.createElement("ul");
    let newLi1 = document.createElement("li");
    let newA1 = document.createElement("a");
    let newLi2 = document.createElement("li");
    let newA2 = document.createElement("a");

    newH1.id = "header";
    newH2.id = "subheader";
    newImg.id = "image";
    newP.id = "page";
    newA1.id = "moviesLink";
    newA2.id = "friendsLink";

    //Creacion de la estructura
    document.body.appendChild(newDiv);
    document.body.appendChild(newH1);
    document.body.appendChild(newH2);
    document.body.appendChild(newImg);
    document.body.appendChild(newP);
    document.body.appendChild(newUl);
    newUl.appendChild(newLi1);
    newLi1.appendChild(newA1);
    newUl.appendChild(newLi2);
    newLi2.appendChild(newA2);
}
