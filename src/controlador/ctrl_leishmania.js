import { pool } from '../db.js'

export const get_lei=async (req,res)=>{
    try{
        const [rows]=await pool.query('select * from leishmania');
        res.json(rows);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
    
}

export const get_por_micro= async (req,res)=>{
    try{
        const [rows]=await pool.query('select mr.nom_micro, lei.* from micro_red mr, leishmania lei where lei.cod_micro = mr.cod_micro and mr.cod_micro = ?',[req.params.mr])
        if(rows.length<=0) return res.status(404).json({mensaje:'no se encontro informacion'})
        res.json(rows);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
    
    
}