const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/add",bookingController.addBooking);
router.get("/get",bookingController.getAllBooking);
router.delete("/delete/:id",bookingController.deleteController);
router.put("/update/:id",bookingController.updateBooking);

module.exports = router;
