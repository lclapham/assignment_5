// Make the inventory array
let inventory = [[1000, "Shirt", 10, 10.00],
[2000, "Pants", 20, 20.00],
[3000, "Shoes", 30, 30.00],
[4000, "Socks", 40, 40.00],
[5000, "Ties", 50, 50.00],
[6000, "Belts", 60, 60.00]]


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
    window.console.log("exit(); - Exit system");

}

// Show the contents of the array as strings.
function show() {
    let data;
    inventory = localStorage.getItem("saveItems");
    console.log(inventory);
    inventory.forEach(element => {
        data = ' ';
        for (item in element) {
            data += element[item] + " ";
        }
        console.log(data);
    });
}

// Perform the update command

function getUserSku() {
    let again = true;
    do {
        skuChoice = parseInt(window.prompt("Enter a SKU number from the list to update \n" + "SKU :" + inventory[0][0] + ', '
            + inventory[1][0] + ', '
            + inventory[2][0] + ', '
            + inventory[3][0] + ', '
            + inventory[4][0] + ', '
            + inventory[5][0] + ', '));

        if (isNaN(skuChoice)) {
            console.log("You must enter one of the SKU numbers from the list.")

        } else if (skuChoice === inventory[0][0] ||
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

    return skuChoice;
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
            show();
            // Set the inventory to locol storage
            localStorage.setItem("saveItems", inventory);
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

displayMenu();

