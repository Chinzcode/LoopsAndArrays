function textReversed(text) {
    let result = '';
    for (let i = 1; i <= text.length; i++) {
        result += text.charAt(text.length-1 * i)
    }
    return result;
}
console.log(textReversed('trym'));