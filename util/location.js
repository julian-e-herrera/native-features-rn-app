const GEO_API_KEY = "f2cffd95374c46798e61babd8f5fb4a8";

const requestOptions = {
  method: "GET",
};

export const getMapPreview = (lat, lng) => {
  // https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=200&center=lonlat%3A-122.29009844646316%2C47.54607447032754&zoom=13&marker=lonlat%3A-122.29188334609739%2C47.54403990655936%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A-122.29282631194182%2C47.549609195001494%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A-122.28726954893025%2C47.541766557545884%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=${GEO_API_KEY}
  // const imagePreview = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=200&center=lonlat%3A-122.29009844646316%2C47.54607447032754&zoom=13&marker=lonlat%3A-122.29188334609739%2C47.54403990655936%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A-122.29282631194182%2C47.549609195001494%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A-122.28726954893025%2C47.541766557545884%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=${GEO_API_KEY}`;
  const imagePreview = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat%3A${lat}%2C${lng}&zoom=14.3497&marker=lonlat%3A${lat}%2C${lng}%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A-122.29282631194182%2C47.549609195001494%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A-122.28726954893025%2C47.541766557545884%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=f2cffd95374c46798e61babd8f5fb4a8`;

  return imagePreview;
};
// const GOOGLE_API_KEY = ""; //TODO: SHOOULD BE COMPLETE WIYH THE KEY

// export const getMapPreview = (lat, lng) => {
//   const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng},New+York,NY&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
//   return imagePreview;
// };

export const getAddress = async ({ lat, lng }) => {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${GEO_API_KEY}`,
    {
      method: "GET",
    }
  ).catch((error) => {
    console.log("error", error);
    throw newError(error);
  });

  const resData = await response.json();
  const address = resData.features[0].properties.formatted;
  console.log(address);
  if (
    // !resData.features.length ||
    // !resData.features[0].properties ||
    !!resData.features[0].properties.formatted.trim().length
  ) {
    throw new Error("Something went wrong!!!");
  }

  return address;
};
