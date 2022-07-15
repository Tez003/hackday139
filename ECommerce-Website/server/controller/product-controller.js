import Product from '../model/productSchema.js';
// import Product from '../constants/product'
import order from '../model/orderSchema.js';
import user from '../model/userSchema.js';
import { response } from 'express';
import mapping from '../model/mappingsSchema.js';

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find();
       
        response.json(products);
        // console.log(products);       
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        // let orderdata = {
        //     'username' : "123",
        //     'product'  : "product1",
        //     'review'   : "true"
        // }
        
        // const newdata = new order(orderdata);
        // await newdata.save();

        // console.log('Hie')
        // const orders = await order.find();
        // // const users = await user.find();
        // // console.log(users);
        // console.log("###");
        // console.log(orders);
        // console.log("###");
        const products = await Product.findOne({ 'id': request.params.id });
        //console.log(products);
        response.json(products);
    }catch (error) {

    }
}

export const getNotifications = async (request, response) =>{
    try{
        // const mappings = await mapping.find();
        // console.log(mappings);
        // response.json(mappings);
        const mappings = await mapping.find({oldcust : request.params.oldcust});
        console.log(mappings);
        response.json(mappings);
    }
    catch(error){

    }
}