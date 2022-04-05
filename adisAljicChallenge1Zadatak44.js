/* 1. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Zatim ispisati niz u konzolu.
*/


let niz;
let broj;
niz = [];
let brojac = 0;
 /* while petlju sam koristio da bih zaobisao problem slijedeci problem. Kada mi var broj baci nasumican broj koji vec ima nizu,
kada sam imao for petlju onda on i dalje je brojao tu iteraciju tako da sam dobijao niz sa manje brojeva nego sto je zadano, dok sa
while petljom sa ovim uslovom nemam taj problem */
while (brojac < 20) {      
    broj = Math.trunc(1+Math.random() * 99);
    
    // Posto mi je ponekada popunjavalo sa niz sa istim brojevima napravio sam ovo uslov da bi to zaobisao
    if (niz.includes(broj) == false)

{ niz.push(broj); 
brojac++;}

}

console.log("Nasumucno generisan niz od 20 clanova je: " +niz+ ".")