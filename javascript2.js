
// const choice = document.querySelectorAll('[data-name]');
// choice.forEach((selectionButton) => {
//     selectionButton.addEventListener('click', e => {
//         const selection = selectionButton.dataset.name
//         console.log(selectionButton.dataset.name);
//         console.log(selectionButton);
//         return selection;
//     })
// });

const userPossibleChoices = document.querySelectorAll('[data-name]');

console.log(userPossibleChoices);

// userPossibleChoices.forEach((element) => {
//     element.addEventListener('click', e => {
//         if (element.dataset.name !== null) {
//             userPlay = element.dataset.name;
//             // console.log(userPlay);
//         }
//     })
// });

let userPlay = userPossibleChoices[1];
console.log(userPlay);
console.log(userPlay.dataset.name);

/* Je veux retourner le mot 'rock' 'paper' ou 'scissors' et le stocker dans ma variable userPlay.
De cette manière je pourrai le passer en paramètre de ma fonction playRound.
Je choisis donc de faire une nodelist de mes 3 choix possibles (rock paper ou scissors) en utilisant querySelectorAll, et je stocke cette nodelist dans une variable
que j'appelle userPossibleChoices.
Une fois que j'ai ma nodelist, je la parcours en utilisant forEach et pour chaque element (que j'appelle ici "selectionButton"),
je place un eventListener qui va écouter l'évènement 'click'. 
l'évènement 'click' engendre tout une liste de paramètres qui s'affichent dans la console du navigateur.
Parmi tous les paramètres engendrés par l'évènement click, je souhaite récupérer le paramètre dataset.name, qui correspondra à 'rock' 'paper' ou 'scissors'.
Je stocke ce nom dans une variable appelée "selection".
Je retourne "selection", ce qui va stocker 'rock' 'paper' ou 'scissors' dans ma variable choice (?) --> C'est là que je ne suis pas sûr.
Si le nom est effectivement stocké dans la variable choice, alors oui, j'ai obtenu le résultat voulu.
 */