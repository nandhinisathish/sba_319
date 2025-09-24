import express from "express";
import inspectionsController from "../controller/inspectionsController.js";

const router = express.Router();

// @route: GET /api/inspections
// @desc: Get all the inspection's
// @access: Public
router.route('/').get(inspectionsController.getAll);

// @route: GET /api/inspections/fail
// @desc: Get the inspections by result as 'fail'
// @access: Public
// NOTE: This specific route must come BEFORE the generic /:id route
router.route('/fail').get(inspectionsController.getByResultAsFail);

// @route: aggregate /api/inspections/result
// @desc: Get the inspections by result as 'fail'
// @access: Public
// NOTE: This is also a specific route and should be placed before /:id
router.route('/result').get(inspectionsController.resAggregate);

// @route: GET /api/inspections/:id
// @desc: Get the inspections by id
// @access: Public
// NOTE: This generic route comes after the specific ones
router.route('/:id').get(inspectionsController.getById);

// @route: PATCH /api/inspections/:id/
// @desc: Update the inspections by Id
// @access: Public
// NOTE: This generic route comes after the specific ones
router.route('/:id').patch(inspectionsController.updateById);

// @route: DELETE /api/inspections/:id/
// @desc: Get the inspections by result as 'fail'
// @access: Public
// NOTE: This generic route comes after the specific ones
router.route('/:id').delete(inspectionsController.deleteById);

export default router;