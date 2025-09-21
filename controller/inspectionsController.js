import { ObjectId } from 'mongodb';
import db from '../db/conn.js';


let getAll = async(req, res) =>{
   
    // Choose the collection
    let inspections = await db.collection('inspections');

    // Perform an action
    let result = await inspections.find({}).limit(2).toArray();

    // Return the result
    if(result.length == 0) res.status(404).json({Msg: "Companies not found"})
        else res.json(result);

};

let getById = async(req, res) =>{

    let query = new ObjectId(req.params.id);

    let inspections = await db.collection('inspections');

    let result = await inspections.find({query}).toArray();

    if(result.length == 0) res.status(404).json({msg: `Id- ${query} not found`})
        else res.status(200).json(result);


}

let getByResultAsFail = async(req, res) =>{
   
    // Choose the collection
    let inspections = await db.collection('inspections');

    // Perform an action
    let result = await inspections.find({result: "fail"}).limit(2).toArray();

    // Return the result
    if(result.length == 0) res.status(404).json({Msg: "Companies not found"})
        else res.json(result);

};

export default { getAll, getByResultAsFail, getById};