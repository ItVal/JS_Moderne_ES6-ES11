//getElement by id
const myTitle = document.getElementById('title');
console.log(myTitle);

//getElement by class name
const myParams = document.getElementsByClassName('err');
console.log(myParams);

//HTMLCollection est un peu différent avec NodeList car il ne prend pas en charge
//la méthode forEach

//alors pour avoir accès à ces élements, on doit passé par l'utilisation des indices
console.log(myParams[0]); //affiche le premier élément de la liste
console.log(myParams[1]); //affiche le deuxième élément de la liste

//getElement by tag name
const tagName = document.getElementsByTagName('div');
