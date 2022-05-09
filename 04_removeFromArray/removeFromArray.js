const removeFromArray = function(ary, ...values) {
    for (let i = 0; i < values.length; i++) {
        value = values[i];
        if (ary.includes(value)) {
            ary.splice(ary.indexOf(value),1);
        }
    }
    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
