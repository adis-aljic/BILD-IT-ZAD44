// 12. Napisati     program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od
// 1 do 20. Zatim sabira sve brojeve koje se nalaze na indexima cija suma
// je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.

// uradjen
let matrica = [];
let matrica1= [];
let matrica2= [];
let matrica3= [];
let matrica4= [];
let suma=0;

    for (let i = 0; i<4; i++) {
        
        let broj = Math.trunc(1 + Math.random()*19);
        matrica1.push(broj)
    }
    for (let i = 0; i<4; i++) {
        
        let broj = Math.trunc(1 + Math.random()*19);
        matrica2.push(broj)
    }
    for (let i = 0; i<4; i++) {
        
        let broj = Math.trunc(1 + Math.random()*19);
        matrica3.push(broj)
    }
    for (let i = 0; i<4; i++) {
        
        let broj = Math.trunc(1+Math.random()*19);
        matrica4.push(broj)
    }
    matrica.push(matrica1,matrica2,matrica3,matrica4);
    console.log("Matrica 4x4 je:")
    console.log(matrica)
    
    for (let i = 0; i < matrica.length; i++) {
        for (let j = 0; j < matrica.length; j++) {
        if ( (i+j) %2==1) {
suma += matrica[i][j]; 

        }
        
    
    
        }}
console.log("Suma brojeva na indeksima cija je suma neparan broj je: " + suma)