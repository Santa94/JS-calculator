const calc = new Calculator;
calc.addMethod("+", function(a, b) {
  return a + b;
});
calc.addMethod("", function(a, b) {
  return a - b;
});

calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("", function(a, b) {
  return a / b;
});

alert( result ); 