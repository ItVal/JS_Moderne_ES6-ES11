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

//fonction qui retourne une valeur
const myReturntFunction = function(a, b, c){
    const somme = a+b+c;
    return somme; //ici on retourne la valeur se trouvant dans notre variable somme
}

//appellons la en conservant cette valeur dans un autre valeur pour nous aidé de l'utiliser plus tard (l'affiché par exemple) 
const myResult = myReturntFunction(12, 13, 14);
console.log(myResult); //affichage de la valeur que nous retourne notre function.
