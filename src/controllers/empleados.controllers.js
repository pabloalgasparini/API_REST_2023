import {pool} from '../db.js'

export const getEmpleados = async (req,res)=> {
    try{
        const consult = await pool.query('SELECT * FROM empeleados')
        res.json(consult)
    }catch(error){
        return res.status(500).json({
            message: 'Ocurrio un error'
        })
    }
  
};

export const getEmpleado = async (req,res)=> {
    
    try{
        const consult = await pool.query('SELECT * FROM empeleados WHERE id = ?',[req.params.id])
    if (consult.length<=0) return res.status(404).json({
        message: 'El empleado no existe'
    })
    res.json(consult)
    }catch(error){
        return res.status(500).json({
            message: 'Ocurrio un error'
        })
    }
}

export const postEmpleados = async (req,res)=> {
    const {name, salary} = req.body;
    try{
        
        const rows = await pool.query('INSERT INTO empeleados (name, salary) VALUES (?,?)', [name, salary])
        console.log(req.body);
        res.send('Se guardó con éxito');
    }catch(error){
        return res.status(500).json({
            message: 'Ocurrio un error'
        })
    }
};

export const putEmpleados = async (req,res)=> {
    const {id} = req.params
    const {name, salary} = req.body

    try{
       
        const consult = await pool.query('UPDATE empeleados SET name = IFNULL(?, name), salary = IFNULL (?, salary) WHERE id = ?' , [name, salary, id])
        if (consult.affectedRows <=0) return res.status(404).json({
            message: 'El empleado no encontrado'
        });
    
        const consultaDos = await pool.query('SELECT * FROM empeleados WHERE id = ?', [id])
        console.log(consult);
        res.json(consultaDos[0])
    }catch(error){
        return res.status(500).json({
            message: 'Ocurrio un error'
        })
    }
};

export const deleteEmpleados = async (req,res)=> {
   
    try {
        const consult = await pool.query('DELETE FROM empeleados WHERE id=?', [req.params.id])
        console.log(consult);
        if (consult.affectedRows <=0) return res.status(404).json({
            message: 'El empleado no existe'
        });
        res.send('Empleado elimminado');
    }catch(error){
        return res.status(500).json({
            message: 'Ocurrio un error'
        })
    }
};