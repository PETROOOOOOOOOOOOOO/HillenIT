let person = {
    name: "Petro",
    age: 18,
    email: "petro@gmail.com",
    isAdmin: true,
    showData(){
        console.log(`${this.name} ${this.age} ${this.email} ${this.isAdmin}`);
    }
}

person.showData();