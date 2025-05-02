// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//My solution
const greet = name => name ? `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!` : name
