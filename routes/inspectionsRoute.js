import express from "express";
import inspectionsController from "../controller/inspectionsController.js";

const router = express.Router();

// @route: GET /api/inspections
// @desc: Get all the inspection's
// @access: Public
router.route('/').get(inspectionsController.getAll);

// @route: GET /api/inspections/:id
// @desc: Get the inspections by id
// @access: Public
router.route('/:id').get(inspectionsController.getById);

// @route: GET /api/inspections/fail
// @desc: Get the inspections by result as 'fail'
// @access: Public
router.route('/fail').get(inspectionsController.getByResultAsFail);

export default router;