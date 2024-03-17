let query = new URLSearchParams(window.location.search);
let name = query.get("name") != undefined ? `<span>${query.get("name")}</span>` : "love";
let from = query.get("from") != undefined ? `<span>${query.get("from")}! x</span>` : `<span>someone... x</span>`;
let link = query.get("link") != undefined ? query.get("link") : null;
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let gif = document.getElementById("gif");

document.getElementById("text").innerHTML = `
<p>
    underneath the stars, where feelings align,
    <br><br>
    in the warmth of affection, where ${name} does shine.
    <br><br>
    with each beat, a question in rhyme,
    <br><br>
    will u be my <span>valentine?</span>
</p>
`;

document.getElementById("texts").innerHTML += `<div id="final">
<p>
    <br>
    <span>happy valentines day!</span>
    <br><br>
    love from ${from}
</p></div>`;

function noClick(){
    no.removeAttribute("onclick");
    yes.style.transform = "scale(1.5)";
    no.style.transform = "scale(0)";
    no.style.minWidth = "0";
    no.style.width = "0";
    no.style.minHeight = "0";
    no.style.height = "0";
    no.style.margin = "0";
    no.style.padding = "0";
    no.style.border = "0";

    setTimeout(() => {
        document.getElementById("no").remove();
    }, 300);
}

function yesClick(){
    document.getElementById("buttons").remove();

    gif.style.background = `url("https://media1.tenor.com/m/sWkxuOecj5kAAAAC/kiss-kitty-kiss.gif") center center no-repeat`;
    gif.style.backgroundSize = "250px";
    gif.style.height = "250px";

    document.body.style.backgroundColor = "#fce2ed";

    document.getElementById("text").style.opacity = 0;

    document.getElementById("final").style.opacity = 1;

    if(link != null)
    {
        document.getElementById("final").innerHTML += `<iframe width="${Math.min(560,window.innerWidth - 30)}" height="${Math.min(315,Math.min(560,window.innerWidth - 30) / 560 * 315)}" src="https://www.youtube.com/embed/${link}" style="margin: 0;" allowfullscreen></iframe>`;
    }
}