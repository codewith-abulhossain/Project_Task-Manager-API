import mongoose, { Mongoose } from "mongoose";
const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true },
    user_id: { type: Mongoose.Schema.Types.ObjectId, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
