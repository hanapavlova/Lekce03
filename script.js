/*
const pocetHodin = Number(prompt("Zadej pocet hodin:"));
const hodinovka = 6000;
const bonus = 1000;

console.log("Vyplata: " + ((pocetHodin*hodinovka) + bonus));
*/
/*
Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru: Květoslav Voňavý, věk: 67
*/
/*
const jmeno = prompt("Zadejte své jméno: ");
const vek = Number(prompt("Zadejte svůj věk: "));

document.body.innerHTML += jmeno + ", věk: " + vek
*/
/*
Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.
*/

/*
const hodinovka = Number(prompt("Zadejte svou hodinovou sazbu: "));
//const hodinDenne = 8;
//const pocetDni = 21;
const hodinDenne = Number(prompt("Kolik hodin denně pracujete?"));
const pocetDni = Number(prompt("Kolik dní v měsíci pracujete?"));

document.body.innerHTML += "Vaše měsíční hrubá mzda je " + (hodinovka*hodinDenne*pocetDni)
*/

//OBJEKT
/*
const jmeno = "Hawai" //String
const cena1 = 200 //Number
const rozvoz = true //Bool

const pizza = {
    jmeno: "Hawai",
    cena: 200,
    rozvoz: true
}

console.log(pizza.jmeno)

const pizzerie = {
    pizzaHawai: {
        jmeno: "Hawai",
        cena: 200,
        rozvoz: true
    },
    pizzaSalami: {
        jmeno: "Salami",
        cena: 300,
        rozvoz: false
    },
    pizzaQuattroFormaggi: {
        jmeno: "QuattroFormaggi",
        cena: 350,
        rozvoz: true
    }
}
document.body.innerHTML += "<p>" + pizzerie.pizzaQuattroFormaggi.jmeno + "</p>";
document.body.innerHTML += "<p>" + pizzerie.pizzaQuattroFormaggi.cena + " Kč </p>";
console.log(pizzerie.pizzaQuattroFormaggi.jmeno + "\n" + pizzerie.pizzaQuattroFormaggi.cena);
*/

/*
// vlastnosti se dají i doplňovat, aniž jsou v objektu
const pizza = {
    jmeno: "Hawaii",
    cena: 200,
    rozvoz: true
}

console.log(pizza.jmeno)

pizza.jmeno = "Salami"
pizza.skladem = true

console.log(pizza.jmeno)
console.log(pizza)
*/

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

//  Pomocí tečkové notace vypište do stránky dispozici bytu.
document.body.innerHTML += "<p> Dispozice bytu je " + apartment.disposition + ".</p>"

// Vypište do stránky čistý nájem bez poplatků.
document.body.innerHTML += "<p> Čistý nájem bez poplatků je " + (apartment.price.rent - (apartment.price.fees.water + apartment.price.fees.energy + apartment.price.fees.services)) + ".</p>"

// Vypište do stránky celý objekt představující výměru bytu.
document.body.innerHTML += "<p> Výměra bytu je " + apartment.area.floorage + " " + apartment.area.units + " a  má " + apartment.area.balcony + " balkony. </p>"
//console.log(apartment.area) // vypíše celý objekt

// Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
const mesto = apartment.city
const mestskaCast = apartment.district
document.body.innerHTML += "<p>Byt se nachází v lokalitě " + mesto + ", " + mestskaCast + ".</p>"

// Změnte stav inzerátu z 'free' na 'taken'.
apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + ".</p>"

//V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
//Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`

/*
Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.
Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/
const jmeno = prompt("Zadejte své jméno: ");
const vek = Number(prompt("Zadejte svůj věk: "));
const jazyk = prompt("Jakým jazykem chcete komunikovat?")

document.body.innerHTML += jmeno + ", věk: " + vek

const person = {
    name: jmeno,
    age: vek,
    language: jazyk
}

document.body.innerHTML += "<p>Jméno: " + person.name + ", věk: " + person.age + ", jazyk: " + person.language + ".</p>"






