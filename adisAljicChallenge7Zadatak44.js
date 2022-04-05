/*
7. Napisati program koji će generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata.
 (Fibbonacijev niz je niz brojeva koji počinje brojevima 0 i 1, a svaki sljedeći broj u nizu dobija se zbrajanjem prethodna dva: 
    F(0) = 0, F(1) = 1,F(n) = F(n-1) + F(n-2)). 
    Zatim napraviti funkciju koja će u nizu pronaći sve brojeve koji završavanju parnom cifrom i ukloniti ih iz niza. 
    Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih 
    elemenata. Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.
*/

//uradjen
let broj1;
let fib=[0,1,1];
let broj;
broj =0;
let neparniBrojevi = [];

for (let i = 1; i < 18; i++) {
    broj = (fib[i] + fib[i+1]);
    fib.push(broj);
}
console.log("Fibonacijev niz od 20 clanova je " + fib + ".")
function fibonaci(){
    fib.forEach(broj1 => {
        if(broj1 % 2 !== 0) {
            neparniBrojevi.push(broj1);
        }
    })

    fib = neparniBrojevi;
    return fib;
}
    console.log( "Fibonacijev niz od neparnih brojeva je " + fibonaci() + ".")