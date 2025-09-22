import db from "../db/conn.js";
import { ObjectId } from "mongodb";

let getAll = async(req, res, next)=>{
        
        // Choose the collection
        let zips = await db.collection('zips');

        // Perform any action
        let result = await zips.find({}).limit(3).toArray();

        // Return the result
       if(result.length == 0) res.status(404).json({Msg: "Grade not found" })
       else res.json(result);
       
        next();

    };

let getById = async(req, res) => {

    let query = new ObjectId(req.params.id);

    // Choose the collection
    let zips = await db.collection('zips');

    // Perform an action
    let result = await zips.find(query).toArray();

    // Return the result
    if(result.length == 0) res.status(404).json({Msg: "Id not found"})
        else res.json(result);
};

let createOne =  async(req, res)=>{

    let {city, zip, loc, pop, state} = req.body;

    let zips = await db.collection('zips');

    if(city && zip && loc && pop && state){
        
        let result = await zips.insertOne({city, zip, loc, pop, state});
        res.status(201).json(result);
    
    } else{

        res.status(404).json({Msg: "Couldn't insert the zip"});

    }
    
};


export default { getAll, getById, createOne};