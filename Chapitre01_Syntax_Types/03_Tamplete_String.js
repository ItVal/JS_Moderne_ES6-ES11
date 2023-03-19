//simple concatenation
let nomA = 'Valentin';
let adressMail = 'valentinhonvj89@gmail.com'


console.log('Votre nom est '+ nomA+ ' et votre adresse mail est '+ adressMail);

//template string
console.log(`Votre nom est ${nomA} et votre adresse mail est ${adressMail}`);

//template html
let htmlTemplate = `
    <h2>Votre nom est ${nomA}</h2>
    <span>et votre adresse mail est</span>
    <p>${adressMail}</p>
`;
console.log(htmlTemplate);