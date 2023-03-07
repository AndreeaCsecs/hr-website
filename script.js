function calculateNetSalary(grossSalary) {
  let netSalary = parseInt(grossSalary * 0.45);
  return netSalary;
  // return Math.round(grossSalary * 0.45)
}

function sumSalaries(salaries) {
  let sum = 0;
  for (let i = 0; i < salaries.length; i++) {
    sum = sum + salaries[i];
    //sum += salaries[i]
  }
  return sum;
}

function inputToNumber(elementID) {
  let input = document.getElementById(elementID);
  let value = input.value;

  if (isNaN(value)) {
    return 0;
  } else {
    return Number(value);
  }
}

function capitalizeFirstLastName(text1, text2) {
  let t1 = text1.slice(0, 1).toUpperCase() + text1.slice(1);
  let t2 = text2.slice(0, 1).toUpperCase() + text2.slice(1);
  return t1 + " " + t2;
}

function sumSubsetSalaries(allSalaries, start, end) {
  let sum = 0;
  for (let i = start - 1; i < end; i++) {
    sum += allSalaries[i];
  }
  return sum;
}

function getHighestSalary(list) {
  let highestSalary = -Infinity; // or 0 in this case
  //lowestSalary = Infinity  ---> bigger number
  for (let i = 0; i < list.length; i++) {
    if (highestSalary < list[i]) {
      highestSalary = list[i];
    }

    /* 
         if (lowestSalary > list[i]) {
            lowestSalary = list[i]
        }
        */
  }
  return highestSalary;
}

function getMatchingPersons(employees, find) {
  let result = [];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].toLowerCase().includes(find.toLowerCase())) {
      result.push(employees[i]);
    }
  }

  return result;
  /*
    let MatchingPersons = 0;
    for (let i = 0; i < employees.length; i++) {
        if (MatchingPersons = employees.length)
    }
    return employees.match()
    */
}

function isValideNumber(input) {
  // pconsole.log(typeof input)
  if (input.indexOf(".") === input.length - 1) {
    return false;
  }
  if (input.indexOf("+") > 0) {
    return false;
  }
  if (input.indexOf("-") > 0) {
    return false;
  }

  const numbers = "0123456789+-.";
  //input: 123.2
  for (let i = 0; i < input.length; i++) {
    if (numbers.indexOf(input[i]) === -1) {
      return false;
    }
  }

  return true;
  /*
    let input = document.getElementById(elementID)
    let value = input.value
    if(isNaN(value)) {
        return false;
    } else {
        return true;
    }*/
}

function isValideEmail(text) {
  if (text.indexOf("@") === 0) {
    return "Missing username.";
  }
  if (text.lastIndexOf(".") === text.length - 1) {
    return "Missing domain after '.'";
  }

  let contorAt = 0;
  let contorDot = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      contorAt++;
    }
    if (contorAt === 1) {
      if (text[i] === ".") {
        contorDot++;
      }
    }
  }

  if (contorAt === 0) {
    return "Missing '@' symbol.";
  }

  if (contorAt > 1) {
    return "Too many '@' symbols.";
  }

  if (contorDot > 1) {
    return "Too many '.' symbols.";
  }

  if (contorDot === 0) {
    return "Missing '.' symbol.";
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      contorAt++;
    }
  }

  if (text.indexOf("@") === text.lastIndexOf(".") - 1) {
    return "Missing domain before'.'";
  }

  /* or unsafer:
    if(Text.indexOf("@") !== text.lastIndexOf("@")) {
        return "Too many '@' symbols"
    }
    */

  return "Valid Email";
  /*
    let input = document.getElementById(elementID)
    let value = input.value

    if(isNaN(value)) {
        return 0;
    } else {
        return Number(value)
    }*/
}

document
  .getElementById("compute-gross-salary")
  .addEventListener("click", (e) => {
    e.preventDefault();

    let salary = inputToNumber("gross-salary");

    const rez = document.getElementById("result-gross-salary");
    rez.innerText = calculateNetSalary(salary);
  });

document.getElementById("compute-number-sum").addEventListener("click", (e) => {
  e.preventDefault();
  let input = [];

  for (let i = 1; i <= 5; i++) {
    input.push(inputToNumber("number-" + i));
  }

  document.getElementById("number-sum").innerText = sumSalaries(input);
});

document
  .getElementById("compute-salary-index")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let from = inputToNumber("index-1");
    let until = inputToNumber("index-2");

    let salaries = [];
    for (let i = 1; i < 11; i++) {
      let row = document.getElementsByTagName("tr")[i];
      let value = row.getElementsByTagName("td")[1];
      value = value.innerText;
      salaries.push(parseInt(value));
    }

    document.getElementById("result-salary-index").innerText =
      sumSubsetSalaries(salaries, Math.min(from, until), Math.max(from, until));
  });

document.getElementById("capitalize").addEventListener("click", (e) => {
  e.preventDefault();

  let text1 = document.getElementById("to-capitalize-1").value;
  let text2 = document.getElementById("to-capitalize-2").value;

  document.getElementById("result-to-capitalize").innerText =
    capitalizeFirstLastName(text1, text2);
});

document
  .getElementById("compute-is-a-number")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let text = document.getElementById("is-a-number").value;
    let rez = document.getElementById("result-is-a-number");

    if (isValideNumber(text)) {
      rez.innerText = "Valid number";
    } else {
      rez.innerText = "Not a number";
    }
  });

document.getElementById("compute-is-email").addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.getElementById("is-email").value;
  let rez = document.getElementById("result-is-email");

  rez.innerText = isValideEmail(text);
});

document.getElementById("compute-find-max").addEventListener("click", (e) => {
  e.preventDefault();
  let list = [];

  for (let i = 1; i < 6; i++) {
    list.push(inputToNumber("find-max-" + i));
  }

  document.getElementById("result-find-max").innerText = getHighestSalary(list);
});

document
  .getElementById("compute-contains-filter")
  .addEventListener("click", (e) => {
    e.preventDefault();

    let list = [];
    let max = document.getElementsByClassName("list-group")[0].children.length;
    for (let i = 0; i < max; i++) {
      list.push(
        document.getElementsByClassName("list-group")[0].children[i].innerText
      );
    }
    let filtered = getMatchingPersons(
      list,
      document.getElementById("contains-filter").value
    );

    let out = "";
    for (let i = 0; i < filtered.length; i++) {
      out += '<li class="list-group-item">' + filtered[i] + "</li>";
    }

    document.getElementById("contains-output").innerHTML = out;
  });
