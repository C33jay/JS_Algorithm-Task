//FIRST TASK
const convertFahrToCelsius = (Num) => {
  let Num2 = JSON.stringify(Num);
  if (Array.isArray(Num)) {
    return `${Num2} is not a valid number but a/an Array.`;
  } else if (isNaN(Num)) {
    return `${Num2} is not a valid number but a/an ${typeof Num}.`;
  } else return (((Num - 32) * 5) / 9).toFixed(4);
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

//SECOND TASK
function checkYuGiOh(n) {
  let result = [];

  if (isNaN(n) || parseInt(n) < 1) {
    return `invalid parameter: "${n}"`;
  }

  for (i = 1; i <= n; i++) {
    let currenString = [];
    let emptyString = "";

    i % 2 == 0 ? currenString.push("yu") : "";
    i % 3 == 0 ? currenString.push("gi") : "";
    i % 5 == 0 ? currenString.push("oh") : "";

    emptyString = currenString.join("-");
    emptyString ? result.push(emptyString) : result.push(i);
  }
  return result;
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
