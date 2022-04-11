"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_controller_1 = require("../controllers/location.controller");
const router = (0, express_1.Router)();
router.get('/cities', location_controller_1.getAllCitiesController);
router.get('/countries', location_controller_1.getAllCountriesController);
router.post('/save/city', location_controller_1.saveCityController);
router.post('/save/country', location_controller_1.saveCountryController);
exports.default = router;