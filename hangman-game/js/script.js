let wordsCategories;
let wordsLetter;

let words = [
    word001 = {
        letter: 'france',
        categories: 'countries'
    },
    word002 = {
        letter: 'germany',
        categories:  'countries'
    },

    word003 = {
        letter: 'england',
        categories: 'countries'
    },
        
    word004 = {
        letter: 'india',
        categories: 'countries'
    },    

    word005 = {
        letter: 'portugal',
        categories: 'countries'
    },

    word006 = {
        letter: 'spain',
        categories: 'countries',
    },

    word007 = {
        letter: 'brazil',
        categories: 'countries'
    },

    word008 = {
        letter: 'argentina',
        categories: 'countries'
    },

    word009 = {
        letter: 'chile',
        categories: 'countries'
    },

    word010 = {
        letter: 'canada',
        categories: 'countries'
    },

    word011 = {
        letter: 'sausages',
        categories: 'food'
    },

    word012 = {
        letter: 'cookie',
        categories: 'food'
    },

    word013 = {
        letter: 'melon',
        categories: 'food'
    },

    word014 = {
        letter: 'cupcake',
        categories: 'food'
    },

    word015 = {
        letter: 'cabbage',
        categories: 'food'
    },

    word016 = {
        letter: 'shrimp',
        categories: 'food'
    },

    word017 = {
        letter: 'porridge',
        categories: 'food'
    },

    word018 = {
        letter: 'pancake',
        categories: 'food'
    },

    word019 = {
        letter: 'hamburger',
        categories: 'food'
    },

    word020 = {
        letter: 'raspberries',
        categories: 'food'
    },

    word021 = {
        letter: 'samsung',
        categories: 'brands'
    },

    word022 = {
        letter: 'apple',
        categories: 'brands'
    },

    word023 = {
        letter: 'coca-cola',
        categories: 'brands'
    },

    word024 = {
        letter: 'vodafone',
        categories: 'brands'
    },

    word025 = {
        letter: 'tesco',
        categories: 'brands'
    },

    word026 = {
        letter: 'youtube',
        categories: 'brands'
    },

    word027 = {
        letter: 'playstation',
        categories: 'brands'
    },

    word028 = {
        letter: 'lenovo',
        categories: 'brands'
    },

    word029 = {
        letter: 'hyundai',
        categories: 'brands'
    },

    word030 = {
        letter: 'adidas',
        categories: 'brands'
    },

    word031 = {
        letter: 'friends',
        categories: 'tvShow'
    },

    word032 = {
        letter: 'greys anatomy',
        categories: 'tvShow'
    },

    word033 = {
        letter: 'suits',
        categories: 'tvShow'
    },

    word034 = {
        letter: 'outlander',
        categories: 'tvShow'
    },

    word035 = {
        letter: 'psych',
        categories: 'tvShow'
    },

    word036 = {
        letter: 'you',
        categories: 'tvShow'
    },

    word037 = {
        letter: 'fleabag',
        categories: 'tvShow'
    },

    word038 = {
        letter: 'hannibal',
        categories: 'tvShow'
    },

    word039 = {
        letter: 'superGirl',
        categories: 'tvShow'
    },

    word040 = {
        letter: 'twilight',
        categories: 'tvShow'
    }
];

findTheWord()
function findTheWord(){
    let indexWords = parseInt(Math.random() * words.length)

    wordsLetter = words[indexWords].letter;
    wordsCategories = words[indexWords].categories;
    console.log(wordsLetter)
    console.log(wordsCategories)
}

screenWord()
function screenWord() {
    let categorie = document.getElementById("categories");
    categorie.innerHTML = wordsCategories;

    let onScreen = document.getElementById("letters-categories");
    onScreen.innerHTML = wordsLetter;
}
