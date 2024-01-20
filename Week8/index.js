// Menu App
// Week 8: JS5 - Object Oriented Programming Assignment
// Pets and their owners
class Pet {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    } // pet class and variables

    describe() {
        return `${this.name}, a ${this.color} ${this.type}`;
    }
}
class Owner {
    constructor(name) {
        this.name = name;
        this.pets = []; // empty pets array
    } // owner class and variable

    addPet(pet) {
        if (pet instanceof Pet) {
            this.pets.push(pet);
        } else {
            throw new Error(`You can only add an instance of Pet. Argument is not a pet: ${pet}`);
        }
    } // method for adding a pet to an owner

    describe() {
        return `${this.name} has ${this.pets.length} pets.`;
    }
}

class Menu {
    constructor() {
        this.owners = []; // empty owners array
        this.selectedOwner = null;
    }

    

    start() {
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
            switch(selection) {
                case '1' :
                    this.createOwner();
                    break;
                case '2' :
                    this.viewOwner();
                    break;
                case '3' :
                    this.deleteOwner();
                    break;
                case '4' :
                    this.displayOwners();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    } // menu functionality; choice selection


    showMainMenuOptions() {
        return prompt(`
0) Exit
1) Add a new pet owner
2) View a pet owner
3) Delete a pet owner
4) Display all pet ownes
        `);
    } // main menu prompts

    showOwnerMenuOptions(ownerInfo) {
        return prompt(`
0) Back
1) Add a new pet
2) Delete a pet
-----------------
${ownerInfo}
        `);
    } // owner menu prompts

    displayOwners() {
        let ownerString = '';
            if (this.owners.length > 0) {
                for (let i = 0; i < this.owners.length; i++) {
                    ownerString += i+ ') ' + this.owners[i].name + ` (${this.owners[i].pets.length} pets)` + '\n';
                }
            } else {
                ownerString = `There are currently no pet owners.`;
            } // if else for if there are any owners, and to display them when there are
        alert(ownerString);
    } // displays all owners

    createOwner() {
        let name = prompt('Enter name for a new pet owner: ');
        this.owners.push(new Owner(name));
    } // creates a new owner

    viewOwner() {
        let index = prompt("Enter the index of the pet owner you wish to view:");
        if (index > -1 && index < this.owners.length) {
            this.selectedOwner = this.owners[index];
            let description = 'Owner Name: ' + this.selectedOwner.name + '\n'; // displays selected owner's name
            description += '' + this.selectedOwner.describe() + '\n'; // displays selected owner's description(number of pets)

            for (let i = 0; i < this.selectedOwner.pets.length; i++) {
                description += i + ') ' + this.selectedOwner.pets[i].describe() + '\n';
            } // displays current owner's pets

            let selection1 = this.showOwnerMenuOptions(description);
            switch (selection1) {
                case '1' :
                this.createPet();
                break;
                case '2' :
                this.deletePet();
            } // adding/deleting pets functionality
        }
    }

    deleteOwner() {
        let index = prompt('Enter the index of the pet owner you wish to delete: ');
        if (index > -1 && index < this.owners.length) {
            this.owners.splice(index,1);
        }
    } // removes selected owner


    createPet() {
        let name = prompt('Enter the name for a new pet: ');
        let type = prompt('Enter the type of new pet(cat/dog/etc): ');
        let color = prompt('Enter the color of new pet: ');
        this.selectedOwner.addPet(new Pet(name,type,color));
    } // creates a new pet

    deletePet() {
        let index = prompt('Enter the index of the pet you wish to delete: ');
        if (index > -1 && index < this.selectedOwner.pets.length) {
            this.selectedOwner.pets.splice(index,1);
        }
    } // deletes selected pet
}

let menu = new Menu();
menu.start(); // launch menu.start()