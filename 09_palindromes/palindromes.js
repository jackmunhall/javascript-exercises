const palindromes = function (test) {
    test = test.toLowerCase();
    test = test.replace(/[^a-z0-9]/gi, '');
    rev = test.split('').reverse().join('');
    return rev == test;
};

// Do not edit below this line
module.exports = palindromes;
