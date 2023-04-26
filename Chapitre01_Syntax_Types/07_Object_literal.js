//creation d'un object
const myObj = {
    noms: "Valentin",
    age: 12,
    location: "Congo-Kinshasa",
    contact: "+243891005317",
    blogs: [
        {
            title: 'Débuter avec JS',
            likes: 100
        },
        {
            title: 'Débuter avec HTML',
            likes: 10
        },
        {
            title: 'Débuter avec CSS',
            likes: 300
        },
    ],
    //methode d'instance
    afficheBlogs(){
        console.log('voici les oeuvres de notre utilisation :');
        //affichage des éléments de l'attribut blog
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

//manupilation d'un object
//affichage objet
console.log(myObj);

//Acceder aux éléments d'un object : il existe deux façons : 
//notation dot (.)
console.log(myObj.noms);
//réafection d'un attribut à un éléments de l'objet
console.log(myObj.age = 15);

//accès via les crochets.
console.log(myObj["contact"]);
console.log(myObj["contact"]= "valnas@gmail.com");

//affiche de la methode d'instance de notre tableau
console.log(myObj.afficheBlogs());
