// QUESTION 1
function convertFahrToCelsius(parameter) {
  let value = +parameter;

  if (isNaN(value)) {
    if (Array.isArray(parameter)) {
      return `${JSON.stringify(parameter)} is not a valid number but an Array.`;
    } else if (typeof(parameter) === 'object') {
        return `${JSON.stringify(parameter)} is not a valid number but an ${typeof(parameter)}`;
    } else {
       return `${JSON.stringify(parameter)} is not a valid number but a ${typeof(parameter)}`;
    }
  } else if (typeof(parameter) === 'boolean') { 
      return `${JSON.stringify(parameter)} is not a valid number but a ${typeof(parameter)}`;
  } else if (parameter ==="" || parameter === " ") {
      return `${JSON.stringify(parameter)} is not a valid number but a an ${typeof(parameter)}`;
  } 


  parameter = (value - 32) * 5 / 9;

  return +parameter.toFixed(4);
}

console.log( convertFahrToCelsius(0) );
console.log( convertFahrToCelsius("0") );  
console.log( convertFahrToCelsius([1,2,3]) );
console.log( convertFahrToCelsius({temp: 0}) );



// QUESTION 2
function checkYuGiOh(n) {
    let parameter = n;
  
    let convertParamterToNumber = +n;
  
    if (isNaN(convertParamterToNumber)) {
       if(Array.isArray(parameter)) {
          return `${JSON.stringify(parameter)} is not a valid number but a / an Array.`;
       }

      return `Invalid parameter: ${JSON.stringify(parameter)}`;

    } else if (typeof(n) == 'boolean') {
        return `Invalid parameter: ${JSON.stringify(parameter)}`;
    }
  
    parameter = [];
  
    // Replaces multiples of 2, 3 and 5 with respective string characters
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        parameter.push("yu-gi-oh");
       } else if (i % 2 == 0 && i % 3 == 0) {
         parameter.push("yu-gi");
       } else if (i % 2 == 0 && i % 5 == 0) {
         parameter.push("yu-oh");
       } else if (i % 3 == 0 && i % 5 == 0) {
         parameter.push("gi-oh");
       } else if (i % 5 == 0) {
         parameter.push("oh");
       } else if (i % 3 == 0) {
         parameter.push("gi");
       } else if (i % 2 == 0) {
         parameter.push("yu");
       } else {
         parameter.push(i);
       }
    }
  
    return parameter;
}
  
  console.log( checkYuGiOh(10) );
  console.log( checkYuGiOh("5") );
  console.log( checkYuGiOh("fizzbuzz is meh") );