//Boucle While()

let i = 0 //ici le conteur est initialisé en dehors de la boucle

while(i<5){
    console.log("imprime moi le nombre de fois du conteur", i);
    i++ //l'incrémentation aussi ça se fait à l'interieur de la boucle plutôt sur la condition
}


//Parcourir une liste (tableau) d'élément avec la boucle while

let myList = ['Nas', 'Val', 'Jacques', 'Angelas']
let j = 0; //notre conteur
while( j < myList.length){
    console.log(j, myList[j]);
    j++
}

