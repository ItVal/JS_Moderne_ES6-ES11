//utilisation de getAttribute
//Affichage d'un attribut
const mylink = document.querySelector('a');
console.log(mylink.getAttribute('href'));

//Modification de l'attribut d'un élement
mylink.setAttribute('href', 'https://wmdrc.org');
// console.log(link);

//ajout de class sur les balises
const myAddAttribute = document.querySelector('p');
myAddAttribute.setAttribute('class', 'error'); //on vient d'ajouter sur la balise p une classe error

//ajouter du syle sur notre paragraphe
myAddAttribute.setAttribute('style', 'color:red');
