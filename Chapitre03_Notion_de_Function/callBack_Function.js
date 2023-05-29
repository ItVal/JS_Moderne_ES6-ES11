//En js, callBack représente une fonction passée en paramètre (argument) d'une autre fonction

//structure
const myCallBackFunction = (callbackFunct) =>{
    //implémenter votre suite d'instruction

    let number = 40;
    callbackFunct(number);
}

//Qand il faut appelé maintenant
myCallBackFunction ((arg) =>{
    //implémenter votre suite d'instruction
    console.log(arg);  //affiche 40 comme resultat
})

//Essayons de comprendre avec l'utilisation de forEach
let tab = ["Val", "Nas", "Roy", "Safi"]

tab.forEach((etudiant, index) => {
    console.log(index, etudiant);
})

//forEach avec un callBack séparé
let myStack = ["react", "angular", "express", "tailwind"]

const stack = (tech, index) => console.log(`${index} My favorite stack is ${tech}`);
myStack.forEach(stack) ;