import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const BookingPayment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Pk)
    return (
        <div>
           <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
           </Elements>
        </div>
    );
};

export default BookingPayment;