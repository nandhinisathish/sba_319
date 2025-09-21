import express from "express";
import companiesController from "../controller/companiesController.js";

const router = express.Router();

// @route: GET /api/companies
// @desc: Get all the companies's
// @access: Public
router.route('/').get(companiesController.getAll);

// @route: GET /api/companies/:id
// @desc: Get the companies by result as 'fail'
// @access: Public
router.route('/:id').get(companiesController.getById);

// @route: GET /api/companies/:id
// @desc: Get the companies by id
// @access: Public
router.route('/music').get(companiesController.getByCategoryAsMusic);

export default router;