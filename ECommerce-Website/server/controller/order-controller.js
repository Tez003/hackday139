

import Order from "../model/orderSchema.js";

export const buyitem = async (request, response) => {
    try {
        //const exist = await User.findOne({ username: request.body.username });
        // if(exist) {
        //     return response.status(401).json({ message: 'User already exist'});
        // }
        const buyorder = request.body;
        const newOrder = new Order(buyorder);
        await newOrder.save();
        response.status(200).json({ mesage: buyorder });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
