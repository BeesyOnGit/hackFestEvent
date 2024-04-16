import mongoose from "mongoose";
const NotesSchema = new mongoose.Schema<NotesType>({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    notif: {
        type: Boolean,
        default: false,
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
    title: string;
    time: number;
    description: string;
    notif: boolean;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
