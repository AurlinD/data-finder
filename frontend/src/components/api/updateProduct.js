import axios from "axios";

/**
 * PUT request
 * @param {*} updatedProduct
 * @param {*} navigate
 * @param {*} setError
 */
const updateProduct = (updatedProduct, navigate, setError) => {
  axios
    .put(
      `http://localhost:3008/api/products/${updatedProduct.productId}`,
      updatedProduct
    )
    .then(() => {
      // navigate to landing page after success
      setError("");
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
      setError("post request failure. productId already exists in the db.");
    });
};

export default updateProduct;
