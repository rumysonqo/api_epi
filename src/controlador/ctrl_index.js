import {pool} from '../db.js'

export const ping= async (req,res)=>{
    const [resultado]=await pool.query('select 1+1 as resultado');
    res.json(resultado[0]); 

}