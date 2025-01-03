// let names = ["ahmad","anas","omar","ali",["wedad","layan","esraa"]]
// names = names.flat(); 
// for (let i=0; i< names.length;i++)
//     console.log(names[i].toUpperCase())


// solution 2

let a=["ahmad","anas","omar","ali"]
let b=["wedad","layan","esraa"] 
let c = a.concat(b);
for (let i = 0; i < c.length; i++) {
    console.log(c[i].toUpperCase());
}