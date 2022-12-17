function importAll(r) {
  return r.keys().map(r);
}

const getImagesFromFolder = () => {
  const images = importAll(
    require.context("/public/images/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  return images;
};

export default getImagesFromFolder;
