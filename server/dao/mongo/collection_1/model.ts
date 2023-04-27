import mongoose, { Schema, model } from 'mongoose';
mongoose.pluralize(null);
//interface ### 
interface IEsData{
    _id: string;
    test: string;
    test2: string;
}

//schema ###
export const esDataSchema = new Schema<IEsData>({
    _id: { type: String },
    test:  { type: String },
    test2: {  type: String },
});


//model ###
export const collection = model<IEsData>('esData', esDataSchema);
