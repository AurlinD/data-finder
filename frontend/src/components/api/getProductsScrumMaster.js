import axios from "axios";

/**
 * GET request for Scrum Master Name
 * @param {*} inputScrumMaster
 * @param {*} setProducts
 */
const getProductsScrumMaster = (inputScrumMaster, setProducts) => {
  axios
    .get(`http://localhost:3000/api/products/scrum-master/${inputScrumMaster}`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.error(err);
      setProducts([]);
    });
};

export default getProductsScrumMaster;
