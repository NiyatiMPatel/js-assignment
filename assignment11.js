// <!-- Q.1 :- concatenate multiple string variables in JavaScript -->

const question1 = () => {
  const string = document.querySelectorAll(".string_q1");
  for (let i = 0; i < string.length; i++) {
    document.getElementById("q1_output").innerHTML += `${string[i].innerHTML} `;
  }
  document.getElementById("q1_btn").setAttribute("disabled", "disabled");
};

// <!-- Q.2 :- Print the innerHTML of p tag to the alert box -->

const question2 = () => {
  alert(document.getElementById("string_q2").innerHTML);
};
// <!-- Q.3 :- Change the input value i.e :- Jhon-->Tom -->

const question3 = () => {
  document.getElementById("q1_name").value = "Tom";
};
// <!-- Q.4 :- Give an example of get attribute and setattribute -->
const question4 = () => {
  const classCheck = document.getElementsByClassName("para_q4");
  for (let j = 0; j < classCheck.length; j++) {
    document.getElementById("q4_output").innerHTML =
      classCheck[j].getAttribute("class");
  }
};

document.getElementById("q4_btn").addEventListener("click", () => {
  const classCheck = document.getElementsByClassName("para_q4");
  for (let k = 0; k < classCheck.length; k++) {
    classCheck[k].setAttribute("class", "para_q4A");
    const classCheck1 = document.getElementsByClassName("para_q4A");
    for (let l = 0; l < classCheck1.length; l++) {
      document.getElementById("q4_output").innerHTML =
        classCheck1[l].getAttribute("class");
    }
  }
});
// <!-- Q.5 :- Take input from the user and add 2 numbers -->

document.getElementById("q5_btn").addEventListener("click", () => {
  const q5Num1 = Number(document.getElementById("q5_num1").value);
  const q5Num2 = Number(document.getElementById("q5_num2").value);
  document.getElementById("q5_output").innerHTML = q5Num1 + q5Num2;
});

// <!-- Q.6 :- Take a range from 1 - 20 and print the even number -->

// document.getElementById("q6_btn").addEventListener("click", () => {
//   if (document.getElementById("q6_num").value.trim() === "") {
//     document.getElementById("q6_output").innerHTML = "Please enter your number";
//   } else if (Number(document.getElementById("q6_num").value) % 2 === 0) {
//     document.getElementById("q6_output").innerHTML =
//       "Your entered number is an Even number";
//   } else {
//     document.getElementById("q6_output").innerHTML =
//       "Your entered number is an Odd number";
//   }
// });
const numArrary = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
document.getElementById("q6_array").innerHTML = numArrary;
const question6 = () => {
  const outputArray = [];
  for (let q6 = 0; q6 < numArrary.length; q6++) {
    if (numArrary[q6] % 2 === 0) {
      outputArray.push(numArrary[q6]);
    }
    document.getElementById("q6_output").innerHTML = outputArray;
  }
};

// <!-- Q.7 :- Create array inside object and read the values . -->

const data = {
  name: "Ankit",
  age: 24,
  workingDay: ["Mon", "Tue", "Wed", "Thu", "Fri"],
};

const question7 = () => {
  for (q7 = 0; q7 < data.workingDay.length; q7++) {
    document.getElementById(
      "q7A_output"
    ).innerHTML += `${data.workingDay[q7]} <br>`;
  }
  document.getElementById("q7_btn").setAttribute("disabled", "disabled");
};


// <!-- Q.8 :- var a = {
//  data :
//  [
//  {
//  name:"abc",
//  email:"abc@gmail.com"
//  },
//  {
//  name:"pqr",
//  email:"pqr@gmail.com"
//  }
//  ]
//  };
//  read the values -->

var a = {
  data: [
    {
      name: "abc",
      email: "abc@gmail.com",
    },
    {
      name: "pqr",
      email: "pqr@gmail.com",
    },
  ],
};

const question8 = () => {
  for (keys in a) {
    console.log("keys", keys);  // data
    for (let q8 = 0; q8 < a[keys].length; q8++) {
      console.log("a[keys][q8]", a[keys][q8]); // {"name": "abc","email": "abc@gmail.com"}, {"name": "pqr","email": "pqr@gmail.com"}
      for (key in a[keys][q8]) {
        console.log("key", key); // name email
        console.log("a[keys][q8][key]", a[keys][q8][key]); // abc abc@gmail.com  pqr pqr@gmail.com
        document.getElementById(
          "q8_output"
        ).innerHTML += `${key} : ${a[keys][q8][key]} <br>`;
      }
      document.getElementById("q8_output").innerHTML += "<br>";
    }
  }
  document.getElementById("q8_btn").setAttribute("disabled", "disabled");
};

// <!-- Q.9 :- print the following data "registration": '2017-01-03', "capacity": 7, "registration": '2018-03-03', "capacity": 5
// let cars = [
// {
// "color": "purple",
// "type": "minivan",
// "registration": '2017-01-03',
// "capacity": 7
// },
// {
// "color": "red",
// "type": "station wagon",
// "registration": '2018-03-03',
// "capacity": 5
// }
// ] -->

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: "2017-01-03",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: "2018-03-03",
    capacity: 5,
  },
];

const question9 = () => {
  for (let q9 = 0; q9 < cars.length; q9++) {
    console.log(cars[q9]);
    for (keys in cars[q9]) {
      console.log(keys);
      console.log(cars[q9][keys]);
      if (keys == "registration") {
        document.getElementById(
          "q9_content"
        ).innerHTML += `${keys} : ${cars[q9][keys]} <br>`;
      }
      if (keys == "capacity") {
        document.getElementById(
          "q9_content"
        ).innerHTML += `${keys} : ${cars[q9][keys]} <br>`;
      }
    }
    document.getElementById("q9_content").innerHTML += "<br>";
  }
  document.getElementById("q9_btn").setAttribute("disabled", "disabled");
};

// <!-- Q.10 :- create object inside object and read it with for loop -->
const students = {
  stu1: {
    name: "keval",
    email: "keval@gmail.com",
    id: 1,
  },
  stu2: {
    name: "vishal",
    email: "vishal@gmail.com",
    id: 2,
  },
  stu3: {
    name: "arun",
    email: "arun@gmail.com",
    id: 3,
  },
};

const question10 = () => {
  for (keys in students) {
    console.log(keys);
    console.log(students[keys]);
    for (key in students[keys]) {
      console.log(key);
      document.getElementById(
        "q10_output"
      ).innerHTML += `${key} : ${students[keys][key]} <br>`;
    }
    document.getElementById("q10_output").innerHTML += "<br>";
  }
  document.getElementById("q10_btn").setAttribute("disabled", "disabled");
};

// <!-- Q.11 :- Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. -->

document.getElementById("q11_btn").addEventListener("click", () => {
  const q11Num = Number(document.getElementById("q11_num").value);
  if (q11Num < 0) {
    document.getElementById("q11_output").innerHTML = 'Please enter a positive number';
  } else if (q11Num % 3 === 0 && q11Num % 7 === 0) {
    document.getElementById("q11_output").innerHTML = 'Enter number is a multiple of 3 and 7';
  } else if (q11Num % 7 === 0) {
    document.getElementById("q11_output").innerHTML = 'Enter number is a multiple of 7';
  } else if (q11Num % 3 === 0) {
    document.getElementById("q11_output").innerHTML = 'Enter number is a multiple of 3';
  } else {
    document.getElementById("q11_output").innerHTML = 'Enter number is neither a multiple of 3 nor a multiple of 7. Please enter another number';
  }
});

// <!-- Q.12 :- Write a JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.-->

document.getElementById("q12_btn").addEventListener("click", () => {
  const q12Num1 = Number(document.getElementById("q12_num1").value);
  const q12Num2 = Number(document.getElementById("q12_num2").value);
  if (q12Num1 === 50 || q12Num2 === 50) {
    if (q12Num1 === 50 && q12Num2 === 50) {
      document.getElementById("q12_output").innerHTML = 'Entered both the numbers are 50, therefor = True'
    } else if (q12Num1 === 50) {
      document.getElementById("q12_output").innerHTML = 'Entered number 1 is 50, therefore = True'
    } else if (q12Num2 === 50) {
      document.getElementById("q12_output").innerHTML = 'Entered number 2 is 50, therefore = True'
    }
  } else if (q12Num1 + q12Num2 === 50) {
    document.getElementById("q12_output").innerHTML = 'True, since the sum of entered two numbers = 50'
  } else {
    document.getElementById("q12_output").innerHTML = 'False. Neither entered number 1 nor entered number 2 nor sum of both the numbers = 50'
  }
})

// <!-- Q.13 :- Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. -->

document.getElementById("q13_btn").addEventListener("click", () => {
  const q13Num1 = Number(document.getElementById("q13_num1").value);
  const q13Num2 = Number(document.getElementById("q13_num2").value);
  if (q13Num1 === q13Num2) {
    document.getElementById("q13_output").innerHTML = (q13Num1 + q13Num2) ** 3
  } else {
    document.getElementById("q13_output").innerHTML = q13Num1 + q13Num2
  }
})

// <!-- Q.14A :- Find the longest string from a given array ["Hello","Javascript"] -->

document.getElementById("q14A_btn").addEventListener("click", () => {
  var q14Array = ["Hello", "Javascript"];
  var longestString = "";
  for (var str = 0; str < q14Array.length; str++) {
    if (q14Array[str].length > longestString.length) {
      longestString = q14Array[str];
    }
    document.getElementById("q14A_output").innerHTML = longestString;
  }
})

// <!-- Q.14B :- Find the shortest string from a given array ["Hello","Javascript"] -->

document.getElementById("q14B_btn").addEventListener("click", () => {
  var q14BArray = ["Hello", "Javascript"];
  let shortestString = q14BArray[0]
  for (var str = 0; str < q14BArray.length; str++) {
    if (q14BArray[str].length < shortestString.length) {
      shortestString = q14BArray[str];
    }
    document.getElementById("q14B_output").innerHTML = shortestString;
  }
})

// <!-- Q.15 :- print following from given array c,g,f,n
// Given Array :- ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"]; -->

document.getElementById("q15_btn").addEventListener("click", () => {
  var givenArray = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"];
  // var newArray = givenArray.flat(Infinity);
  // var output = [];
  // for (i = 0; i < newArray.length; i++) {
  //   console.log(newArray[i]);
  //   if (
  //     newArray[i] == "c" ||
  //     newArray[i] == "g" ||
  //     newArray[i] == "f" ||
  //     newArray[i] == "n"
  //   ) {
  //     output.push(newArray[i]);
  //   }
  //   document.getElementById("q15_output").innerHTML = output;
  // }

  document.getElementById("q15_output").innerHTML =
    givenArray[2][0] +
    "," +
    givenArray[2][1][2][1] +
    "," +
    givenArray[2][1][2][0] +
    "," +
    givenArray[4];
})

// <!-- Q.16 :- Check whether a string starts with 'Java' print true and false otherwise .Given String = "Javascript" -->

document.getElementById("q16_btn").addEventListener("click", () => {
  let str = "Javascript"
  document.getElementById("q16_output").innerHTML = str.toLowerCase().startsWith("java")
})

// =========================================================================================== //

document.getElementById("q16A_btn").addEventListener("click", () => {
  let strA = document.getElementById("q16A_word").value
  document.getElementById("q16A_output").innerHTML = strA.toLowerCase().startsWith("java")
})

// <!-- Q.17 :-Write a JavaScript function to calculate the sum of values in an array. -->

document.getElementById("q17_btn").addEventListener("click", () => {
  let q17Arr = [2, 4, 6, 8, 11, 13, 15, 17, 19];
  let result = q17Arr.reduce((sum, current) => sum + current);
  document.getElementById("q17_output").innerHTML = result
})

// <!-- Q.18 :- Write a JavaScript function to calculate the product of values in an array. -->

document.getElementById("q18_btn").addEventListener("click", () => {
  let q18Arr = [1, 3, 5, 7, 9, 12, 14, 16, 18, 20];
  let result = q18Arr.reduce((sum, current) => sum * current);
  document.getElementById("q18_output").innerHTML = result
})

// <!-- Q.19 :- Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not. -->

function primeFunction() {
  // take input from the user
  const q19Num = Number(document.getElementById("q19_num").value)

  let isPrime = true;

  // check if number is equal to 1
  if (q19Num === 1) {
    document.getElementById("q19_output").innerHTML = "Entered number 1 is neither prime nor composite number.";
  }
  // check if number is greater than 1
  else if (q19Num > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < q19Num; i++) {
      if (q19Num % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      document.getElementById("q19_output").innerHTML = "Entered number is a prime number";
    } else {
      document.getElementById("q19_output").innerHTML = "Entered number is a not prime number";
    }
  }
  // check if number is less than 1
  else {
    document.getElementById("q19_output").innerHTML = "Entered number is not a prime number";
  }
}

// =========================================================================== //

// function primeFunc(q19ANum) {
//   // take input from the user
//   // const q19ANum = Number(document.getElementById("q19_num").value)

//   let isPrime = true;

//   // check if number is equal to 1
//   if (q19ANum === 1) {
//     document.getElementById("q19A_output").innerHTML = "Entered number 1 is neither prime nor composite number.";
//   }
//   // check if number is greater than 1
//   else if (q19ANum > 1) {
//     // looping through 2 to number-1
//     for (let i = 2; i < q19ANum; i++) {
//       if (q19ANum % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       document.getElementById("q19A_output").innerHTML = "Entered number is a prime number";
//     } else {
//       document.getElementById("q19A_output").innerHTML = "Entered number is a not prime number";
//     }
//   }
//   // check if number is less than 1
//   else {
//     document.getElementById("q19A_output").innerHTML = "Entered number is not a prime number";
//   }
// }

// <!-- Q.20 :-Write a JavaScript validation for empty input field -->

// create a new p and set its attributes
let p = document.createElement('p');
p.id = 'error_msg';
// create a new text node and add it to the p
let text = document.createTextNode('Input field cannot be empty');
p.appendChild(text);

const inputVal = () => {
  let userInput = document.getElementById("q20_text").value;
  if (!userInput.trim()) {
    // add p to the document
    document.getElementById("q20_content").appendChild(p);
  }
  else {
    document.getElementById("q20_output").innerHTML = "Thank you for the input"
    document.getElementById("error_msg").remove()
  }
}

// <!-- Q.21 :-Write a JavaScript validation for email field -->

document.getElementById("emailForm").addEventListener("submit", (event) => {
  event.preventDefault()
  let userEmail = event.target[0].value
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!userEmail.trim()) {
    document.getElementById("q21_output").innerHTML = "Email field cannot be emplty"
  } else if (!userEmail.match(mailformat)) {
    document.getElementById("q21_output").innerHTML = "Please enter a valid email"
  } else {
    document.getElementById("q21_output").innerHTML = "Thank you for the email"
  }

})

// <!-- Q.22 :-Write a JavaScript validation for password field -->

document.getElementById("passwordForm").addEventListener("submit", (event) => {
  event.preventDefault()
  let userPassword = event.target[0].value
  let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!userPassword.trim()) {
    document.getElementById("q22_output").innerHTML = "Password field cannot be emplty"
  } else if (!userPassword.match(passwordformat)) {
    document.getElementById("q22_output").innerHTML = "Please enter a valid password - a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
  } else {
    document.getElementById("q22_output").innerHTML = "Thank you for the password"
  }

})

// <!-- Q.23 :-Give an example of replace method with "gi" -->

const q23_function = () => {
  let q23_str = 'Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?'
  document.getElementById("q23_output").innerHTML = q23_str.replace(/fuzzy/gi, 'Buzzy')
}

// ====================================================== //

const q23A_function = () => {
  let q23A_str = 'Mr Blue has a blue house and a blue car.'
  document.getElementById("q23A_output").innerHTML = q23A_str.replace(/blue|house|car/gi, function (str) {
    return str.toUpperCase();
  });
}

// <!-- Q.24 :- Swap two images -->

const q24_imgSwap = () => {
  let img_1_value = document.getElementById("q24_img1").getAttribute('src');
  let img_2_value = document.getElementById("q24_img2").getAttribute('src');

  document.getElementById("q24_img1").setAttribute('src', img_2_value);
  document.getElementById("q24_img2").setAttribute('src', img_1_value);
}

// <!-- Q.25 :- Get the value of the selected radio button with JavaScript -->

const q25_function = () => {
  let data = document.querySelectorAll(".user-input");
  for (let q25 = 0; q25 < data.length; q25++) {
    if (data[q25].checked && data[q25].type == "radio") {
      document.querySelector("#q25_output").innerHTML += `${data[q25].value} <br/>`
      document.getElementById("q25_btn").setAttribute("disabled", "disabled");
    }
  }
}

// <!-- Q.26 :- Give an example of break. -->
// Example-1
const q26_1_function = () => {
  for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
      break;
    }
    document.getElementById('q26_1_output').innerHTML += `${i} <br>`
  }
}

// Example-2
const q26_2_function = () => {
  // program to find the sum of positive numbers
  // if the user enters a negative numbers, break ends the loop
  // the negative number entered is not added to sum

  let sum = 0, number;

  while (true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if (number < 0) {
      break;
    }

    // add all positive numbers
    sum += number;

  }
  document.getElementById("q26_2_output").innerHTML = (`The sum is ${sum}.`);
}

// Example-3
const q26_3_function = () => {
  const food = document.getElementById("q26_input").value;

  switch (food) {
    case "sushi":
      document.getElementById("q26_3_output").innerHTML = ("Sushi is originally from Japan.");
      break;
    case "pizza":
      document.getElementById("q26_3_output").innerHTML = ("Pizza is originally from Italy.");
      break;
    default:
      document.getElementById("q26_3_output").innerHTML = ("I have never heard of that dish.");
      break;
  }
}

// <!-- Q.27 :-Take input from the user and print the number of vowels present in the string. -->

const q27_function = () => {
  const text = document.getElementById("q27_text").value

  const count = text.match(/[aeiou]/gi).length;

  document.getElementById("q27_output").innerHTML = `Number of vowels present in entered text = ${count}`

  // let vowelCount = 0;
  // let sentence = document.getElementById("q27_text").value;
  // let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // for (let x of sentence) {
  //   if (vowels.includes(x)) {
  //     vowelCount++;
  //   }
  //   document.getElementById("q27_output").innerHTML = `Number of vowels present in entered text = ${vowelCount}`
  // }
}

// <!-- Q.28 :-Take input from the user and Print Number of words and character present in the string -->

function q28_function() {
  // let wordCount = 1;
  // let letterCount = 0;
  let text = document.getElementById("q28_text").value;

  // for (var i = 0; i < text.length; i++) {
  //   if (text[i] == " ") {
  //     wordCount++;
  //   } else {
  //     letterCount++;
  //   }
  // }
  // document.getElementById("q28_output").innerHTML = `Number of words = ${wordCount} and number of characters = ${letterCount}`;

  text = text.replace(/(^\s*)|(\s*$)/gi, ""); //Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string. ---- for word count
  text = text.replace(/[ ]{2,}/gi, " "); // Try to reduce multiple spaces to a single space. ---- for word count
  text = text.replace(/\n /, "\n"); // Try to exclude a new line with a start spacing. ---- for word count

  let text2 = text.replace(/\s/gi, '') // Try to exclude any whitespace ---- for character count

  document.getElementById("q28_output").innerHTML = `Number of words ${text.split(' ').length} and number of characters = ${text2.length}`;

}

// <!-- Q.28A :- Change the color of div from dropdown value -->

const q28AchangeColor = () => {
  document.getElementById("q28A_box_1").style.backgroundColor = document.getElementById("colors1").value
}

// <!-- Q.29 :- Create Dynamic Modal. -->

const openModal = (a, b) => {
  document.getElementById("backdrop").classList.add("backdrop-open");
  document.getElementById("modal-wrapper").classList.add("modal-open");
  document.getElementById("body-title").innerHTML = a;
  document.getElementById("body-image").src = b;
}

const closeModal = () => {
  document.getElementById("backdrop").classList.remove("backdrop-open");
  document.getElementById("modal-wrapper").classList.remove("modal-open");
}

// <!-- Q.30 :- To do List. -->

const task = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const cancelTaskButton = document.getElementById("cancle-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

let todoArray = [];

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.map((list, ind) => {
    htmlCode += `<div class='list_item'>
    <p class='list_item_text' id='list_item_text'>${list}</p>
    <div>
    <button onclick='edit(${ind})' class='edit_item'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='delete_item'>Delete</button>
    </div>
   </div>`;
  });
  listBox.innerHTML = htmlCode;
}


if (localStorage.getItem("todo")) {
  displayTodo()
}

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!task.value.trim()) {
    alert('input cannot be empty')
    return
  }
  let CheckIfExists = todoArray.some(item => item === task.value.trim())
  if (CheckIfExists != true && task.value.trim() != "") {
    todoArray.push(task.value);
    task.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
  } else {
    alert(`${task.value} already exists`)
  }
});

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}

function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  task.value = todoArray[ind];
  addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";
  cancelTaskButton.style.display = "block"
}

saveTaskButton.addEventListener("click", () => {
  let id = saveInd.value;
  let CheckIfExists = todoArray.some(item => item === task.value.trim())
  if (CheckIfExists != true && task.value.trim() != "") {
    todoArray[id] = task.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    cancelTaskButton.style.display = "none"
    task.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
  } else {
    alert(`${task.value} already exists`)
  }
});

cancelTaskButton.addEventListener("click", () => {
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  cancelTaskButton.style.display = "none"
  task.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
})



// <!-- Q.31 :- Create BMI Calculator. -->

function bmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (!weight.trim() || !height.trim()) {
    alert('inputs cannot be emply')
    return
  }

  let bmiIndex = weight / height ** 2;

  document.getElementById("bmi-value").value = bmiIndex;

  if (bmiIndex < 18.9) {
    document.getElementById("bmi-content").innerHTML =
      "Your BMI is Under-weight";
  } else if (bmiIndex > 24.9) {
    document.getElementById("bmi-content").innerHTML =
      "Your BMI is Over-weight";
  } else {
    document.getElementById("bmi-content").innerHTML = "Your BMI is Healthy";
  }
}

// <!-- Q.32 :- Create Math Calculator. -->

// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
}

// <!-- Q.33 :- Create Currency converter. -->

const currencyConverter = () => {
  let optionSelected = document.getElementById("converter-list").value;

  if (optionSelected == "choose option") {
    document.getElementById("output-field").value = "";
  }

  if (optionSelected == "INR to USD") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value / 81;
  }

  if (optionSelected == "USD to INR") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value * 81;
  }
  if (optionSelected == "INR to AUD") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value / 54;
  }

  if (optionSelected == "AUD to INR") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value * 54;
  }
  if (optionSelected == "INR to CAD") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value / 60;
  }

  if (optionSelected == "CAD to INR") {
    document.getElementById("output-field").value =
      document.getElementById("q33_input").value * 60;
  }
}

// <!-- Q.34 :- Create Accordian. -->

let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let accItem = document.getElementsByClassName('accordionItem');
let accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

// <!-- Q.35 :- add border to the borderless table -->

const table = document.getElementById("q35_table")

const q35_function = () => {
  table.setAttribute("border", 1)
  table.style.border = "1px solid #f00";
  table.style.borderCollapse = "collapse";
}

// <!-- Q.36 :- Convert month name to a number of days -->

const month = () => {
  let month = document.getElementById("month").value;
  if (
    month == "January" ||
    month == "March" ||
    month == "May" ||
    month == "July" ||
    month == "August" ||
    month == "October" ||
    month == "December" ||
    month == "january" ||
    month == "march" ||
    month == "may" ||
    month == "july" ||
    month == "august" ||
    month == "october" ||
    month == "december" ||
    month == "1" ||
    month == "3" ||
    month == "5" ||
    month == "7" ||
    month == "8" ||
    month == "10" ||
    month == "12" ||
    month == "01" ||
    month == "03" ||
    month == "05" ||
    month == "07" ||
    month == "08"
  ) {
    document.getElementById("question36-output").innerHTML = '31 days';
  } else if (month == "February" || month == "february" || month == "02") {
    document.getElementById("question36-output").innerHTML = "28 / 29 days";
  } else {
    document.getElementById("question36-output").innerHTML = '30 days';
  }
}

// <!-- Q.37 :-Take 3 sides of the triangle as input from the user and check whether that triangle is equilateral, scalene or isosceles.-->

function triangle() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;

  if (!side1.trim() || !side2.trim() || !side3.trim()) {
    alert("input field cannot be empty, please enter a valid input")
    return
  }

  if (side1 === side2 && side1 === side3 && side2 === side3) {
    document.getElementById("triangle-content").innerHTML =
      "It is an Equilateral Triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.getElementById("triangle-content").innerHTML =
      "It is an Isoceles Triangle";
  } else {
    document.getElementById("triangle-content").innerHTML =
      "It is a Scalene Triangle";
  }
}

// <!-- Q.38 :-Find the largest of three given number from input. -->

function larget() {
  var q38Number1 = Number(document.getElementById("q38-number-one").value);
  var q38Number2 = Number(document.getElementById("q38-number-two").value);
  var q38Number3 = Number(document.getElementById("q38-number-three").value);

  if (q38Number1 > q38Number2 && q38Number1 > q38Number3) {
    document.getElementById("question38-output").innerHTML = q38Number1;
  } else if (q38Number2 > q38Number1 && q38Number2 > q38Number3) {
    document.getElementById("question38-output").innerHTML = q38Number2;
  } else {
    document.getElementById("question38-output").innerHTML = q38Number3;
  }
}

// <!-- Q.39 :-Find the smallest of three given number from input. -->

function smallest() {
  var q39Number1 = Number(document.getElementById("q39-number-one").value);
  var q39Number2 = Number(document.getElementById("q39-number-two").value);
  var q39Number3 = Number(document.getElementById("q39-number-three").value);

  if (q39Number1 < q39Number2 && q39Number1 < q39Number3) {
    document.getElementById("question39-output").innerHTML = q39Number1;
  } else if (q39Number2 < q39Number1 && q39Number2 < q39Number3) {
    document.getElementById("question39-output").innerHTML = q39Number2;
  } else {
    document.getElementById("question39-output").innerHTML = q39Number3;
  }
}

// <!-- Q.40 :-On-scroll Change the color and height of navbar -->

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 7000 || document.documentElement.scrollTop > 7000) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "#f00";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
    document.getElementById("logo").style.fontSize = "35px";
  }
}