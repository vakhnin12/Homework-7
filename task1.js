function isSymbolPresentInString(word, letter) {
    let arr = word.split("");
    for (let value of arr) {
        if (value === letter) {
            return true
        } else {
            return false
        }
    }
};
console.log(isSymbolPresentInString("abc", "a"));
console.log(isSymbolPresentInString("abc", "e"));

console.log("");

function getSymbolIndex(word, letter) {
    let arr = word.split("");
    return arr.indexOf(letter)
};
console.log(getSymbolIndex("hello lol", "h"));
console.log(getSymbolIndex("hello lol", "l"));
console.log(getSymbolIndex("hello lol", "v"));

console.log("");

const a = {
    name: "Peter",
    surname: "Parker"
};

const b = {
    nickname: "Spiderman",
    work: "Superhero",
    suit: "red-blue"
};
const d = {
    name: "Peter",
    surname: "Parker"
};

function copy(target, origin) {
    const c = {};
    for (let key in target) {
        c[key] = target[key]
    };
    for (let key in origin) {
        c[key] = origin[key]
    };
    return c
};

console.log(copy(a, b));

console.log("");

function comparison(target, origin) {
    if (target === origin) {
        return true
    } else if (Object.keys(target).length !== Object.keys(origin).length) {
        return false
    } else {
        for (let key in target) {
            if (target.hasOwnProperty(key) !== origin.hasOwnProperty(key)) {
                return false
            } else if (target[key] !== origin[key]) {
                return false
            }
        }
    }
    return true
}

console.log(comparison(a, d));
console.log("");

let string = "aaabbс";

function letterCounter(word) {
    let arr = word.split("");
    const c = {};
    for (let key of arr) {
        if (c[key]) {
            c[key]++;
        } else {
            c[key] = 1;
        }
    }
    return c;
}

const count = letterCounter(string);

console.log(count)