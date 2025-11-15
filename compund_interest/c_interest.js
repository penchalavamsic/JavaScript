//compound interest
//formula
//A=P(1+r/100)^t
document.writeln("-------------------<br>")
document.writeln("compound interest<br>")
document.writeln("-------------------<br>")
var p = 1000;
var r = 10
var t = 1;
function cal(p, r, t) {
    var A = p * (1 + r / 100) ** t;
    document.writeln("amount=" + A);
}
var CI=cal(p, r, t);
document.write("Principal=" + p + "<br>")
document.write("Rate=" + r + "<br>")
document.write("Time=" + t + "<br>")   
document.writeln("Compound Interest=" + CI);