//creation d'un object
const myObj = {
    noms: "Valentin",
    age: 12,
    location: "Congo-Kinshasa",
    contact: "+243891005317"
};

//manupilation d'un object
//affichage objet
console.log(myObj);

//Acceder aux éléments d'un object : il existe deux façons : 
//notation dot (.)
console.log(myObj.noms);
//réafection d'un attribut à un éléments de l'objet
console.log(myObj.age = 15);

//accès via les crochets.
console.log(myObj["contact"]);
console.log(myObj["contact"]= "valnas@gmail.com");
