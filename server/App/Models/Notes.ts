import mongoose from "mongoose";
const NotesSchema = new mongoose.Schema<NotesType>({
    note: {
        type: Number,
        required: true,
    },
    target: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    module: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: Number,
        default: () => {
            return Date.now();
        },
    },
});

const NotesModel: mongoose.Model<NotesType> = mongoose.model<NotesType>("Notes", NotesSchema);
export default NotesModel;

export type NotesType = {
    note: number;
    target: string | mongoose.Schema.Types.ObjectId;
    module: string | mongoose.Schema.Types.ObjectId;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
