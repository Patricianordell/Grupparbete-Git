import './../scss/style.scss'
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