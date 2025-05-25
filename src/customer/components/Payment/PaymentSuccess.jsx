import { Alert, AlertTitle } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import { Grid } from "@mui/material"
import OrderTraker from "../Order/OrderTraker"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOrderById } from "../../../State/Order/Action"
import { updatePayment } from "../../../State/Payment/Action"


const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState(null);
    const [referenceId, setReferenceId] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const {order} = useSelector((store) => store);
    useEffect(() => {
        const urlParam=new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"));
        setReferenceId(urlParam.get("razopay_payment_link_status"));
        // setPaymentStatus(urlParam.get("paymentStatus"));
    },[]);

    useEffect(() => {
        if (paymentId && referenceId) {
            const data={orderId,paymentId,referenceId};
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data));
        }
    },[orderId,paymentId,referenceId,dispatch]);
    return (
        <div className="px-2 lg:px-36">
          <div className="flex flex-col justify-center items-center" >
            <Alert
            variant="filled"
            severity="success"
            sx={{mb:6,widows:"fit-content"}}
            >
                <AlertTitle>payment Success</AlertTitle>
                <p>Order placed successfully</p>
            </Alert>
            <OrderTraker activeStep={1} />
            <Grid container className="space-y-5 pt-20">
              {order.order?.orderItems.map((item) => (
                <Grid item className="shadow-md hover:shadow-2xl"  xs={{alignItems:"center",justifyContent:"space-between"}}>
                  <OrderCard />
                  <Grid item xs={6}>
                    <div className="flex items-center">
                      <img
                        className="w-[5rem] h-[5rem] ogject-cover object-top"
                        src="https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?rs=1&pid=ImgDetMain"
                        alt=""
                      />
                      <div className="ml-5 space-y-2">
                        <p className="font-semibold">title men silm mid shirt</p>
                        <p className="opacity-40 text-xs font-semibold">
                          size : 
                        </p>
                        <P>seller: {item.product.brand}</P>
                        <p className="opacity-40 text-xs font-semibold">
                          color : black
                        </p>
                        <p>₹1000</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <AddressCard address={item.address} />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
    )
}

export default PaymentSuccess