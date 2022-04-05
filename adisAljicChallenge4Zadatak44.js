/* 4. Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. Spil ukupno ima 52 karte, 
‘A’, ‘1’, ’2’, ’3’, ’4’, ’5’, ’6’, ’7’, ’8’, ’9’, ’10’, ’J’, ’Q’, ’K’ u cetiri znaka ‘List’,’Srce’, ‘Kocka’ i ‘Mak’. 
Ispisati podjeljene karte.
*/
let brojevi = [2,3,4,5,6,7,8,9,10];
let slova = ["A","J","Q","K"];
let broj= [];
let znak=["List","Srce","Kocka","Mak"];
let karta =[];
broj = brojevi.concat(slova);
karta.push(znak,broj);

let kartaZaIzvlacenje;
const cijeliSpil = [];
const podijeljeniSpil = [];

for (let i = 0; i < znak.length; i++) {
    
    for (let j = 0; j < broj.length; j++) {
        cijeliSpil.push (karta [0][i] + " "+ karta[1][j]);
        

    }   
     

}   
for (k = 1; k<=6;k++)
{
    kartaZaIzvlacenje = Math.trunc(1+Math.random()*(cijeliSpil.length-1));
    
    // kartaZaIzvlacenje mi generise nasumican broj neke karte iz spila koja simulira izvlacenje te karte
    podijeljeniSpil.push(cijeliSpil.splice(kartaZaIzvlacenje,1)); // sa splice sam uzeo tu kartu koja je izvucena iz spila te je dodijelio u novi array
}

console.log("Podijeljene karte su: "+ podijeljeniSpil+ ".")


