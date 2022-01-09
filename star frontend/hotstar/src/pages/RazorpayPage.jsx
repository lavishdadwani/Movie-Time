import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
// import { Button, Container } from 'reactstrap';
import Navbar from '../component/Navbar';
import { BASE_ROUTE } from '../config';
import { razorpay_success } from '../redux/action/subcriptionAction';
import "../styles/razorpay.css"


function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
    });
  }
  
  const RazorpayPage = ({ razorpay_success, match, history,subcription }) => {
    const [OrderId, setOrderId] = useState("");
    const [Success, setSuccess] = useState(false);
    useEffect(() => {
      const data = async () => {
        // eslint-disable-next-line
        const { order } = match.params;
        setOrderId(order);
      };
      data();
    }, [match.params]);
    const userJSON = localStorage.getItem("user");
    if(userJSON === null || undefined) return <Redirect to="/signIn" />
    const { user } = JSON.parse(userJSON);
    const displayRazorpay = async () => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      var options = {
        name: "Movie Time",
        description: "Unlimited Movies",
        image:
          "https://res.cloudinary.com/dnjlgmfzq/image/upload/v1634036323/movieTime_joiilf.png",
        order_id: OrderId,
        handler: async function (response1) {
          console.log(response1)
          const responce = await axios.post(`${BASE_ROUTE}/user/paymentSuccess`,{response1},{headers: {"Authorization": user.token}})
          console.log(responce)
          if (responce.status === 200) {
            setSuccess(true);
            setTimeout(() => {
              history.push("/");
            }, 2000);
          }
        },
        prefill: {
          name: user.name,
          email: user.email
        },
        theme: {
          color: "#111",
        },
      };
      var paymentObj = new window.Razorpay(options);
      paymentObj.open();
    };
    
  if(!user) return <Redirect to="/signIn" />
  if( !match.params?.order) return <Redirect to="/" />
    return (
      <>
        <Navbar />
      <div className="razorpayPage">
          <div className="razorContainer" >
            {Success ?
            <div className="box" >
            <h1>Payment Done Successfuly</h1>
          </div>:
            <div className="box" >
              <h1>Complete Your Payment Hear</h1>
              <p>Your Membership Will Start As Payment Success</p>
              <button onClick={displayRazorpay}>Click To Pay </button>
            </div> 
            
            }
          </div>
      </div>
      </>
    );
  };

const mapStateStore = e=>{
    return{
        user:e.userState.user,
        payment:e.subcriptionState.paymentSuccess,
        subcription:e.subcriptionState.getSubcription
    }
}
export default connect(mapStateStore,{razorpay_success})(RazorpayPage)
