export default (req, res, next)=>{
    console.log(`${req.method} of ${req.body} from ${req.ip}`);
    next();
}