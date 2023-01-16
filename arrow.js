const person = {
    name: "shankar",
    names: ["Sue", "Stan"],
    age: 20,
    display: function () {
        //console.log`name:${this.name}, age:${age}`;
        console.log(this.name + ' ' + this.age);
        self = this;
        this.names.forEach(n => {
            console.log(n + ' ' + this.age);
        });
    }
}

person.display();