class Character {

    constructor(name, description, currentRoom) {
        this.name = name;
        this.description = description;
        this.currentRoom = currentRoom;

        this.health = 100;
        this.strength = 10;
        this.items = [];
    }

    applyDamage(amount) {
        this.health -= amount;
        console.log(`Your health is ${this.health}`);
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.dropAll();
        this.currentRoom = null;
    }


    takeItem(itemName) {
        let roomItems = this.currentRoom.items;
        let item = this.currentRoom.getItemByName(itemName);
        let newItem = roomItems.splice(roomItems[item], 1);
        this.items.push(newItem[0]);
    }


    dropItem(itemName) {
        let item = this.getItemByName(itemName);
        let items = this.items;
        let roomItems = this.currentRoom.items;
        let newItem = this.items.splice(items[item], 1);

        roomItems.push(newItem[0]);
    }

    dropAll() {
        let items = this.items;
        let roomItems = this.currentRoom.items;

        while (items.length > 0) {
            let item = items.splice(0, 1);
            roomItems.push(item[0]);
        }
    }

}

module.exports = {
    Character,
};
