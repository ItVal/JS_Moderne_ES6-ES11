//le type de données string (chaine de caractères)

//sans declaration d'une variable
console.log('salut le monde') //vous pouvez utiliser soit double cote, soit un seul cote

//avec une declaration de variable
let nom = 'Valentin'
console.log(nom) //afichage sur la console "Valentin"

//concatenation de strings
let name = 'Nasibu';
let firstname = 'jonas';
let allNames = name + '' +firstname  
console.log(allNames); //afichage sur la console "Nasibu jonas"

//obtenir un caractère d'un string via sa position
console.log (allNames[1]); //afichage sur la console "a"

//obtenir le nombre de caractère que contient un string
console.log (allNames.length); //afichage sur la console "12"

//méthode sans arguments ou paramètre
console.log (allNames.toUpperCase()); //afichage sur la console "le noms en majuscule"
console.log (allNames.toLowerCase()); //afichage sur la console "le noms en miniscule"


//méthode avec arguments ou paramètre
console.log (allNames.indexOf('i')); //afichage sur la console "3, qui est la position de i"
console.log (allNames.slice(0, 4)); //afichage sur la console "le string se trouvant entre l'indice 0 et 4"
console.log (allNames.replace("N", "V")); //afichage sur la console "Vasibu à la place de Nasibu car on a remplacer N par V"

