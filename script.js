let quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", "A room without books is like a body without a soul.", "You only live once, but if you do it right, once is enough.", "Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on.", "If you tell the truth, you don't have to remember anything.", "To live is the rarest thing in the world. Most people exist, that is all.", "Always forgive your enemies; nothing annoys them so much.", "We accept the love we think we deserve.", "Insanity is doing the same thing, over and over again, but expecting different results"]
let quotesOtdElm = document.querySelector(".quotesOtd")
let quoteIndex = Math.floor(Math.random() * quotes.length);  
console.log(quotes[quoteIndex]);

let i = 0;

console.log(quotes[i]);
console.log(quotes.length);


quotesOtdElm.innerHTML = quotes[quoteIndex];

// quotes[quoteIndex]

// quotes.forEach(function(quote){
//       // quotesOtdElm.innerHTML += "<blockquote>" + quote + "</blockquote>"
//     quotesOtdElm.innerHTML += `<blockquote>${quote}</blockquote>`
// })

