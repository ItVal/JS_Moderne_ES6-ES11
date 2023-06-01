//utilisation de querySelector
//selection via une balise
const para = document.querySelector("p"); //ça selectionne le premier paragraphe du dom
console.log(para);

//Selection d'un élement spécifique via une classe ou id
const specificSelect = document.querySelector(".err"); //selection via une classe
console.log(specificSelect);

//selection complexe d'un element
const complexeSelect = document.querySelector("div.err");
console.log(complexeSelect);

//obtenir la ref d'un element via le navigateur
const refNav = document.querySelector('body > h1:nth-child(2)')
console.log(refNav);

//selection multiple des élements : querySelectorAll
const params = document.querySelectorAll('p') //on selection toutes les bases p
console.log(params);
