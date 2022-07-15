import express from  'express';
import { getProductById, getProducts,getNotifications } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { addItemInCart } from '../controller/cart-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';
// import { getAllNotifications } from '../controller/notification-controller.js';
// import { buyitem } from '../controller/order-controller.js';
import { searchCustomers } from '../controller/action-controller.js';

// import pkg from '../../client/src/service/api.js';
// const { searchCustomers } = pkg;

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);
// router.post('/order', buyitem)

router.get('/products', getProducts);
router.get('/product/:id', getProductById);


// router.get('/notification',getNotifications);
// router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);
router.post('/searchcustomers',searchCustomers);
router.get('/notifications/:oldcust',getNotifications);

export default router;