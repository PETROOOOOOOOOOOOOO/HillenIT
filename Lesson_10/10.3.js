const library = {
    book: [
        {name: "O", phoneNum: "0938888888", email: "O@gmail.com"},
        {name: "S", phoneNum: "0937777777", email: "S@gmail.com"},
        {name: "L", phoneNum: "0939999999", email: "L@gmail.com"},
    ],
    findContactName(name) {
        const contact = this.book.find((book) => book.name === name);
        if (contact) {
            return `Ім'я: ${contact.name},Номер телефону: ${contact.phoneNum},Email: ${contact.email}`;
        }else {
            return `Контакт ${name} не знайдемо `;
        }
    },
    addContact(newContact) {
        this.book.push(newContact);
    }
}
const getName = prompt(name)
const found = library.findContactName(getName);
console.log(found);
library.addContact({
    name: "P",
    phoneNum: "0931111111",
    email: "P@gmail.com",
});

function showData(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            continue;
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            showData(obj[key]);
        }else {
            console.log(obj[key]);
        }
    }
}
showData(library);