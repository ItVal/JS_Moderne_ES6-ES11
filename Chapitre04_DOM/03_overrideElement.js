//innerText
const para = document.querySelector('p');
console.log(para.innerHTML); //affiche ce trouvant sur ce paragraphe (le premier p pour notre cas)

//Remplaçons le contenu de ce paragraphe par un autre contenu
para.innerText = 'Bonjour le Congo, mon pays';
console.log(para.innerText); // notre balise p n'a plus bonjour le monde comme contenu mais desormais Bonjour le congo, mon pays

//Ajouter du contenu sur ce même paragraphe sans pour autant perdre l'ancien
para.innerText += ', Merci val pour ce petit tuto';

//Modification de contenus tous les paragraphes avec querySelectorAll
const paras = document.querySelectorAll('p');
paras.forEach((params) =>
	console.log(
		(params.innerText += ', Nous ajoutons les element dans tous les paramètres')
	)
);

//Modification de balise avec innerHtml
const newBalise = document.querySelector('.contenu');
newBalise.innerHTML += '<h2>Je suis heureux d être ici'; //crée une nouvelle balise h2 au sein de la div ayant comme class .contenu
console.log(newBalise);

//Simulation des données
const tab = ['Val', 'Nas', 'Gloire'];
tab.forEach((newpar) => (newBalise.innerHTML += `<h3>${newpar}</h3>)`)); //crée 3 h3 de ces 3 éléments se trouvant dans ce tableau.
