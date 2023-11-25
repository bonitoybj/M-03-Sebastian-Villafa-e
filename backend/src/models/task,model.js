import {Schema, model} from "mongoose";
import User from "user.model.js"

new taskSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        descripcion:{
            type: String,
      required: true,
        },
        completed:{
            type: boolean,
            required: true
        },
        user:{
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
    },
        {
            timestamps: true,
             versionKey: false,
        },

    );

    export default model("Task", taskSchema);