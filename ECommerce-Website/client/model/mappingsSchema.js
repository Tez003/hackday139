import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const mappingsSchema = new mongoose.Schema({
    newcust: String,
    oldcust: String,
    productid: String
});

// autoIncrement.initialize(mongoose.connection);
// mappingsSchema.plugin(autoIncrement.plugin, 'mapping');

const mappings = mongoose.model('mapping', mappingsSchema);

export default mappings;