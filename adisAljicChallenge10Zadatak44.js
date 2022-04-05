/*
10. Napisati program koji će neki prirodni broj A (A > 100000), te kreirati i ispisati broj B koji će se sastojati
 od cifara broja A u obrnutom redoslijedu u kojem je svaka parna cifra uklonjena. (npr. ako se unese 45362792 funkcija će vratiti 9735). 
 Ispisati brojeve A i B i razliku tih brojeva.
*/
let broj = Math.trunc(Math.random()*1000000);
let obrnutiBroj = 0;
let ostatak=0;
let razlika;
let orginalniBroj=broj;
while (broj >0 )
{
ostatak=broj%10;
if (ostatak%2==1)
{    obrnutiBroj = obrnutiBroj*10 + ostatak;
}    
broj = Math.trunc(broj/10);

}

razlika = orginalniBroj - obrnutiBroj;

console.log ( "Broj je: " + orginalniBroj + ".")
console.log("Obrnuti broj bez parnih cifara je: " + obrnutiBroj + ".")
console.log("Razlika broja i obrnutog boja bez parnih cifara je: " + razlika+ ".")