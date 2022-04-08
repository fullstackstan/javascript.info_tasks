// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str){
    let stringArray = str.split('')
    while (~stringArray.indexOf('-')){
        stringArray[(stringArray.indexOf('-')+1)]=stringArray[(stringArray.indexOf('-')+1)].toUpperCase()
        stringArray.splice(stringArray.indexOf('-'),1)
    } return stringArray.join('')
}
camelize("background-color")