const sumAll = function(start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (typeof(start) != "number" || typeof(end) != "number") return "ERROR";
    let sum = 0, first, last;
    if (start < end) first = start, last = end;
    else first = end, last = start;
    for (first; first <= last; first++) {
        sum += first;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
