import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        console.log(user);
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

// export const buyItem = async 


export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}
export  const searchCustomers = async (data) => {
    try {
        // console.log("sdfghjklfghnjk1234543212345675432134567654321345675432134567654321345675432");
        // console.log(data);
        let response = await axios.post(`${url}/searchcustomers`, data);
        return response.data;// forgot this and uncommented now
    } catch (error) {
        // console.log("sdfghjklsdcfvgbhnm,sxdcfvbnmsdxcfvgbnjmsdfghjdfghj");
        console.log('error', error);
    }
}

export const getAllNotifications = async(oldcust) => {
    try {
        console.log("*********"+oldcust)
        return await axios.get(`${url}/notifications/${oldcust}`);
    } catch (error) {
        console.log('error', error);
    }


}