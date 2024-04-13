// Immediately Invoked Function Expressions (IIFE)
//It is used when you dont't want any pollute from global variable

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

