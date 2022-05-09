const repeatString = function(name, num) {
    if (num < 0) return "ERROR";
    let names="";
    for (let i = 0; i < num; i++) {
        names = names + name;
    }
    return names;
};

// Do not edit below this line
module.exports = repeatString;
