const fs = require('fs');
const continents = fs.readFileSync('./data/continents.json', 'utf8');
const countries = fs.readFileSync('./data/countries.json', 'utf8');
const continentsData = JSON.parse(continents);
const countryData = JSON.parse(countries);

function repository() {
  this.getContinents = () => {
    return continentsData;
  };

  this.getCountries = async (continentCode) => {
    let results = countryData.filter((x) => x.continentCode == continentCode);
    return results;
  };
}

module.exports = repository;
