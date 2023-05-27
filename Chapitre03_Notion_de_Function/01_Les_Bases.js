//declaration simple d'une fonction : Avec cette façons de declaration, nous pouvons appellé notre function avont même que cette dernière ne soit déclaré
function helloWord(){
    console.log("Hello World");
}
//Après avoir déclaration une fonction, cette dernière doit être appellée pour avoir le resultat attendu
helloWord();

//Declaration fonctionnelle. Avec cette deuxième façons de declaration, on ne peut appellé notre function avant qu'elle soit déclaré comme c'était le cas de notre première function
const myHelloWorld = function() {
    console.log("Hello my second function");
}
//Appellons notre fonction
myHelloWorld();