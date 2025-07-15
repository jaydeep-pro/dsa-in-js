/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) return false;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let hasVowel = false;
    let hasConsonant = false;

     for (let i = 0; i < word.length; i++) {
        const ch = word[i];

       //regex for a to z and A to Z and 0 to 9
        if (!/[a-zA-Z0-9]/.test(ch)) return false;

        if (/[a-zA-Z]/.test(ch)) {
            if (vowels.has(ch)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;

};