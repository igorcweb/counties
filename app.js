const counties = [];

let $state = 'texas';
let stateCode = 'TX';
let stateId = '48';

const url = `https://raw.githubusercontent.com/igorcweb/topojson/master/countries/us-states/${stateCode}-${stateId}-${$state}-counties.json`;

fetch(url)
  .then(response => response.json())
  .then(myJson => {
    data = myJson.objects;
    data = data[`cb_2015_${$state}_county_20m`];
    data.geometries.forEach(county => {
      county = county.properties.NAME;
      counties.push(county);
    });
  })
  .then(() => {
    console.log(counties.sort());
  });
