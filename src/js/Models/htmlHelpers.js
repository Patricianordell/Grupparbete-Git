export function createHtmlforCar (car){
  const carContainer = document.createElement("div");
  const carBrandTag = document.createElement("h3");
  const yearTag = document.createElement("p");
  const colorTag = document.createElement ("span");

  carContainer.className = "car-box";

  carBrandTag.innerHTML = car.carBrand;
  yearTag.innerHTML = car.year;
  colorTag.innerHTML = car.color;

  carContainer.appendChild(carBrandTag);
  carContainer.appendChild(yearTag);
  carContainer.appendChild(colorTag);
  document.body.appendChild(carContainer);
}

