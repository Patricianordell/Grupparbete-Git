import './../scss/style.scss'

class Person{
  name;
  animal;
  clothes;
  constructor(name, animal, clothes){
    this.name = name;
    this.animal = animal;
    this.clothes = clothes;
  }
}

const p = new Person ("Kalle Anka", "anka", "blå skjorta");
const p2 = new Person ("Musse Pigg", "mus", "röd byxor");
const p3 = new Person ("Långben", "hund", "blå hatt");

const seriefigurer = [p, p2, p3];

function createHTMLForPerson(person){
  const personCard = document.createElement("div");
  const nameTag = document.createElement("p");
  const animalTag = document.createElement("p");
  const clothesTag = document.createElement("p");

  personCard.className = "personCard";
  nameTag.innerHTML = person.name;
  animalTag.innerHTML = person.animal;
  clothesTag.innerHTML = person.clothes;

  personCard.appendChild(nameTag);
  personCard.appendChild(animalTag);
  personCard.appendChild(clothesTag);
  document.body.appendChild(personCard)
};


for (let i = 0; i < seriefigurer.length; i ++){
  createHTMLForPerson(seriefigurer[i]);
}
