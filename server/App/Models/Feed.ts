import mongoose from "mongoose";
const FeedSchema = new mongoose.Schema<FeedType>({
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

const FeedModel: mongoose.Model<FeedType> = mongoose.model<FeedType>("Feed", FeedSchema);
export default FeedModel;

export type FeedType = {
    title: string;
    time: number;
    description: string;
    notif: boolean;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
