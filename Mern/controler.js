//Import models
const model = require('./model');
// Define controller functions
const createTodo = async (req, res)=>{
   const { title, description } = req.body;
    try{
    const response = await model.create({title,description});
    res.status(201).json({
        Sucess:true,
        data:response,
        message:"Todo created sucessfull"
    });
    }catch(err){
        console.log(err);
        res.status(500).json({
            Sucess:false,
             message: "Internal server error: " + err.message
        });
    }

}
const getTodos = async (req, res)=>{
    try{
        const todos = await model.find ({});
        res.status(200).json({
            Sucess:true,
            data:todos,
            message:"Todos fetched sucessfull"
        })
    }
    catch(err){
         console.log(err);
        res.status(500).json({
            Sucess:false,
             message: "Internal server error: " + err.message
  });
    }
}

const getbyid = async (req, res)=>{
    const{ id } = req.params.id; 
    try{
        const todo = await model.findById({_id:id});
        res.status(200).json({
            Sucess:true,
             data:todo
        } );
           
        if(!todo){
            return res.status(404).json({
                Sucess:false,
                message:"Todo not found"
        });
        }}
         catch(err){
         console.log(err);
        res.status(500).json({
            Sucess:false,
             message: "Internal server error: " + err.message
            });
    }
}
const updateTodo = async (req, res)=>{
    const {id } = req.params.id;
    const {title, description} =req.body;
    try{
        const todo = await model.findByIdAndUpdate({_id:id},{title,description},{new:true});
        res.status(200).json({
            Sucess:true,
             data:todo,
             message:"Todo updated sucessfull"
        } );
    }
catch(err){
    console.log(err);
    res.status(500).json({  
        Sucess:false,
         message: "Internal server error: " + err.message
    });
}
}

const DeleteTodo = async (req, res) =>{
    const id = req.params.id.trim();

    console.log(id);
      if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID is required"
    });
}
    try{
        const todo = await model.findByIdAndDelete({_id:id});
        res.status(200).json({
            Sucess:true,
             data:todo,
             message:"Todo deleted sucessfull"
        } );

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            Sucess:false,
             message: "Internal server error: " + err.message
        });

    }

};
   

module.exports = {createTodo, getTodos, getbyid, updateTodo, DeleteTodo};