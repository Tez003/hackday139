import order from '../model/orderSchema.js';
import user from '../model/userSchema.js';
import mapping from '../model/mappingsSchema.js';
let prods;

export const searchCustomers = async(request, response) => {
    try{
        const products = await order.find({product : request.body.productid, review : "true"});
        const orders = await order.find();
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        console.log(products);
        console.log(orders);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        for (let i=0; i<products.length;i++){
            if(request.body.username){
                let temp = await mapping.find({newcust:request.body.username, oldcust:products[i].username, productid:request.body.productid});
               // console.log(temp);
                //  if(!temp){
                    let newmap = {
                        'newcust': request.body.username,
                        'oldcust': products[i].username,
                        'productid': request.body.productid
                    }

                    console.log(newmap);
                    console.log(i);
                    const newmapping= new mapping(newmap);
                    await newmapping.save();
                //  }
            }
        }


        if(products) {
            return response.status(200).json(`${request.body.username} request sent successfully`);
        }
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}




// export const getAllNotifications = (request, response) => {
//     try {

//         const custmappings = mapping.find({oldcust : request.params.oldcust});
//         console.log(custmappings);
//         response.json(custmappings);
        
//     } catch (error) {
//         response.status(500).json({ message: error.message });
//     }
// }