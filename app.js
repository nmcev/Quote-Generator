//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    
    {
        quote : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        person: `― Albert Einstein`
    }, {
        quote  : `“Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking`,
        person : `- Steve Jobs`
    }, { 
        quote   : `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`
        ,person : `― Mahatma Gandhi`
    }, {
        quote  : `“There is nothing permanent except change.”`,
        person : `- SOCRATES`
    }, {
        quote  : `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        person : `― Ralph Waldo Emerson`
    }, {
        quote  : `“Without music, life would be a mistake.”`,
        person :  `― Friedrich Nietzsche`
    }, {
        quote  : `“Always forgive your enemies; nothing annoys them so much.”`,
        person :`― Oscar Wilde`
    }
];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length)
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})