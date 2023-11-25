import{Schema, model} from "mongoose";

const commentSchema = new Schema(
    {
        autor:[{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

    export default model("Comment", commentSchema);