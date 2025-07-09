import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = () => {

      const stripe = useStripe();
  const elements = useElements();
  const {parcelId}=useParams()
  const axiosAPI=useAxiosSecure()
  const {user}=useAuth()
  const navigate=useNavigate();

  const [error, setError] = useState(null);

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosAPI.get(`/parcel/${parcelId}`);
            return res.data;
        }
    })
    if(isPending)
    {
        return '...Loading';
    }
    console.log(parcelInfo)
    const amount = parcelInfo.cost;
    const amountInCents = amount * 100;
    console.log(amountInCents);
  
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);

          // step-2: create payment intent
            const res = await axiosAPI.post('/create-payment-intent', {
                amountInCents,
                parcelId
            })
            const clientSecret = res.data.clientSecret;

              // step-3: confirm payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            });

            if (result.error) {
                setError(result.error.message);
            } else {
                setError('');
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Payment succeeded!');
                    const transactionId = result.paymentIntent.id;
                    // step-4 mark parcel paid also create payment history
                    const paymentData = {
                        parcelId,
                        email: user.email,
                        amount,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }

                    const paymentRes = await axiosAPI.post('/payments', paymentData);
                    if (paymentRes.data.insertedId) {

                        // ✅ Show SweetAlert with transaction ID
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Parcels',
                        });

                        // ✅ Redirect to /myParcels
                        navigate('/dashboard/myParcels');

                    }
                }
            }
        }



  };
    return (
                     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
                <CardElement className="p-2 border rounded">
                </CardElement>
                <button
                    type='submit'
                    className="btn btn-primary text-black w-full"
                    disabled={!stripe}
                >Pay ${amount}
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </form>
    );
};

export default CheckoutForm;
