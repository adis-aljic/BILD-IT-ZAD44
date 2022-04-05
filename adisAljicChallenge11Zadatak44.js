/*
11. Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.
*/
let matrica = [];
let matrica1= [];
let matrica2= [];
let matrica3= [];
let matrica4= [];

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
console.log("Matrica 4x4 je: " )
console.log(matrica)

