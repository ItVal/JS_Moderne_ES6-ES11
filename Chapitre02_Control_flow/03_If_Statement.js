//Déclaration conditionnelle avec if/else 
let age = 0;

//concatenantion d'une suite conditionnelle avec &&

if (age > 1 && age <= 17) {
    console.log("vous êtes mineur");
}else if (age > 18 && age < 50){
    console.log("vous êtes adulte");
}else if (age <1){
    console.log("vous êtes bébé");
}else{
    console.log("vous êtes vieux");

}