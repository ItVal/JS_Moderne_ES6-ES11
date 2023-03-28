// Arrays (tableau), en js le tableau est une collection des donnée du type {objet}
const arrays = ['val', 'Nas', 'Amisi', 'Shab'] //tableau de strings
console.log(arrays[3]);

const tab = [1, 10, 90] //tableau de number
console.log(tab.length);

//tableau aléatoire (tableau contenu les trings et les nombres)
const myTableau = [1, 10, 'Val', 12, 'Erick']
console.log(myTableau[2]);

//quelques méthodes
const noms = ['Nasibu', 'Valentin', 'Jonas'];
// console.log(noms.join('-')); //pour joindre les éléments du tableau
// console.log(noms.indexOf('Jonas')); //pour voir l'indice d'un élement du tableau
// console.log(noms.concat(['Mirelle', 'Angella'])); //pour concatener plusieurs élt dans un tableau
console.log(noms.push('NVJ')); //pour ajouter un élt dans un tableau (à la fin)
console.log(noms);