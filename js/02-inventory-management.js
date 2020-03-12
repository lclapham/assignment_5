// Make the inventory array
let inventory = [[1000, "Shirt", 10, 10.00],
[2000, "Pants", 20, 20.00],
[3000, "Shoes", 30, 30.00],
[4000, "Socks", 40, 40.00],
[5000, "Ties", 50, 50.00],
[6000, "Belts", 60, 60.10]]

// Global Variables
let arrayIndex;
let skuIndex;
let quantityIndex;
let skuChoice;

let $ = (id) => {
    return window.document.getElementById(id);
}

// Display to the Command Options
function displayMenu() {
    window.console.log("Product Inventory Management System");
    window.console.log(" ");
    window.console.log("COMMAND MENU");
    window.console.log("show(); - Show inventory");
    window.console.log("update(); - Update stock");
    window.console.log("exit(); - Exit system\n\n\n");

    $('commands').innerHTML =
        "show - Show inventory<br>update - Update stock<br>exit - Exit system"

}

// Show the contents of the array as strings.
function show() {
    inventory = localGet(); //Use the stuff from local storage
    $('items').innerHTML = " "; //post it to the page
    let i;
    for (i = 0; i < inventory.length; i++) {

        $('items').innerHTML += inventory[i][0] + '\t' +
            inventory[i][1] + '\t' + '(' +
            inventory[i][2] + ') ' + ' $' +
            inventory[i][3].toFixed(2) + "<br>";
    }
}

// Perform the update command
function getUserSku() {
    let again = true;
    do {
        skuChoice = parseInt(window.prompt("Enter a SKU number from the list to update \n" + "SKU :" + inventory[0][0] + ', '
            + inventory[1][0] + ', ' // Show user available options
            + inventory[2][0] + ', '
            + inventory[3][0] + ', '
            + inventory[4][0] + ', '
            + inventory[5][0] + ', '));

        if (isNaN(skuChoice)) {
            console.log("You must enter one of the SKU numbers from the list.")

        } else if (skuChoice === inventory[0][0] || // If user choice matches don't run this again
            skuChoice === inventory[1][0] ||
            skuChoice === inventory[2][0] ||
            skuChoice === inventory[3][0] ||
            skuChoice === inventory[4][0] ||
            skuChoice === inventory[5][0]) {

            again = false;

        } else {

            again = true;
        }

    } while (again)

    return skuChoice;  // Pass along the skuChoice
}

function update() {

    getUserSku();// The get sku function  (Added feature)

    getIndexOfK(inventory, skuChoice);  // Call the array index finder

    //Prompt the user for the inventory update and keep prompting them until the do it right
    do {
        let quantityUpdate = parseInt(window.prompt("SkU: " + skuChoice + " current quantity on hand is :" + inventory[arrayIndex][skuIndex + 2] + "." + " Enter update for quantity."));
        if (isNaN(quantityUpdate)) {
            console.log("You must enter a valid number of quantity.")
            again = true

        } else {
            inventory[arrayIndex][skuIndex + 2] = quantityUpdate;
            localStore();

            $('items').innerHTML = " ";
            show(inventory);
            let nuts = [];

            again = false;
        }
    } while (again)

}

// Local Storage with formatting
function localStore() {
    window.localStorage.setItem('dataStore', JSON.stringify(inventory));
}

function localGet() {
    return JSON.parse(window.localStorage.getItem('dataStore'));
}

// This is the array index finder.  This iterates the array to find the index of the users inputed sku
function getIndexOfK(arr, sku) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(sku);
        if (index > -1) {
            arrayIndex = i;
            skuIndex = index;
        }
    }
}

// This is the main program function
let run = true;

window.addEventListener('load', () => {
    let storage, command;

    displayMenu();
    storage = localGet();
  
    if (storage === null) {
        localStore();
    } else {
        console.log("User has previous data stored")
    }

    let i = 0;

    while (i < 1) {

        command = window.prompt('Enter command');

        if (command === 'show' || command === "Show") {
            show();
        } else if (command === 'update' || command === 'Update') {
            update();
        } else if (command === 'exit' || command === 'Exit' || command === null) {
            i = 1;
            window.open('goodbye.html');
        } else {
            window.alert("Not a valid command");
        }
    }
});