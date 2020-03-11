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


// Display to the Command Options
function displayMenu() {
    window.console.log("Product Inventory Management System");
    window.console.log(" ");
    window.console.log("COMMAND MENU");
    window.console.log("show(); - Show inventory");
    window.console.log("update(); - Update stock");
    window.console.log("exit(); - Exit system\n\n\n");

}



// This code was garbarge, but sorta worked.
// function show() {
//     let data;
//     console.log(localStorage.getItem("saveItems"));
//     console.log("The Data Inventory System Currently Holds|n\n")
//     inventory.forEach(element => {
//         data = ' ';
//         for (item in element) {
//             data += element[item] + " ";
//         }
//         console.log(data);
//     });
//     console.log('\n\n')
//     displayMenu();
// }

// Show the contents of the array as strings.
function show(inventory) {
    let i;
    for (i = 0; i < inventory.length; i++) {

        window.console.log(inventory[i][0] + '\t' +
            inventory[i][1] + '\t' + '(' +
            inventory[i][2] + ') ' + ' $' +
            inventory[i][3].toFixed(2));
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
    // The get sku function
    getUserSku();

    // Call the index finder
    getIndexOfK(inventory, skuChoice);

    //Prompt the user for the inventory update
    do {
        let quantityUpdate = parseInt(window.prompt("SkU: " + skuChoice + " current quantity on hand is :" + inventory[arrayIndex][skuIndex + 2] + "." + " Enter update for quantity."));
        if (isNaN(quantityUpdate)) {
            console.log("You must enter a valid number of quantity.")
            again = true

        } else {
            inventory[arrayIndex][skuIndex + 2] = quantityUpdate;
            show(inventory);
            let nuts = [];
            // Set the inventory to locol storage

            for (let i = 0; i < inventory.length; i++)
                Storage.prototype.setObj = function (key, obj) {
                    return this.setItem(key, JSON.stringify(obj))
                }



            Storage.prototype.getObj = function (key) {
                return JSON.parse(this.getItem(key))
            }



            // localStorage.setItem("saveItems", inventory);
            for (let i = 0; i < 4; i++) {
                nuts.push.localStorage[i]("saveItems");
                console.log(nuts);
            }
            again = false;
        }
    } while (again)

}

function getIndexOfK(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(k);
        if (index > -1) {
            arrayIndex = i;
            skuIndex = index;
        }
    }
}

// This is the main program function
let run = true;

window.addEventListener('load', () => {
    let inventory, command, i = 0;

    displayMenu()

    while (i < 1) {
        command = window.prompt('Enter command');

        if (command === 'show') {
            console.log('hello world')
            show(inventory);

        } else if (command === 'update') {
            update();

        } else if (command === 'exit') {
            console.log("In exit")
            run = false;
            return false;

        } else {
            window.alert("Not a valid command");
        }
        i = 1;
    }

});