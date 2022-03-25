// Uppercase the first character
function ucFirst(str){
let lowerCaseLetter = str[0]
let newString = lowerCaseLetter.toUpperCase()
for (let i=1;i<str.length;i++){
    newString+=str[i]
}
    return newString
}