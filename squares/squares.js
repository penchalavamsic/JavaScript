//sum of squares upto n =n(n+1)(2n+1)/6
function squares(n){
    var b=n*(n+1)*((2*n)+1)
    var c=b/6
    return c
}
var a=Number(prompt("Enter a number"))
document.writeln("The sum of squares upto "+a+" is "+squares(a))