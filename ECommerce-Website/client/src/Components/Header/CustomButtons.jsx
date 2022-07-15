import React, { useState, useContext } from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart, NotificationAdd} from '@mui/icons-material';
// import Modal from '@material-ui/core/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
import { useSelector } from 'react-redux';

import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';
import { getAllNotifications } from '../../service/api';
// import getNotifications from './Notification';
import { useEffect } from 'react';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
let response_not;

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const NotificationButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));
let response;
const getNotifications = (oldcust) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+oldcust);
    response = getAllNotifications(oldcust);
 //1
 response.then((value) => {
    // console.log(value.data);
    response_not = value.data;
    console.log(response_not);
    // expected output: "Success!"
  });
  
  
}
/* const getNotifications = (oldcust1) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+oldcust1);
    let response = getAllNotifications(oldcust1);
    console.log(response);

    const { oldcust } = useParams();

    const { loading, notify } = useSelector(state => state.getNotificationDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(notify)   
            dispatch(getNotificationDetails(oldcust));
    }, [dispatch, notify, oldcust, loading]);

}  */

const CustomButtons = () => {
    
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const [responseData, setResponseData] = useState(null);
  
    const {notify, setNotify} = useState(false);
    const acc = useContext(LoginContext);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    // const getNotifications = () =>{
    //     setOpen1(true);
    // }
    // const navigate = useNavigate();
    // 
     /* useEffect(() => { 
        if(responseData)
     }, [responseData]) */
    //  useEffect(() => {
    //     getAllNotifications("5").then((data) => {
    //         setResponseData(data);
    //         console.log(data);
    //     }).catch(err => console.error("Something broke off"));
    //  }, [responseData])

    const [notis, setNotis] = useState(null);
    


    /*  useEffect(() => {
        if(responseData.data.length > -1) {

        }
     }, [responseData]) */

     
    
    


    return (

        <Wrapper>
           

            {
                account ? <Profile account={account} setAccount={setAccount}  /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
            {
                account ? <NotificationButton onClick={() => getNotifications(acc.account)}>
                    notification</NotificationButton> : <span></span>
                
            }
            {
                account ? <NotificationButton >
                    Orders</NotificationButton> : <span></span>
                
            }
            
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to='/cart'>
                {/* <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge> */}
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
            {/* <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} setNotis={response_not}/>
            <Typography style={{ marginLeft: 10 }}>Cart</Typography> */}
           
               
                
                
            
      {/* {( responseData.data.length > -1) ? <Modal/> : null} */}
            {/* <NotificationDialog open1 = {open} setOpen1 = {setOpen1} /> */}
            {/* <span style={{ marginTop: 3 }}>{setNotis = {setNotis}}</span> */}
        
        </Wrapper>
         
    )
}

export default CustomButtons;