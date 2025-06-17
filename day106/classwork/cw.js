String.prototype.camelCase = function() {
    let words = this.split(' ')
    let camel = ''

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > 0) {
        camel += word[0].toUpperCase() + word.slice(1)
        }
    }
    return camel
}