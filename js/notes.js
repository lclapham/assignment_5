// zaks stufff


function view(inventory) {
    let i;
    for (i = 0; i < inventory.length; i++) {

        window.console.log(inventory[i].sku + '\t' +
            inventory[i].product + '\t' + '(' +
            inventory[i].quantity + ')' + '$"' +
            inventory[i].cost);
    }
}

function getInventory() {
    const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory;

    tshirt.sku = 1000;
    tshirt.product = "Tshirt";
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = 2002;
    jeans.product = "jeans";
    jeans.quantity = 17;
    jeans.cost = 24.99;

    jacket.sku = 3301;
    jacket.product = "jacket";
    jacket.quantity = 17;
    jacket.cost = 24.99;

    hat.sku = 4441;
    hat.product = "hat";
    hat.quantity = 17;
    hat.cost = 24.99;

    socks.sku = 5555;
    socks.product = "socks";
    socks.quantity = 17;
    socks.cost = 24.99;

    inventory = [tshirt, jeans, jacket, hat, socks];
    return inventory;
}

function displayMenu() {
    window.console.log('');
    window.console.log('Inventory thingy');
    window.console.log('Show- Show stuff');
    window.console.log('');

}

window.addEventListener('load', () => {
    let inventory, command;
    displayMenu();
    inventory = getInventory();


    while (true) {
        command = window.prompt('Enter command');
        if (command !== null) {
            if (command === 'show') {
                console.log("Made it here")
                view(inventory);
            } else {

                window.alert("Not a valid command");
            }
        } else {
            break;
        }
    }
});