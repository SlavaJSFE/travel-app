import geoJson from '../../constants/geoJson.json';

const createLayer = (currentCountry) => {
  const polygon = geoJson.features.find((el) => el.properties.name === currentCountry);
  const newJson = { type: 'FeatureCollection', features: [polygon] };

  return newJson;
};

export default createLayer;
