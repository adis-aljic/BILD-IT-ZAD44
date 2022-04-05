/*2. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Zatim, sabrati sve elemente
 koji se nalaze na parnom indexu, i ispisati sumu u konzolu.

*/
let niz;
let suma=0;


niz = [];


for (let i = 0; i < 20; i++) {

    niz.push(Math.trunc(1 + Math.random() * 99));

    if (i % 2 == 0) {
        suma += niz[i];
    }
    
}
console.log(niz)
console.log("Suma brojeva sa parnim indexom u nizu je: " + suma + ".")