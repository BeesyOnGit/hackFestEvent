import mongoose from "mongoose";
const NotesSchema = new mongoose.Schema<NotesType>({
    grp: {
        type: Number,
        required: true,
    },
    section: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
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
    photo: string;
    grp: number;
    section: number;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
