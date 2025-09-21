import db from '../db/conn.js';
import { ObjectId } from 'mongodb';


let getAll = async(req, res) =>{
    
    // Choose the collection
    let companies = await db.collection('companies');

    // Perform an action
    let result = await companies.find({}).limit(2).toArray();

    // Return the result
    if(result.length == 0) res.status(404).json({msg: "Company details not found"})
        else res.json(result);
    
}

let getById = async(req, res) =>{

    let query = new ObjectId(req.params.id);

    let companies = await db.collection('companies');

    let result = await companies.find({query}).toArray();

    if(result.length == 0) res.status(404).json({msg: `Id- ${query} not found`})
        else res.status(200).json(result);


}

let getByCategoryAsMusic = async(req, res) =>{
    
    // Choose the collection
    let companies = await db.collection('companies');

    // Perform an action
    let result = await companies.find({category_code: "music"}).limit(2).toArray();

    // Return the result
    if(result.length == 0) res.status(404).json({msg: "Company details not found"})
        else res.json(result);
    
}

export default { getAll, getByCategoryAsMusic, getById};