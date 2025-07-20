let img = document.querySelector("img");
let inp = document.querySelector(".qrin");
let btn = document.querySelector("button");
btn.addEventListener("click",send);

async function send() {
    await fetch("/submit",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({link:inp.value})
    })
    let r = await fetch("mesc.json");
    let rr = await r.json();
    img.src = rr.link;
    img.style.display = "block";
}
