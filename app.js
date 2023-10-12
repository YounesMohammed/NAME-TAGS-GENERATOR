let nameText = document.querySelector(".input");
let outputText = document.querySelector(".generate");
let add = document.querySelector(".add");
let ebg1 = document.querySelector(".color1");
let ebg2 = document.querySelector(".color2");
let ehello = document.querySelector(".color3");
let enm = document.querySelector(".color4");
let ebnm = document.querySelector(".color5");
let paragraph1 = document.querySelector(".color6");
var count = 0;

function randomColor() {
    var x = Math.floor(Math.random() * 250);
    var y = Math.floor(Math.random() * 250);
    var z = Math.floor(Math.random() * 250);
    return `rgb(${x} ${y} ${z})`;
}

//added buttons
document.querySelector(".add").onclick = function () {
    if (nameText.value !== '') {
        bg1 = randomColor();
        bg2 = randomColor();
        hello = ehello.value;
        nm = enm.value;
        bnm = ebnm.value;
        paragraphp = paragraph1.value;
        parentForm = document.createElement("span");
        parentForm.className = "continer";
        parentForm.style = `margin: 10px;
        padding:4vh 2vw;
        height:25vh;
        background-image: linear-gradient(45deg, ${bg1} , ${bg2});
        position:relative;
        border-radius: 15px;
        @media (max-width: 768px) {.container {width: 40vw;} .theName {margin-top:50px;}}`;

        childOne = document.createElement("h1");
        childOne.textContent = "HELLO";
        childOne.style = `padding: 1vw;
        margin: auto;
        width: max-content;
        font-family: cursive;
        color:${hello};`;
        childTwo = document.createElement("div");
        childTwo.className = "theName";
        childTwo.style = `color:${nm};
        font-weight:600;
        margin-top: 36px;
        background-color:${bnm};
        border-radius: 5px;
        min-width: 15vw;
        padding: 2vh 1vw;`;
        childTwo.textContent = nameText.value;
        childThree = document.createElement("p");
        childThree.textContent = "my name is";
        childThree.style = `color:${paragraphp}; `;
        deleteCard = document.createElement("button");
        deleteCard.className = "delete";
        deleteCard.style = "color: white; " +
            "font-weight: bold; " +
            "cursor: pointer;" +
            "border-radius: 5px; " +
            "width: 20px;" +
            "border: none; " +
            "height: 20px;" +
            "position: absolute;" +
            "right: 10px;" +
            "top: 10px;" +
            "background: red;" +
            "background-size: cover; " +
            "padding: 1px 1px 1px 1px; ";
        deleteCard.textContent = "X";
        if (count === 0) {
            deleteAll = document.createElement("button");
            deleteAll.className = "deleteAll";
            deleteAll.style =
                "background-color: red;\n" +
                "border: none;\n" +
                "font-size: 13.5px;\n" +
                "padding: 0.5rem 1rem;\n" +
                "right:5vw;" +
                "top:19vh;" +
                "height: 5vh;" +
                "width: 100vh;" +
                "border-radius: 10px;" +
                "border: 0.2px solid none;" +
                "position:absolute;" +
                "width: max-content;" +
                "font-size: 14px;" +
                "cursor:pointer;" +
                "color: white";
            deleteAll.textContent = "Clear All";
            outputText.appendChild(deleteAll);
        }
        parentForm.appendChild(deleteCard);
        parentForm.appendChild(childOne);
        parentForm.appendChild(childThree);
        parentForm.appendChild(childTwo);
        outputText.appendChild(parentForm);
        document.body.appendChild(outputText);
        count++;
        nameText.value = "";
    } else
        return console.log("You must provide a name");
}

//  for delete the box
document.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
    }

});
//  for delete the box
document.addEventListener("click", function (e) {
    if (e.target.className === "deleteAll") {
        outputText.innerHTML = "";
        count = 0;
    }
});
