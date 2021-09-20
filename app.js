// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;    
}

const fromYentoPound = function(valueInYen){
    valueInEuro = valueInYen / 127.9;
    let valueinPound = valueInEuro * 0.8;
    return valueinPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ouselves.

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
