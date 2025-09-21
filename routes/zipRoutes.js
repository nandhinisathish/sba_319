import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import zipControl from '../controller/zipController.js';

const router = express.Router();

// @route: GET /api/zip
// @desc: Get all the zip's
// @access: Public
router.route('/').get(zipControl.getAll);

// @route: GET /api/zip/:id
// @desc: Get the zip by id
// @access: Public
router.route('/:id').get( zipControl.getById)

// @route: POST /api/zip/:id
// @desc: Create New zip
// @access: Public
router.route('/').post(zipControl.createOne)

export default router;