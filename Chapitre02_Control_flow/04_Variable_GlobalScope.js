//global scope

let myValue = 20;
console.log("le variable  myValue est accessible en global scop", myValue);

//scope 1
if(true){
    myValue = 100 //reafectaion d'une nouvelle valeur dans notre variable global
    console.log("scope 1", myValue);

  
}
