import './../scss/style.scss'



class Location {
    locationName;
    locationCountry;
    locationType;
       constructor (name, country, type) {
            this.locationName = name;
            this.locationCountry = country;
            this.locationType = type;
        }
    } 
    
const location1 = new Location("Corfu", "Greece", "Sun and Bath");
const location2 = new Location("Tokyo", "Japan", "City");
const location3 = new Location("Vattnajökull", "Iceland", "Adventure");

const locations = [location1, location2, location3];

const locationsContainer = document.createElement("p");
document.body.appendChild(locationsContainer);

for(let i=0; i < locations.length; i++) {
    
    const locationContainer = document.createElement("p");
    locationContainer.className = "card";
    
    const locationNameContainer = document.createElement("p");
    const locationCountryContainer = document.createElement("p");
    const locationTypeContainer = document.createElement("p");


    locationNameContainer.innerHTML = locations[i].locationName;
    locationCountryContainer.innerHTML = locations[i].locationCountry;
    locationTypeContainer.innerHTML = locations[i].locationType;

    locationContainer.appendChild(locationNameContainer);
    locationContainer.appendChild(locationCountryContainer);
    locationContainer.appendChild(locationTypeContainer);
    locationsContainer.appendChild(locationContainer);
    

}

