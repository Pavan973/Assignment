// these generate random array number
var a = Array(10).fill().map(() => Math.round(Math.random() * 10))
var b = [];
for (var i = 0; i < a.length; ++i) { 
    if ((a[i] % 2) === 0) {
        b.push(a[i]);
    }
}
console.log(b);