//Visualisez ce que contient l'objet Math
console.log(Math);

//Accès aux méthodes liées au Math object
console.log(Math.PI);

//Méthode d'arrondissement automatique (defaut/eccès) round()
const myVaria = 2.2
console.log(Math.round(myVaria));

//Méthode d'arrondissement en eccès ceil()
console.log(Math.ceil(myVaria));

//Conversion d'un nombre decimal en entier avec floor()
console.log(Math.floor(myVaria));

//Génération d'un nombre aléatoire (entre 0 et 1) avec random()
const random = Math.random();
console.log(random);

//Personaliser le nombre aléatoire à générer avec (ex 0 et 100)
const randomPersonal = Math.round(random * 100);
console.log(randomPersonal);
