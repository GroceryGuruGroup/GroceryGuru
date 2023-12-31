import express from "express";
import {
  newProduct,
  allProducts,
  prodctByDiscount,
  deleteProduct,
  productById,
  productByCategoryId,
  productByName,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/allproducts", allProducts);
router.get("/productbyid/:id", productById);
router.get("/productbyname/:itemName", productByName);
router.get("/productbycategory/:id", productByCategoryId);
//router.get("/productbycountry/:country", productByCountry);
//router.get("/productbyexpirydate/:expirydate", productByExpiryDate);
// router.get(
//   "/productbymanufacturingdate/:manufacturingdate",
//   productByManufacturingDate
// );
router.get("/productbydiscount/:discount", prodctByDiscount);
//router.get("/availableproducts/:available", availableProducts);
//router.get("/notavailableproducts/:available", notAvailableProducts);
router.post("/newproduct", newProduct);
//router.patch("/editproduct/:id", editProduct);
router.delete("deleteproduct/:id", deleteProduct);

export default router;
