import mongoose, { Mongoose } from "mongoose";
const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, require: true },
    user_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
