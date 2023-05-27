//declaration simple d'une fonction : Avec cette façons de declaration, nous pouvons appellé notre function avont même que cette dernière ne soit déclaré
function helloWord(){
    console.log("Hello World");
}
//Après avoir déclaration une fonction, cette dernière doit être appellée pour avoir le resultat attendu
helloWord();

//Declaration fonctionnelle. Avec cette deuxième façons de declaration, on ne peut appellé notre function avant qu'elle soit déclaré comme c'était le cas de notre première function (recommendé)
const myHelloWorld = function() {
    console.log("Hello my second function");
}
//Appellons notre fonction
myHelloWorld();

//Function avec paramètre 
const myParamsFunction = function(x, y) {
    const res = x + y;
    console.log(`la somme de ${x} et ${y} vaut : ${res}`);
}
// pour une function avec des paramètre, il faut passé les valeurs de paramètre lors de son appel
myParamsFunction(4, 10);
myParamsFunction(25, 25); //l'avant d'une function avec le paramètre, en est qu'on peut appellé notre fonction plusieurs fois avec plusieurs paramètres(ou arguments) différents.

//fonction qui retourne une valeur
const myReturntFunction = function(a, b, c){
    const somme = a+b+c;
    return somme; //ici on retourne la valeur se trouvant dans notre variable somme
}

//appellons la en conservant cette valeur dans un autre valeur pour nous aidé de l'utiliser plus tard (l'affiché par exemple) 
const myResult = myReturntFunction(12, 13, 14);
console.log(myResult); //affichage de la valeur que nous retourne notre function.

//Fonction avec paramètre par defaut
const myDefaultParamsFunction = function(i, j=5) { //j'ai déjà initialisé mon deuxième paramètre avec une valeur par defaut.
    const produit = i * j;
    return produit;
}
//Lors de son appel, on aura juste bésoin d'entréer la valeur d'un seul paramètre car l'autre a déjà une valeur par defaut
const res = myDefaultParamsFunction(40);
console.log(res);

//Arrow function
const arrowFunction = () => console.log("hello arrow function");
//appellons notre arrow function
arrowFunction();

//Arrow function avec un seul paramètre
const arrowFunction1Argument = nom => console.log("hello", nom) //vu qu'on a qu'un seul paramère, on peut ou n'est pas mettre notre argument dans une parantèse.
//appellons notre arrow function
arrowFunction1Argument ("Valentin Nas");

//Arrow function avec un plusieurs paramètres et plusieurs lignes de code

const arrowFunctionPlusArguments = (k, l, j) => {
    const soustraction = k-l-j;
    return soustraction;
}
//appellons notre arrow function
const result = arrowFunctionPlusArguments (100, 2, 40);
console.log(result);

