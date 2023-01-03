import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const TVSchema = new Schema({
    backdrop_path: {type: String},
    id: { type: Number, required: true, unique: true },
    genres: [{
        name: {type: String}
    }],
    in_production: {type: Boolean},
    name: {type: String},
    original_language: {type: String},
    original_name: {type:String},
    overview: {type:String},
    popularity: {type: Number},
    poster_path: { type: String },
    tagline: {type: String},
    vote_average: {type: Number},

});

TVSchema.statics.findByPeopleDBId = function (id) {
    return this.findOne({ id: id });
};

export default mongoose.model('TV', TVSchema);
