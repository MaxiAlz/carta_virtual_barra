const productsInMenu = {
  drinks: [
    { name: "smirnoff + speed", price: 1200, size: "chico" },
    { name: "smirnoff + speed", price: 1600, size: "grande" },
    { name: "fernet branca + coca", size: "chico", price: 1000 },
    { name: "fernet branca + coca", size: "grande", price: 1400 },
    { name: "gin tonic gordon's", size: "chico", price: 1200 },
    { name: "gin tonic gordon's", size: "grande", price: 1500 },
  ],
  beers: [
    { name: "stella artois", size: "710 cc", price: 1000 },
    { name: "lata budweiser", size: "", price: 600 },
  ],
  whithoutAlcoholDrinks: [
    { name: "agua mineral", size: "chica", price: 400 },
    { name: "speed", size: "", price: 500 },
    { name: "vaso de gaseosa", size: "chico", price: 400 },
  ],
  sales: [
    { amount: 2, name: "Fernet branca + coca", size: "chico", price: 1700 },
    { amount: 2, name: "Fernet branca + coca", size: "grande", price: 2700 },
    { amount: 2, name: "smirnoff + speed", size: "chico", price: 1900 },
    { amount: 2, name: "smirnoff + speed", size: "grande", price: 2600 },
    { amount: 2, name: "lata budweiser", size: "", price: 1000 },
    { amount: 3, name: "speed", size: "", price: 1000 },
  ],
};

export { productsInMenu };
