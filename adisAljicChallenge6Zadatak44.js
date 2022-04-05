/*
6. Napisati program koji racuna faktorijel nekog broja n. N broj uzeti proizvoljno, izracunati faktorijel zatim ispisati rezultat.
 Faktorijel broje se racuna na sljedeci nacin: faktorijel = n * (n-1)* (n-2)... * 1.

*/

let proizvod;
let faktorijel;
let n;
let clan;

n=4;
clan = 1;
proizvod = 1;

for (let i=n; i>1;i--) 
{
    clan = (i-1); 
     proizvod *= clan;
}
faktorijel = n*proizvod;
console.log("Faktorijel broja " + n+" je " + faktorijel+ ".")