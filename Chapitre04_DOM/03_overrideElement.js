//innerText
const para = document.querySelector('p');
console.log(para.innerHTML); //affiche ce trouvant sur ce paragraphe (le premier p pour notre cas)

//Remplaçons le contenu de ce paragraphe par un autre contenu
para.innerText = 'Bonjour le Congo, mon pays';
console.log(para.innerText); // notre balise p n'a plus bonjour le monde comme contenu mais desormais Bonjour le congo, mon pays

//Ajouter du contenu sur ce même paragraphe sans pour autant perdre l'ancien
para.innerText += ', Merci val pour ce petit tuto';

//Modification de tous les paragraphes
const paras = document.querySelectorAll('p');
paras.forEach((params) =>
	console.log(
		(params.innerText += ', Nous ajoutons les element dans tous les paramètres')
	)
);
