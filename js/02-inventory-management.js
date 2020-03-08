let inventory = [];

let product = new Object();
product["sku"] = 1;
product["description"] = "Tire";
product["quantity"] = 4;
product["cost"] = 65.99;

function displayMenu() {
    window.console.log("Product Inventory Management System");
    window.console.log(" ");
    window.console.log("COMMAND MENU");
    window.console.log("Show - Show inventory");
    window.console.log("Add - Update stock");
    window.console.log("Exit - Exit system");

}

function show(arr) {
    let i = 1;
    window.console.log("Items in Inventory \n\n");
    for (item in product) {
        window.console.log(i + ')' + ' ' + product[item]);
        i++;
    }

    

window.console.log(' ')
}
displayMenu();

