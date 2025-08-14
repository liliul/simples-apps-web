/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
     if (str1 + str2 !== str2 + str1) {
        return ""
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }

    const mdc = gcd(str1.length, str2.length)

    return str1.substring(0, mdc)
};

const ler1 = gcdOfStrings('ABCABC','ABC')
const ler2 = gcdOfStrings('ABABAB','ABAB')
const ler3 = gcdOfStrings('LEET','CODE')

console.log(ler1)
console.log(ler2)
console.log(ler3)
