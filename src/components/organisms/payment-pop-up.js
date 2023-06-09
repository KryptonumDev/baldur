import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"
import styled from "styled-components"
import { toast } from "react-toastify"
import ButtonFilled from "../atoms/button-filled"

export default function PopUp({ setIsPaymentPopUpOpen, intent, orderNumber, clientSecret }) {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        return_url: `https://baldur.shop/api/complete-payment?id=${orderNumber}`
      }
    })

    if (error) {
      toast.error(error.message)
    }

    if (paymentIntent?.status === 'succeeded' && typeof window !== 'undefined') {
      window.location.href = `https://baldur.shop/api/complete-payment?id=${orderNumber}&redirect_status=${paymentIntent.status}&payment_intent=${paymentIntent.id}&payment_intent_client_secret=${clientSecret}`
    }

    if (paymentIntent?.last_payment_error) {
      toast.error('Wystąpił błąd podczas płatności. Spróbuj ponownie.')
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Overlay onClick={() => { setIsPaymentPopUpOpen(false) }} />
      <Content>
        <PaymentElement />
        <ButtonFilled mode='secondary' as='button' disabled={!stripe} ><span>PŁACĘ</span></ButtonFilled>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.form`
    position: fixed;
    z-index: 200;
    inset: 0;
`

const Content = styled.div`
    position: fixed;
    z-index: 201;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    max-width: 1080px;
    width: 80vw;
    max-height: 90vh;
    overflow-y: auto;
    padding: clamp(32px, ${32 / 768 * 100}vw, 64px);
    background: var(--primary-500);
    border: 6px solid var(--dark-500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;

    @media (max-width: 480px) {
        width: 95vw;
        max-height: 95vh;
    }


    button{
        margin: 32px auto 0 auto;
    }
`

const Overlay = styled.div`
    position: fixed;
    z-index: 200;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
`