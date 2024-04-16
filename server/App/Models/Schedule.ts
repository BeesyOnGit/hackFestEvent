import mongoose from "mongoose";
const SchedulSchema = new mongoose.Schema<SchedulType>({
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

const SchedulModel: mongoose.Model<SchedulType> = mongoose.model<SchedulType>("Schedul", SchedulSchema);
export default SchedulModel;

export type SchedulType = {
    photo: string;
    grp: number;
    section: number;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
