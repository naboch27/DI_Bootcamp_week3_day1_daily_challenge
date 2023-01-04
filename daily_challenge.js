/**********
 * Des Instructions
Dans cet exercice, nous allons créer une page Web avec un fond noir comme univers et nous remplirons l'univers de planètes et de leurs lunes.
Nous fournirons la page HTML.
Vous n'avez qu'à travailler avec un fichier JS.

Créez un tableau dont la valeur est les planètes du système solaire.
Pour chaque planète du tableau, créez un <div>fichier using createElement. Cette div doit avoir une classe nommée "planet".
Chaque planète doit avoir une couleur de fond différente. ( Astuce : vous pouvez ajouter une nouvelle classe à chaque planète - chaque classe contenant une couleur de fond différente).
Enfin, ajoutez chaque div au <section>dans le HTML (présenté ci-dessous).
Bonus : Faites le même processus pour créer les lunes.
Attention, chaque planète possède un certain nombre de lunes. Comment devez-vous les afficher ?
Faut-il encore utiliser un tableau pour les planètes ? Ou un tableau d'objets ?
 */


const planets = ["mars", "saturn", "jupiter", "mercury", "venus", "earth", "uranus"]

for (const planet of planets) {
    console.log("planet",planet)
    const div = document.createElement("div")
    div.classList.add("planet:")
    div.classList.add(planet)
     console.log("div : ",div)
   // const section = document.querySelector(".listPlanets")
   // section?.appendChild(div)
}

