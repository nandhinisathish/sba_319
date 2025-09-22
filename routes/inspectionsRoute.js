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
router.route('/:id/fail').get(inspectionsController.getByResultAsFail);

// @route: PATCH /api/inspections/:id/
// @desc: Update the inspections by Id
// @access: Public
router.route('/:id').patch(inspectionsController.updateById);

// @route: DELETE /api/inspections/:id/
// @desc: Get the inspections by result as 'fail'
// @access: Public
router.route('/:id').delete(inspectionsController.deleteById);

export default router;