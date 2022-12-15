function importAll(r) {
  // let images = {};
  // r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  // return images;
  return r.keys().map(r);
}

const getImagesFromFolder  = () => {
   const images = importAll(require.context('/public/images/gallery', false, /\.(png|jpe?g|svg)$/));
   return  images
}

export default getImagesFromFolder