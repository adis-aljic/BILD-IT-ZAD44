/* 3. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Ispisati ovaj pocetni niz u konzolu.
 Zatim izmjesati elemente u nizu, te ponovo ispisati niz u konzolu. Za mijesanje niza, minimalan broj iteracija je jednak duzini niza.

*/

let niz;
let broj;
niz = [];
let brojac = 0;
while (brojac < 20) {
    broj = Math.trunc(1+Math.random() * 99);
// ponovo sam iskoristio ovaj uslov da ne bi u nizu imao brojeve koji se ponavljaju
if (niz.includes(broj) == false)

{ niz.push(broj); 
brojac++;}

}
let brojaci = 0;
let indexi=[];
    console.log("Orginalni niz je: " + niz+ ".")

// sa ovim brojacem sam generisao nove indexe za  postojeci niz te sam ih pushao u neki novi niz     
while (indexi.length<20) {
    let broj = Math.trunc(Math.random() * 20);
    if (!indexi.includes(broj) ){
        indexi.push(broj);
} 
}
let noviNiz=[];
// novi niz mi je takodjer pomocni niz koji mi je posluzio da preko njega gore dobijene elemente niza prebacim kao indekse za niz
for (let i = 0; i < 20; i++) {

    noviNiz[indexi[i]] = niz[i]; 
    
}
niz = noviNiz;


console.log("Izmjesani niz je: " +niz+ ".")


