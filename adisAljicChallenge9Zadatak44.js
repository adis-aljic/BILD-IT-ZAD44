/*
9. Napisati program koji simulira bacanje 3 kockice (jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6). 
Simulirati konstantno bacanje sve tri kockice dok se u dva uzastopna bacanja ne desi da se dobiju isti brojevi na sve tri kockice 
(npr. u šestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice). 
Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.
*/
let kockica1;
let kockica2;
let kockica3;
let brojBacanja=0;
let broj = 0;
let brojac1=0;
let uzastopno = [];
while (broj < 2) {

    brojBacanja++;
    kockica1 = Math.trunc(1 + Math.random() * 5);
    kockica2 = Math.trunc(1 + Math.random() * 5);
    kockica3 = Math.trunc(1 + Math.random() * 5);
    if (kockica1 == kockica2 && kockica1 == kockica3 && kockica2 == kockica3 ) { 
        uzastopno.push(kockica1, kockica2, kockica3);
        brojac1++;}
        else {brojac1=0}
        if (brojac1==1 || brojac1==2) {
            ++broj;
        }
        else {broj = 0;}

}
console.log("Broj bacanja prije nego sto je igrac dobio uzastopno dva puta isti broj na svim kockicama je: " + brojBacanja + ".")
// koristio sam dva pomocna brojaca da mi broje kada god se ispuni uslov da budu tri iste kockice i da mi broji kada budu dva puta za redom
// dvije iste kockice.

