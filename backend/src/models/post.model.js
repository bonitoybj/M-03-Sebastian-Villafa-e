import{Schema, model} from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        autor:[{
            ref: "User",
            type: Schema.Types.ObjectId,            
        }],
        comments:[
            {
                ref: "Comment",
                type: Schema.Types.ObjectId,
            },
        ],
        imageUrl:{
            type: String,
            required: true,
        },        
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

    export default model("Post", postSchema);