//Boucle ou loop en anglais, est une structure de control qui permet de repeter un bloc de code

//Boucle For
for (let i=0; i<10; i++){
    console.log("Repete moi i jusqu'à :", i); //repète ce message de 0 jusqu'à 9 (10 fois donc)
}

//parcourir les element d'une liste (tableau) avec la boucle for
let names = ["Val", "Nas", "Ly", "Angela", "Jacques"];
//percourons les elements de ce tableau avec la boucle for
for(let i = 0; i < names.length; i++){
    console.log(i, names[i]);  //affichage l'index du tableau + l'élément de cet index
}