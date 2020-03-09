let product1 = new Object();
product1["sku"] = 1;
product1["description"] = "Tire";
product1["quantity"] = 4;
product1["cost"] = 65.99;

let product2 = new Object();
product2["sku"] = 2;
product2["description"] = "Engine";
product2["quantity"] = 3;
product2["cost"] = 2.00;

let product3 = new Object();
product3["sku"] = 3;
product3["description"] = "Windshield";
product3["quantity"] = 2;
product3["cost"] = 100.00;

let product4 = new Object();
product4["sku"] = 4;
product4["description"] = "Clock Spring";
product4["quantity"] = 4;
product4["cost"] = 70.00;

let inventory = [[product1], [product2], [product3], [product4]];

function displayMenu() {
    window.console.log("Product Inventory Management System");
    window.console.log(" ");
    window.console.log("COMMAND MENU");
    window.console.log("Show - Show inventory");
    window.console.log("Add - Update stock");
    window.console.log("Exit - Exit system");

}



function show(arr) {
    window.console.log(arr.length);
    let data ;
    for (let i = 0; i < arr.length; i++){
       data = ' ';
        arr[i].forEach(element => {
            for (property in element) {
                
                // console.log(typeof element);
                // console.log(`${property}: ${object[property]}`);
                
                
              data += element[property] + " ";
            }
                   
        });
        // console.log(typeof data);
        window.console.log(data);
    }
}

displayMenu();


