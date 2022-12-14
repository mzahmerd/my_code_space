// Disemvowel Trolls
function disemvowel(str) {

    //   by simply using replace built-in function and regex
    str=str.replace(/(a|i|o|u|e)/ig,'')
    console.log(str)
    return str;
}

// Decode the Morse code

const decodeMorse=(morseCode) => {
    //your code here
    let decrepted=''
    //   loop through words and remove trailing spaces.
    for(let word of morseCode.trim().split('   ')) {
        if(word==='···−−−···') {
            decrepted+='SOS '
            break
        }
        //     loop through characters and remove trailing spaces
        for(let char of word.trim().split(' ')) {
            decrepted+=MORSE_CODE[char]
        }
        decrepted+=' '
    }
    return decrepted.trim()
}

// Printer Errors
function printerError(s) {
    // your code
    let errors=s.matchAll(/[^a-m]/g)
    let i=0

    while(errors.next().value) {
        i++
    }
    return `${i}/${s.length}`
}

// Equal Sides Of An Array
function findEvenIndex(arr) {
    //Code goes here!
    let index=-1
    const evenIndex=(index) => {
        const left=arr.slice(index+1).reduce((a,b) => a+b,0)
        const right=arr.slice(0,index).reduce((a,b) => a+b,0)
        return left===right
    }
    for(let i=0;i<arr.length;i++) {
        if(evenIndex(i)) {
            index=i
            break
        }
    }
    return index
}

// Bit Counting

var countBits=function(n) {
    // Program Me
    let count=0
    //   convert to base 2 number system
    const binary=n.toString(2)

    let j=0
    while(j<binary.length) {
        if(binary[j]==='1') count++
        j++
    }
    // return count

    // short way
    return n.toString(2).split(0).join('').length

};

// Replace With Alphabet Position
const alphabetPosition=text => text.toLowerCase()
    .replace(/[^a-z]/g,'')
    .split('')
    .map((letter) => letter.charCodeAt(0)-96).join(' ')
