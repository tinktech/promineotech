// Menu App
// Week 8: JS5 - Object Oriented Programming Assignment
// Pets and their owners
class Pet {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    describe() {
        return `${this.name}, a ${this.color} ${this.type}`;
    }
}
class Owner {
    constructor(name) {
        this.name = name;
        this.pets = [];
    }

    addPet(pet) {
        if (pet instanceof Pet) {
            this.pets.push(pet);
        } else {
            throw new Error(`You can only add an instance of Pet. Argument is not a pet: ${pet}`);
        }
    }

    describe() {
        return `${this.name} has ${this.pets.length} pets.`;
    }
}

class Menu {
    constructor() {
        this.owners = [];
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
    }


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
            }
        alert(ownerString);
    }

    createOwner() {
        let name = prompt('Enter name for a new pet owner: ');
        this.owners.push(new Owner(name));
    }

    viewOwner() {
        let index = prompt("Enter the index of the pet owner you wish to view:");
        if (index > -1 && index < this.owners.length) {
            this.selectedOwner = this.owners[index];
            let description = 'Owner Name: ' + this.selectedOwner.name + '\n';
            description += '' + this.selectedOwner.describe() + '\n';

            for (let i = 0; i < this.selectedOwner.pets.length; i++) {
                description += i + ') ' + this.selectedOwner.pets[i].describe() + '\n';
            }

            let selection1 = this.showOwnerMenuOptions(description);
            switch (selection1) {
                case '1' :
                this.createPet();
                break;
                case '2' :
                this.deletePet();
            }
        }
    }

    deleteOwner() {
        let index = prompt('Enter the index of the pet owner you wish to delete: ');
        if (index > -1 && index < this.owners.length) {
            this.owners.splice(index,1);
        }
    }


    createPet() {
        let name = prompt('Enter the name for a new pet: ');
        let type = prompt('Enter the type of new pet(cat/dog/etc): ');
        let color = prompt('Enter the color of new pet: ');
        this.selectedOwner.addPet(new Pet(name,type,color));
    }

    deletePet() {
        let index = prompt('Enter the index of the pet you wish to delete: ');
        if (index > -1 && index < this.selectedOwner.pets.length) {
            this.selectedOwner.pets.splice(index,1);
        }
    }
}
let menu = new Menu();
menu.start();