import mongoose from "mongoose";
const JustifSchema = new mongoose.Schema<JustifType>({
    time: {
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

const JustifModel: mongoose.Model<JustifType> = mongoose.model<JustifType>("Justif", JustifSchema);
export default JustifModel;

export type JustifType = {
    photo: string;
    time: number;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
