import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../Shared/UseAxiosSecure";
import UseBookings from "../Shared/UseBookings";
import { AuthC } from "../../../Provider/AuthProviderx";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const CheckOutForm = () => {
    const [error, seterror] = useState('');
    const [trxId, setTrxId] = useState('');

    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthC)
     const axiosSecure = UseAxiosSecure();
     const [booking] = UseBookings();
     const totalPrice = booking.reduce((total, booked) => total + booked.Package, 1)
     const totalPBooked = booking?.map(item => item.Name)
     const totalSBooked = booking?.map(item => item.Specialty)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(
            res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            }
        )
        console.log(totalPrice)
    }, [axiosSecure, totalPrice]);
    console.log(totalPBooked, totalSBooked)

    const submit = async (e) => {
        
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if (error) {
            seterror(error.message)
        }
        else{
            console.log(paymentMethod)
            seterror('')
        }

        //Confirm CardPayment
        const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })
            if (confirmError) {
                seterror(confirmError.message)
            } else {
                if (paymentIntent.status === 'succeeded') {
                    Swal.fire({
                    icon: 'success',
                    title: 'Congrats!',
                    text: 'Your Payment is Successfull',
                    });

                    setTrxId(paymentIntent.id)

// Save payment in database
                    const PayHistory = {
                        TransactionId: paymentIntent.id,
                        email: user?.email,
                        price: totalPrice,
                        date: new Date().toDateString(),
                        BookedTrainerID: booking?.map(item => item._id),
                        status:"pending",
                        BookedTrainers: totalPBooked,
                        BookedClasses: totalSBooked

                    }
                    const res = await axiosSecure.post('/paymenthistory', PayHistory)
                    console.log(res)
                }
            }
    } 

    return (
        <form className="mt-20 mx-auto min-w-80 sm:min-w-[400px] md:min-w-[600px] lg:min-w-[700px]" onSubmit={submit}>
            <Helmet>
                <title>Complete Your Payment</title>
      </Helmet>
            <Card className="bg-teal-100">
            <CardElement className="" options={{
                iconStyle: 'solid',
                style: {
                base: {
                    iconColor: '#c4f0ff',
                    color: '#000',
                    fontSize: '16px',
                },
                invalid: {
                    iconColor: '#FFC7EE',
                    color: '#FFC7EE',
                },
                },
            }}
            />
            </Card>
            <Button className="my-4 px-3" type="submit" disabled={!stripe || !clientSecret ||booking?.length ===0 }>
                Pay <br></br>{totalPrice}$</Button>
            <p className="text-red-600">{error}</p>
            {
                !error && trxId && <p className="text-green-500">Your Payement of {totalPrice}$ has been Successfull and your Transaction Id: {trxId} </p>
            }
        </form>
    );
};

export default CheckOutForm;