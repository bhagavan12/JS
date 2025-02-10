class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name)
  }
  walk() {
    console.log("Animal " + this.name + " is walking")
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)//toUpperCase will work for single  character as well as string
  }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work