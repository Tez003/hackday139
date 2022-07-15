import order from '../model/orderSchema.js';
import user from '../model/userSchema.js';
import mapping from '../model/mappingsSchema.js';


// export const getAllNotifications = (request, response) => {
//     try {
//         // const custmappings = mappings.find({'oldcust' : request.body.oldcust});

//         // let newmap = {
//         //     'newcust': "2",
//         //     'oldcust': "5",
//         //     'productid': "product1"
//         // }

//         // console.log(newmap);
//         // const newmapping= new mappings(newmap);
//         // newmapping.save();


//         // console.log(request.params.oldcust);
//         const custmappings = await mapping.find({oldcust : request.params.oldcust});
//         console.log(custmappings);
//         response.json(custmappings);
        
//     } catch (error) {
//         response.status(500).json({ message: error.message });
//     }
// }