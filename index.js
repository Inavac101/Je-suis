const target = document.getElementById('target');
let array = ["développeur", "photographe", "créatif", "chanteur", "artiste", "magicien", "danseur", "musicien"];

// on crée un word index

let wordIndex = 0;
let letterIndex = 0;

//On crée un span à l'aide d'une fonction

const createLetter =  () =>{

    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];
// createLetter();

// setInterval(()=>{
// letterIndex++;
//     createLetter()}, 200);


setTimeout(()=> {
    letter.remove();
}, 2800);
};

const loop = () => {
    setTimeout(() => {
        if(wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[wordIndex].length) {
        createLetter();
        letterIndex++;
        loop();
    } else {
        wordIndex++;
        letterIndex = 0;
        setTimeout(()=>{
            loop();
        },2800);
        }
    }, 60);
};
loop();