import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import ButtonOutlined from "../atoms/button-outlined"
import Link from "next/link"
import axios from "axios"
import { toast } from "react-toastify"

export default function Form({ subject }) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    let url = `https://baldur.headlesshub.com/wp-json/contact-form-7/v1/contact-forms/14/feedback`

    let body = new FormData()

    body.append('mail', data.mail)
    body.append('fullname', data.name)
    body.append('theme', data.theme)
    body.append('description', data.description)
    body.append('subject', subject)

    axios.post(url, body)
      .then((res) => {
        if (res.status === 200) {
          toast('Wiadomość została wysłana pomyślnie.')
          reset()
        } else {
          toast('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.')
        }
      })
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <label className="anim">
        <span className="label-text">Imię</span>
        <input {...register("name", { required: true, minLength: 3 })} />
        {errors.name && <span className="error">To pole jest obowiązkowe do uzupełnienia</span>}
      </label>
      <label className="anim">
        <span className="label-text">E-mail</span>
        <input {...register("mail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
        {errors.mail && <span className="error">To pole jest obowiązkowe do uzupełnienia</span>}
      </label>
      <label className="anim">
        <span className="label-text">Temat</span>
        <input {...register("theme", { required: true, minLength: 3 })} />
        {errors.theme && <span className="error">To pole jest obowiązkowe do uzupełnienia</span>}
      </label>
      <label className="anim">
        <span className="label-text">Opis</span>
        <textarea rows='6' {...register("description")} />
      </label>
      <label className="check anim">
        <input type='checkbox' {...register("check", { required: true })} />
        <span className="box">
          <svg className="left" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.58417 9.83269e-06C3.7807 -0.0127349 14.0398 12.3682 14.0398 12.3682L35 34.9994C35 34.9994 24.9609 35.376 9.90287 16.9355L11.8313 14.8534C11.8313 14.8534 8.77502 13.4608 6.16089 9.8853C3.54676 6.30982 3.64012 6.48593 2.48974 5.42001C1.33935 4.35408 0.282323 3.78984 0.0269199 3.21169C-0.228483 2.6347 1.38764 0.0127546 2.58417 9.83269e-06V9.83269e-06Z" fill="#C38D8D" />
          </svg>
          <svg className="right" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.4158 9.83269e-06C31.2193 -0.0127349 20.9602 12.3682 20.9602 12.3682L0 34.9994C0 34.9994 10.0391 35.376 25.0971 16.9355L23.1687 14.8534C23.1687 14.8534 26.225 13.4608 28.8391 9.8853C31.4532 6.30982 31.3599 6.48593 32.5103 5.42001C33.6607 4.35408 34.7177 3.78984 34.9731 3.21169C35.2285 2.6347 33.6124 0.0127546 32.4158 9.83269e-06V9.83269e-06Z" fill="#C38D8D" />
          </svg>
        </span>
        <p>Przeczytałem/am <Link target="__blank" rel="noreferer noopener" href='/regulamin/'>regulamin</Link> i rozumiem <Link target="__blank" rel="noreferer noopener" href='/polityka-prywatnosci/'>politykę prywatności</Link> i cookies</p>
        {errors.check && <span className="error">To pole jest obowiązkowe do uzupełnienia</span>}
      </label>

      <ButtonOutlined className='button anim' as='button'>
        <span>
          WYŚLIJ
        </span>
      </ButtonOutlined>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  grid-gap: 30px;
  margin-top: 40px;

  .button{
    margin: 10px auto 0 auto;
    max-width: 442px;
    width: 100%;
  }

  label{
    display: grid;
    gap: 10px;
    position: relative;

    .label-text{
      font-size: clamp(20rem, ${26 / 768 * 100}vw, 26rem);

      @media (max-width: 360px) {
        font-size: clamp(0rem, ${20 / 360 * 100}vw, 20rem);
      }
    }

    input, textarea{
      border: none;
      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 20px;
      line-height: 24px;
      color: var(--dark-500);

      @media (max-width: 360px) {
        padding: clamp(0rem, ${20 / 360 * 100}vw, 20px);
      }

      &:focus-visible{
        outline-offset: 2px;
      }
    }
    

    .error{
      position: absolute;
      left: 0;
      bottom: -3px;
      transform: translateY(100%);
    }

    &.check{
      grid-template-columns: 40px auto;
      gap: 8px;
      cursor: pointer;

      input{
        height: 0;
        width: 0;
        opacity: 0;
        position: absolute;
      }

      input ~ .box{
        margin-top: 4px;
        width: 40px;
        height: 40px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: relative;
        overflow: hidden;

        .left{
          position: absolute;
          left: 2px;
          top: 2px;
          opacity: 0;
          transform: translate(-50%, -50%);
          transition: all .2s ease-out .2s;
        }

        .right{
          position: absolute;
          right: 2px;
          top: 2px;
          opacity: 0;
          transform: translate(50%, -50%);
          transition: all .2s ease-out;
        }
      }

      input:focus-visible ~ .box{
        outline: 2px solid var(--primary-500) ;
        outline-offset: 2px; 
      }

      input:checked ~ .box{
        .left{
          transform: unset;
          opacity: 1;
        }
        .right{
          transform: unset;
          opacity: 1;
        }
      }

      p{
        font-size: clamp(16rem, ${20 / 1440 * 100}vw, 20rem);
        line-height: 200%;

        @media (max-width: 864px) {
          font-size: clamp(16rem, ${20 / 768 * 100}vw, 20rem);
        }

        @media (max-width: 360px) {
          font-size: clamp(0rem, ${16 / 360 * 100}vw, 16rem);
        }

        a{
          color: var(--secondary-500);
          text-decoration: underline;
          text-decoration-color: transparent;
          transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

          &:hover{
            text-decoration-color: var(--secondary-500);
          }
        }
      }
    }
  }
`