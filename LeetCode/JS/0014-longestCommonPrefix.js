var longestCommonPrefix = function (strs) {
    prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }
    console.log(prefix);
    return prefix;
}

let strs = ["dog","racecar","car"]
longestCommonPrefix(strs);