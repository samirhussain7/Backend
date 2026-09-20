const num = "123";
const str = 'ABC';

// output should = A1B2C3;

let output = ""
for(let i = 0; i < str.length; i++) {
    output += str[i] + num[i]
}

// Done! Anything else i have to prove?