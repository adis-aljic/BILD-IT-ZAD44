/*8. Napisati program koji uklanja sve samoglasnike iz stringa ‘Make it work, make it right, make it fast.’. 
Nakon sto program ukloni sve samoglasnike ispisati string u konzolu.
*/
let string = "Make it work, make it right, make it fast.";
let stringBezSamoglasnika = "";


for (let i=0; i<=string.length;i++){
    
if ((string.charAt(i) !== "a")&&(string.charAt(i) !== "i")&&(string.charAt(i) !== "e"&&(string.charAt(i) !== "o")&&(string.charAt(i) !== "u")))
    {
        stringBezSamoglasnika += string.charAt(i);
    }
    
}
console.log( "String glasi: "+ string  + "\n" + "Bez samoglasnika ova string glasi: " +stringBezSamoglasnika )
    



