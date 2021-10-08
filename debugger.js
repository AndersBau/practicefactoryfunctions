const cellPhoneUtilities = {
  togglePower() {
    this.power = !this.power;
    console.log('toggle the power property to true or false');
  }
};

const iPhone = Object.create(cellPhoneUtilities); 
iPhone.type = 'iPhone';
iPhone.power = true;

const pixel = Object.create(cellPhoneUtilities);
pixel.type = 'Pixel';
pixel.power = true;

// console.log(iPhone.togglePower());
// console.log(pixel.togglePower());

// ***************************************

const twitterUserPrototype = {
  addFolower() {
    this.followers++;
  },
  getHandle(){
    return `here is my handle is ${this.handle}, follow me`;
  }
}


const createTwitterUser = (userName, followers) => {
  const newUser = Object.create(twitterUserPrototype);
  newUser.userName = `@${userName}`;
  newUser.followers = 0;

  return newUser;
}

const nimitsAccount = createTwitterUser('nimit', 8798);


// ***************************************


const createBike = (brand, wheels, gear, price) => {
  return {
    brand,
    wheels,
    gear,
    price
  }
};

const bike1 = createBike('NycBikes', 8, 'rxmax', 8978);


// ***************************************


const houseSpecs = (sqf, rooms, backyard, pool, garage, zone, address) => {
  return {
    sqf,
    rooms,
    backyard,
    pool,
    garage,
    zone,
    address
  };
};
