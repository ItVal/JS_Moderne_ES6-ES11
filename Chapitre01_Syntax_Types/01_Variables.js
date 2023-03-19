//declaration des variables en js

//avec le mot clé let (on peut changer les contenus des variables crée avec let)
let nomVariable = 'ici les valeurs de votre variable du type string' ;
let age = 20;
console.log(age); //ici la vaelur de age est 20
age = 30
console.log(age); //ici la vaelur de age change à 30

//avec le mot clé const (on ne peut changer les contenus des variables crée avec const car c'est sont de constantes)
const constVariable = 10; //les valeurs de votre variable du type integer qui ne va pas changer même si on essaie de lui attribué une autre variable
console.log(constVariable); //ici la vaelur de constVariable est 20
constVariable = 50 //ici la vaelur de constVariable ne changera pas et çava générer une erreur vu qu'elle a été crée avec le mot clé const


//avec le mot clé var (je vous présente ce mot clé juste à titre d'information car on ne l'utilise plus). utuliser pour avoir accès à la valeur de cette variable partout dans votre fichier js
var myVariable = 'Admin';