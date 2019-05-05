const counties = [];

let $state = 'texas';
let stateCode = 'TX';
let stateId = '48';

const url = `https://raw.githubusercontent.com/igorcweb/topojson/master/countries/us-states/${stateCode}-${stateId}-${$state}-counties.json`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(results) {
    data = results.objects[`cb_2015_${$state}_county_20m`];
    data.geometries.forEach(county => {
      county = county.properties.NAME;
      counties.push(county);
    });
  })
  .then(() => {
    console.log(counties.sort());
  });
