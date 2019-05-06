const counties = [];

let $state = 'Puerto Rico';

$state = $state.replace(' ', '-').toLowerCase();

const url =
  $state === 'louisiana'
    ? `https://raw.githubusercontent.com/igorcweb/topojson/master/countries/us-states/louisiana-parishes.json`
    : $state === 'puerto-rico'
    ? `https://raw.githubusercontent.com/igorcweb/topojson/master/countries/us-states/puerto-rico-municipios.json`
    : `https://raw.githubusercontent.com/igorcweb/topojson/master/countries/us-states/${$state}-counties.json`;

fetch(url)
  .then(response => response.json())
  .then(myJson => {
    const data =
      $state !== 'louisiana'
        ? myJson.objects[`cb_2015_${$state}_county_20m`].geometries
        : myJson.objects['cb_2015_louisiana_parish_20m'].geometries;
    data.forEach(county => {
      county = county.properties.NAME;
      counties.push(county);
    });
  })
  .then(() => {
    console.log(counties.sort());
  });
