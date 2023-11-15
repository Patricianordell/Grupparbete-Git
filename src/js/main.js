import './../scss/style.scss';

import { Clothes } from './models/clothes';

const clothes = [];
const item1 = new Clothes("T-shirt", "white", "122kr", "M");
clothes.push(item1);
const item2 = new Clothes("Shoes", "black", "1000kr", "39");
clothes.push(item2);
const item3 = new Clothes("Dress", "blue", "899kr", "S");
clothes.push(item3);


for (let i = 0; i < clothes.length; i++) {
    const container = document.getElementById("app");
    const itemContainer = document.createElement("div");
    itemContainer.className = "itemContainer";
    container.appendChild(itemContainer);

    const title = document.createElement("h1");
    const color = document.createElement("p");
    const price = document.createElement("p");
    const size = document.createElement("h4");
    title.innerHTML = clothes[i].typ;
    itemContainer.appendChild(title);
    color.innerHTML = "Color: " + clothes[i].clothesColor;
    itemContainer.appendChild(color);
    price.innerHTML = "Price: " + clothes[i].price;
    itemContainer.appendChild(price);
    size.innerHTML = "Size: " + clothes[i].size;
    itemContainer.appendChild(size);
}

import { createHtmlforCar } from './Models/HtmlHelpers';

class Car {
  carBrand;
  year;
  color;

  constructor (carBrand, year, color){
    this.carBrand = carBrand;
    this.year = year;
    this.color = color;
  }
}

const car = new Car ("Volvo", 2019, "Grey");
const car2 = new Car ("BMW", 2017, "Black");
const car3 = new Car ("Tesla", 2022, "White");

const myCars = [car, car2, car3];

for (let i = 0; i <myCars.length; i++){
  createHtmlforCar(myCars [i]);
}