document.getElementById("button_submit").addEventListener("click", function(event){
    event.preventDefault();
});

function criarCard(){
    let titulo = document.getElementById("titulo").value;
    let url = document.getElementById("url").value;
    let desc = document.getElementById("desc").value;
    if(desc.length > 230){
        desc = desc + "...";
    }
    let url_con = document.getElementById("url_con").value;

    let div = document.createElement("div"); // criar uma div
    div.className = "col-sm-6 col-md-4 col-lg-3 mt-4"; // adiciona classe a div

    let divCard = document.createElement("div");
    divCard.className = "card h-100";
    div.appendChild(divCard); // coloca o divcard dentro da div

    let img = document.createElement("img");
    img.className = "card-img";
    img.setAttribute("src", url);
    img.setAttribute("alt", titulo);
    divCard.appendChild(img);

    let divbody = document.createElement("div");
    divbody.className = "card-body";
    divCard.appendChild(divbody);

    let h4titulo = document.createElement("h4"); // criar h4
    h4titulo.className = "card-titulo"; // colocar classe 
    h4titulo.innerText = titulo; // colocar texto 
    divbody.appendChild(h4titulo); // colocar dentro do divblock

    let divtexto = document.createElement("div");
    divtexto.className = "card-texto";
    divbody.appendChild(divtexto);

    let p = document.createElement("p");
    p.innerText = desc;
    divbody.appendChild(p);

    let divfooter = document.createElement("div");
    divfooter.className = "card-footer text-center";
    divCard.appendChild(divfooter);

    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.innerText = "CONCESSIONÁRIA";
    a.setAttribute("href", url_con);
    divfooter.appendChild(a);


    let container = document.querySelectorAll(".row");  

    container[0].appendChild(div);
}