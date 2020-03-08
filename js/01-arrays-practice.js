//STEP 1
// window.console.log("#### Step 1 #####");
// let myMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead"];
// window.console.log(myMovies[1]);

//STEP 2
// window.console.log("#### Step 2 ####");

// let movies = new Array(5);

// movies[0] = "The Jungle";
// movies[1] = "The Big Lebowski";
// movies[2] = "11/22/63";
// movies[3] = "Employee of the Month";
// movies[4] = "Shawn of the Dead";

// window.console.log(movies[0]);

//STEP 3
// window.console.log("#### Step 3 ####");

// let movies = new Array(5);

// movies[0] = "The Jungle";
// movies[1] = "The Big Lebowski";
// movies[2] = "11/22/63";
// movies[3] = "Employee of the Month";
// movies[4] = "Shawn of the Dead";
// window.console.log("Before the splice the array was " +movies);
// window.console.log("The array length is : "+ movies.length);
// movies.splice(4, 0, "Blade Runner");

// window.console.log("After the sple the array was " +movies);
// window.console.log("The array length is : "+ movies.length);

//STEP 4
// window.console.log("#### Step 4 ####")

// let movies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead"];
// window.console.log("Before delete function the array contained " +movies);

// delete(movies[0]);

// window.console.log("After the delete function the array contained " +movies);

//STEP 5
// window.console.log("#### Step 5 ####");

// let movies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// for (let i = 0; i < movies.length; i++){
//     window.console.log(movies[i]);
// }

//STEP 6
// window.console.log("#### Step 6 ####");

// let movies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// for (a in movies) {
//     window.console.log(movies[a]);
// }

//STEP 7
// window.console.log("#### Step 7 ####");
// let movies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// for (a in movies.sort()) {
//     window.console.log(movies[a]);
// }

//STEP 8
// window.console.log("#### Step 8 ####");

// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];

// window.console.log("Movies I Like: \n\n");
// for (let i = 0; i < goodMovies.length; i++){
//     window.console.log(goodMovies[i]);
// }

// window.console.log("\n\nMovies I Regret Watching: \n\n");
// for (let i = 0; i < badMovies.length; i++){
//     window.console.log(badMovies[i]);
// }

// window.console.log('\n\n');


//STEP 9
// window.console.log("#### Step 9 ####");

// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];
// let movies = badMovies.concat(goodMovies);
// for (a in movies.sort().reverse()) {
//     window.console.log(movies[a]);
// }

//STEP 10
// window.console.log("#### Step 10 ####");

// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];
// let movies = badMovies.concat(goodMovies);

// window.console.log(movies[movies.length -1]);

//STEP 11
// window.console.log("#### Step 11 ####");

// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];
// let movies = badMovies.concat(goodMovies);

// window.console.log(movies.shift());


//STEP 12
// window.console.log("#### Step 12 ####");

// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];
// let movies = badMovies.concat(goodMovies);
// let choice;
// let store;
// let replace;

// for (a in movies) {
//     window.document.write(movies[a]+"<br>");
// }
//  choice = window.prompt("Select from the list a movie you did not like.");
//  store = movies.indexOf(choice)
//  replace = window.prompt("Add a movie in it's place that you do like. ");

//  movies[store] = replace;
//  window.document.write("<br><br>The new list is: <br>");

//  for (a in movies) {
//     window.document.write(movies[a]+"<br>");
// }

//STEP 13 
// window.console.log("#### Step 13 ####");

// let employee1 = [];
// let employee2 = [];
// let employees = [];

// employee1["employeeid"] = 100;
// employee1["name"] = "John Doe";
// employee1["title"] = "CEO"
// employee1["department"] = "Tolletries";
// employee1["current"] = true;

// employee2["employeeid"] = 200;
// employee2["name"] = "Jane Doe";
// employee2["title"] = "President"
// employee2["department"] = "Tolletries";
// employee2["current"] = false;

// employees = [[employee1], [employee2]];

// window.console.log(employees[1][0]["name"]);

//STEP 14

// window.console.log("#### Step 14 ####");

// let employee1 = [];
// let employee2 = [];
// let employees = [];

// employee1["employeeid"] = 100;
// employee1["name"] = "John Doe";
// employee1["title"] = "CEO"
// employee1["department"] = "Tolletries";
// employee1["current"] = true;

// employee2["employeeid"] = 200;
// employee2["name"] = "Jane Doe";
// employee2["title"] = "President"
// employee2["department"] = "Tolletries";
// employee2["current"] = false;

// employees = [[employee1], [employee2]];

// for (let i =0 ; i  < 2; i++){
//     window.console.log(employees[i][0]["name"]);
// }

//STEP 15

// window.console.log("#### Step 15 ####");

// let employee1 = [];
// let employee2 = [];
// let employee3 = [];
// let employees = [];

// employee1["employeeid"] = 100;
// employee1["name"] = "John Doe";
// employee1["title"] = "CEO"
// employee1["department"] = "Tolletries";
// employee1["current"] = true;

// employee2["employeeid"] = 200;
// employee2["name"] = "Jane Doe";
// employee2["title"] = "President"
// employee2["department"] = "Tolletries";
// employee2["current"] = true;

// employee3["employeeid"] = 200;
// employee3["name"] = "Jane Doe";
// employee3["title"] = "President"
// employee3["department"] = "Tolletries";
// employee3["current"] = false;

// employees = [[employee1], [employee2], [employee3]];

// for (let i =0 ; i  < 3; i++){

//     if ((employees[i][0]["current"]) === true) {
//         window.console.log("Current Employees:");
//         window.console.log(employees[i][0]["name"]);
//     } else {
//         window.console.log(' ');
//         window.console.log("Former Employees:");
//         window.console.log(employees[i][0]["name"] + " is a former employee.");
//     }
// }

//STEP 16
// window.console.log("#### Step 16 ####");

// let movies = [["The Big Lebowski", 1], ["Shawn of the Dead", 2], ["Super Troopers", 3], ["Beer Fest", 4], ["Blade Runner", 5]];
// for (let i = 0; i < movies.length; i++) {
//     let movieNames = movies[i].filter(function (names) {
//         return typeof names === "string";
//     });

//     window.console.log(movieNames);
// }

//STEP 17
// window.console.log("#### Step 17 ####");

// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

// let showEmployee = function (emp) {
//     window.console.log("Employees:\n\n")
//     for (let i = 0; i < emp.length; i++) {
//         window.console.log(emp[i].toUpperCase());
//     }
// };

// showEmployee(employees);

//STEP 18
window.console.log("#### Step 18 ####");

let testData = [58, '', 'abcd', true, null, false, 0];

function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
window.console.log(filter_array_values(testData));

//STEP 19

//STEP 20