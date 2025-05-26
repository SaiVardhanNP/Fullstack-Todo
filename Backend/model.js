const mongoose= require("mongoose");


const Schema= mongoose.Schema;

const id=mongoose.ObjectId;

const TodoSchema= Schema({
    title:String,
    description:String,
    done:{type:Boolean,
        default:false
    }
})

const TodoModel=mongoose.model("todos",TodoSchema)

module.exports={
    TodoModel:TodoModel
}
