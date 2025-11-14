function pow_b(base, exponent){
    var result=1;
    for(i=0;i<=exponent;i++){
        result=result*base
    }
    document.writeln(result)
}
//invoking the function
var b=Number(prompt("Enter base"))
var e=Number(prompt("Enter exponent"))
pow_b(b,e)