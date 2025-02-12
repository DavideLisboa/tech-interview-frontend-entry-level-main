// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType } = formData;

  let filteredProducts = products.filter(product =>
    (selectedPreferences && selectedPreferences.length > 0 && selectedPreferences.some(pref => product.preferences.includes(pref))) ||
    (selectedFeatures && selectedFeatures.length > 0 && selectedFeatures.some(feat => product.features.includes(feat)))
  );

  if (selectedRecommendationType === 'SingleProduct') {
    return filteredProducts.length > 0 ? [filteredProducts[filteredProducts.length - 1]] : [];
  }

  return filteredProducts;
};

export default { getRecommendations };
