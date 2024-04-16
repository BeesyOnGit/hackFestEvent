import mongoose from "mongoose";
const UsersSchema = new mongoose.Schema<UsersType>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    ddn: {
        type: String,
        required: true,
    },
    section: {
        type: Number,
        required: true,
    },
    grp: {
        type: Number,
        required: true,
    },
    isProf: {
        type: Boolean,
        default: false,
    },
    module: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Number,
        default: () => {
            return Date.now();
        },
    },
});

const UsersModel: mongoose.Model<UsersType> = mongoose.model<UsersType>("user", UsersSchema);
export default UsersModel;

export type UsersType = {
    firstName: string;
    lastName: string;
    ddn: string;
    section: number;
    grp: number;
    isProf: boolean;
    module: string | null;
    createdAt?: number;
    _id?: string | mongoose.Schema.Types.ObjectId;
};
