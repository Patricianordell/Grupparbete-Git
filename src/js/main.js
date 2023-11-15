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
    color.innerHTML = "Color: " + clothes[i].color;
    itemContainer.appendChild(color);
    price.innerHTML = "Price: " + clothes[i].price;
    itemContainer.appendChild(price);
    size.innerHTML = "Size: " + clothes[i].size;
    itemContainer.appendChild(size);
}

