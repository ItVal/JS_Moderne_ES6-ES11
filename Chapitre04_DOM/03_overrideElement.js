//innerText
const para = document.querySelector('p');
console.log(para.innerHTML); //affiche ce trouvant sur ce paragraphe (le premier p pour notre cas)

//Modifions le contenu de ce paragraphe
para.innerText = 'Bonjour le Congo, mon pays';
console.log(para.innerText); // notre balise p n'a plus bonjour le monde comme contenu mais desormais Bonjour le congo, mon pays
