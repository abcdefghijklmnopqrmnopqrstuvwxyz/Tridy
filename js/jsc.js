class Servis
{
    seznam = [];

    constructor(nazev)
    {
        this.nazev = nazev;
    }

    pridejAuto(Auto)
    {
        this.seznam.push(Auto);
    }

    smazAuto(id)
    {
        this.seznam.forEach(element => {
            if(id == element.id)
            {
                this.seznam.shift(element);
            }
        });
    }
}

class Auto
{
    constructor(rok, znacka, model, km, id)
    {
        this.rok = rok;
        this.znacka = znacka;
        this.model = model;
        this.km = km;
        this.id = id;
    }
}

const rok = document.getElementById("rok");
const znacka = document.getElementById("znacka");
const model = document.getElementById("model");
const km = document.getElementById("km");

const pridej = document.getElementById("pridej");
const list = document.getElementById("list");

const tableTemple = [rok, znacka, model, km, "Rok", "Znacka", "Model", "Km"];
let servis = new Servis("Spira");
let index = 0;

pridej.addEventListener("click", add);

function add()
{
    servis.pridejAuto(new Auto(rok.value, znacka.value, model.value, km.value, index));
    addCard();
    rok.value = "";
    znacka.value = "";
    model.value = "";
    km.value = "";
    index++;
}

function removeCard(ids)
{
    servis.smazAuto(ids);
    const removeElement = document.querySelector("div[data-id='" + ids + "']");
    removeElement.remove();
}

function addCard()
{
    let card = document.createElement("div");
    card.setAttribute("data-id", index);
    card.classList.add("card");
    card.classList.add("mx-2");
    card.style.margin = "0 0 20px 0";
    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    let h5 = document.createElement("h4");
    h5.classList.add("card-title");
    h5.innerHTML = "Auto id: " + index;
    let div = document.createElement("div");
    div.classList.add("d-block");
    let a = document.createElement("a");
    a.setAttribute("data-id", index)
    a.setAttribute("href", "#");
    a.addEventListener("click", function() 
    {
        removeCard(this.getAttribute("data-id"));
    });
    a.style.margin = "15px 0 0 0";
    a.classList.add("btn");
    a.classList.add("btn-primary");
    a.innerHTML = "Odeber Auto"

    for(let i = 0; i < tableTemple.length / 2; i++)
    {
        let p = document.createElement("p");
        p.classList.add("card-text");
        p.innerHTML = tableTemple[i + 4] + ": " + tableTemple[i].value;
        div.appendChild(p);
    }

    cardbody.appendChild(h5);
    cardbody.appendChild(div);
    cardbody.appendChild(a);
    card.appendChild(cardbody);
    list.appendChild(card);

    saveLocal();
}

function saveLocal()
{
    let item = list;
    let save = JSON.stringify(item);
    localStorage.setItem(0, save);
}

function loadLocal()
{
    console.log(localStorage.getItem(0));
}

window.onload = function() {loadLocal()};