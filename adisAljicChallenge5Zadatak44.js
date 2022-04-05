/*5. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. 
Zatim, program kreira novi niz, koji ima sve elemente kao i prvi niz ali obrnut redoslijed. 
Ako je prvi niz [12, 24, 7], drugi niz ce biti [7, 24, 12].
*/
let niz;
niz= [];


for (i=0; i<20; i++) {
let broj = Math.trunc(Math.random()*100);
    

niz.push(broj);


}
console.log("Nasumicno generisan niz od 20 elemenata je: " + niz + ".")
let drugiNiz = [];
for (let j = 0; j<20;j++)
{
    
    drugiNiz.push(niz[19-j]);
}
console.log("Gore navedeni niz u obrnutom redosljedu je: " +drugiNiz + ".")