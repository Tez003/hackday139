// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
    
//     username:  String,
//     productid: String,
//     review: String
// });

// const order = mongoose.model('order', orderSchema);

// export default order;

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const forderSchema = new mongoose.Schema({
    username: String,
    // url: String,
    // detailUrl: String,
    // title: Object,
    // price: Object,
    // quantity: Number,
    productid: String,
    // discount: String,
    review: String
});

autoIncrement.initialize(mongoose.connection);
forderSchema.plugin(autoIncrement.plugin, 'forder');

const products = mongoose.model('forder', forderSchema);

export default products;
