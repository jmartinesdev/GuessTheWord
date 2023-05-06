let chances = 5;
let myList = [''];
let wordsCategories;
let wordsLetter;

let words = [
    {
        letter: 'FRANCE',
        categories: 'COUNTRIES'
    },
    {
        letter: 'GERMANY',
        categories: 'COUNTRIES'
    },
    {
        letter: 'ENGLAND',
        categories: 'COUNTRIES'
    },
    {
        letter: 'INDIA',
        categories: 'COUNTRIES'
    },
    {
        letter: 'PORTUGAL',
        categories: 'COUNTRIES'
    },

    {
        letter: 'SPAIN',
        categories: 'COUNTRIES'
    },
    {
        letter: 'BRAZIL',
        categories: 'COUNTRIES'
    },
    {
        letter: 'ARGENTINA',
        categories: 'COUNTRIES'
    },
    {
        letter: 'CHILE',
        categories: 'COUNTRIES'
    },

    {
        letter: 'CANADA',
        categories: 'COUNTRIES'
    },
    {
        letter: 'SAUSAGE',
        categories: 'FOOD'
    },
    {
        letter: 'COOKIE',
        categories: 'FOOD'
    },
    {
        letter: 'MELON',
        categories: 'FOOD'
    },
    {
        letter: 'CUPCAKE',
        categories: 'FOOD'
    },
    {
        letter: 'CABBAGE',
        categories: 'FOOD'
    },
    {
        letter: 'SHRIMP',
        categories: 'FOOD'
    },
    {
        letter: 'PORRIDGE',
        categories: 'FOOD'
    },
    {
        letter: 'PANCAKE',
        categories: 'FOOD'
    },
    {
        letter: 'HAMBURGER',
        categories: 'FOOD'
    },

    {
        letter: 'RASPEBERRIES',
        categories: 'FOOD'
    },
    {
        letter: 'SAMSUNG',
        categories: 'BRAND'
    },
    {
        letter: 'APPLE',
        categories: 'BRAND'
    },
    {
        letter: 'PHILIPS',
        categories: 'BRAND'
    },

    {
        letter: 'VODAFONE',
        categories: 'BRAND'
    },
    {
        letter: 'TESCO',
        categories: 'BRAND'
    },
    {
        letter: 'YOUTUBE',
        categories: 'BRAND'
    },
    {
        letter: 'PLAYSTATION',
        categories: 'BRAND'
    },
    {
        letter: 'LENOVO',
        categories: 'BRAND'
    },

    {
        letter: 'HYUNDAI',
        categories: 'BRAND'
    },
    {
        letter: 'ADIDAS',
        categories: 'BRAND'
    },
    {
        letter: 'FRIENDS',
        categories: 'TVSHOW'
    },
    {
        letter: 'GREYS-ANATOMY',
        categories: 'TVSHOW'
    },
    {
        letter: 'SUITS',
        categories: 'TVSHOW'
    },

    {
        letter: 'OUTLANDER',
        categories: 'TVSHOW'
    },

    {
        letter: 'PSYCH',
        categories: 'TVSHOW'
    },

    {
        letter: 'YOU',
        categories: 'TVSHOW'
    },

    {
        letter: 'FLEABAG',
        categories: 'TVSHOW'
    },

    {
        letter: 'HANNIBAL',
        categories: 'TVSHOW'
    },

    {
        letter: 'SUPERGIRL',
        categories: 'TVSHOW'
    },

    {
        letter: 'TWILIGHT',
        categories: 'TVSHOW'
    }
];

findTheWord();
function findTheWord(){
    let indexWords = parseInt(Math.random() * words.length);

    wordsLetter = words[indexWords].letter;
    wordsCategories = words[indexWords].categories;
    console.log(wordsLetter);
    console.log(wordsCategories);
}

console.log([words]);

screenWord();
function screenWord() {
    let categorie = document.getElementById("categories");
    categorie.innerHTML = wordsCategories;

    let onScreen = document.getElementById("letters-categories");
    onScreen.innerHTML = '';

    for(i = 0; i < wordsLetter.length; i++){
        if(myList[i] == undefined){

        myList[i] = '';
            onScreen.innerHTML = onScreen.innerHTML + '<div class="letter">' + myList[i] + '</div>';
        }
        else{
            onScreen.innerHTML = onScreen.innerHTML + '<div class="letter">' + myList[i] + '</div>';
        }
    }
}

function letterSelect(letter01){
    if(chances > 0)
    {

        letterStyle("letter-" + letter01);
        checkList(letter01);
        screenWord();
    }    

}

function letterStyle(letter01){
    document.getElementById(letter01).style.background = "#063d1e";
    document.getElementById(letter01).style.color = "#ffffff";
}

checkList('letter01');
function checkList(letter01){
    let position = wordsLetter.indexOf(letter01);
    if(position < 0){
        chances--;

        if(chances == 0){
            modalOpen("OPS!", "You lost!! The secret word is <br>" + wordsLetter);
        }
    }
    else{
        for(i = 0; i < wordsLetter.length; i++)
        {
            if(wordsLetter[i] == letter01){
                myList[i] = letter01;
            }
        }
    }

    let youWon = true;
        for(i = 0; i < wordsLetter.length; i++){
            if(wordsLetter[i] != myList[i]){
                youWon = false;
            }
        }

        if(youWon == true)
        {
            modalOpen("Congrats", "You rock!! You won");
            chances = 0;
        }


    }

function modalOpen(label, text){
    let modalLabel = document.getElementById("myModalLabel")
    modalLabel.innerText = label;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = text;

    $("#myModal").modal({
        show:true
    });
}

let restart = document.querySelector("#btn-replay")
    restart.addEventListener("click", function() {
        location.reload();
    });



