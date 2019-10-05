const express = require("express");
const SessionController = require("./controllers/SessionController");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.get("/users", SessionController.show);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);
routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spotId/bookings", BookingController.store);
module.exports = routes;
