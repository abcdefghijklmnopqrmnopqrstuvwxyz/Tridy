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
        index++;
    }

    smazAuto(id)
    {
        this.seznam.forEach(element => {
            if(id = element.id)
            {
                this.seznam.shift(element);
            }
        });
    }

    vypisAuta()
    {
        this.seznam.forEach(element => {
            yield element;
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
const ids = document.getElementById("id");

const pridej = document.getElementById("pridej");
const odeber = document.getElementById("odeber");

let servis = new Servis("Spira");
let index = 0;

pridej.addEventListener("click", add);
odeber.addEventListener("click", remove);

function add()
{
    servis.pridejAuto(new Auto(rok.value, znacka.value, model.value, km.value, index));
    rok.value = "";
    znacka.value = "";
    model.value = "";
    km.value = "";
}

function remove()
{
    servis.smazAuto(id.value);
    ids.value = "";
}