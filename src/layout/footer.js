import Logo from "@/components/atoms/logo"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

const links = [
  {
    name: 'Sklep',
    url: '/sklep',
    subArr: [
      {
        name: 'Noże',
        url: '/sklep/noze',
      },
      {
        name: 'Drewno',
        url: '/sklep/drewno',
      },
      {
        name: 'Mat. ekskluzywne',
        url: '/sklep/mat-ekskluzywne',
      },
      {
        name: 'Art. metalowe',
        url: '/sklep/art-metalowe',
      },
      {
        name: 'Ostrza',
        url: '/sklep/ostrza',
      }
    ]
  },
  {
    name: 'Koszyk',
    url: '/koszyk'
  },
  {
    name: 'O Baldur',
    url: '/o-nas',
    subArr: [
      {
        name: 'Jak wybieramy materiały',
        url: '/jak-wybieramy-materialy',
      },
    ]
  },
  {
    name: 'Polityka prywatności',
    url: '/polityka-prywatnosci'
  },
  {
    name: 'Regulamin',
    url: '/regulamin'
  },
  {
    name: 'Kontakt',
    url: '/kontakt'
  },
  {
    name: 'Mapa strony',
    url: '/mapa-strony'
  },
]

export default function Footer() {

  const router = useRouter()
debugger
  return (
    <Wrapper>
      <div className="container">
        <div className="inform">
          <Link href="/" aria-label="Strona główna">
            <Logo />
          </Link>
          <p>
            Jarasz się nożami tak samo jak my? Sprawdź, jakie <Link href='/sklep/'>produkty</Link> mamy dla Ciebie.
            Chcesz pogadać? <Link href='/kontakt'>Skontaktuj się</Link> z nami.
          </p>
          <div className="social">
            <a className="instagram" href="#TODO" aria-label='instagram'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.916 8.81505C29.844 7.21777 29.5859 6.1249 29.2198 5.17014C28.8358 4.18535 28.3257 3.34468 27.4915 2.51601C26.6573 1.68735 25.8232 1.16493 24.839 0.786629C23.8848 0.414332 22.7926 0.16213 21.1962 0.0900721C19.5939 0.0180144 19.0838 0 15.015 0C10.9402 0 10.4301 0.0180144 8.83377 0.0900721C7.23745 0.16213 6.14523 0.420336 5.19104 0.786629C4.20084 1.17094 3.36067 1.68135 2.53251 2.51601C1.70434 3.35068 1.18224 4.18535 0.804163 5.17014C0.438089 6.1249 0.180038 7.21777 0.108023 8.81505C0.036009 10.4183 0.0180054 10.9287 0.0180054 15C0.0180054 19.0773 0.036009 19.5877 0.108023 21.1849C0.180038 22.7822 0.438089 23.8751 0.804163 24.8299C1.18824 25.8147 1.69834 26.6553 2.53251 27.484C3.36067 28.3187 4.20084 28.8351 5.18504 29.2134C6.13923 29.5857 7.23145 29.8379 8.82777 29.9099C10.4301 29.982 10.9402 30 15.009 30C19.0838 30 19.5939 29.982 21.1902 29.9099C22.7866 29.8379 23.8788 29.5797 24.833 29.2134C25.8172 28.8291 26.6573 28.3187 27.4855 27.484C28.3137 26.6493 28.8358 25.8147 29.2138 24.8299C29.5859 23.8751 29.838 22.7822 29.91 21.1849C29.982 19.5817 30 19.0713 30 15C30 10.9287 29.988 10.4123 29.916 8.81505ZM27.2214 21.0649C27.1554 22.53 26.9094 23.3287 26.7053 23.8511C26.4353 24.5476 26.1052 25.052 25.5771 25.5805C25.049 26.1089 24.5509 26.4271 23.8488 26.7094C23.3207 26.9135 22.5225 27.1597 21.0642 27.2258C19.4859 27.2978 19.0118 27.3159 15.003 27.3159C10.9942 27.3159 10.5201 27.2978 8.94179 27.2258C7.4775 27.1597 6.67934 26.9135 6.15723 26.7094C5.46109 26.4392 4.95699 26.1089 4.42889 25.5805C3.90078 25.052 3.58272 24.5536 3.30066 23.8511C3.09662 23.3227 2.85057 22.524 2.78456 21.0649C2.71254 19.4856 2.69454 19.0112 2.69454 15C2.69454 10.9888 2.71254 10.5144 2.78456 8.93515C2.85057 7.46998 3.09662 6.67134 3.30066 6.14892C3.57072 5.45236 3.90078 4.94796 4.42889 4.41954C4.95699 3.89111 5.45509 3.57286 6.15723 3.29063C6.68534 3.08647 7.4835 2.84027 8.94179 2.77422C10.5201 2.70216 10.9942 2.68415 15.003 2.68415C19.0118 2.68415 19.4859 2.70216 21.0642 2.77422C22.5285 2.84027 23.3267 3.08647 23.8488 3.29063C24.5449 3.56085 25.049 3.89111 25.5771 4.41954C26.1052 4.94796 26.4233 5.44636 26.7053 6.14892C26.9094 6.67734 27.1554 7.47598 27.2214 8.93515C27.2935 10.5144 27.3115 10.9888 27.3115 15C27.3115 19.0112 27.2875 19.4856 27.2214 21.0649Z" fill="#CCC3C3" />
                <path d="M15.0031 7.29004C10.7422 7.29004 7.29752 10.7428 7.29752 15.0002C7.29752 19.2636 10.7482 22.7104 15.0031 22.7104C19.2579 22.7104 22.7086 19.2516 22.7086 15.0002C22.7086 10.7368 19.2639 7.29004 15.0031 7.29004ZM15.0031 20.0022C12.2425 20.0022 10.0041 17.7624 10.0041 15.0002C10.0041 12.238 12.2425 9.99821 15.0031 9.99821C17.7636 9.99821 20.0021 12.238 20.0021 15.0002C20.0021 17.7624 17.7636 20.0022 15.0031 20.0022Z" fill="#CCC3C3" />
                <path d="M23.0086 8.79087C24.0029 8.79087 24.809 7.98434 24.809 6.98943C24.809 5.99452 24.0029 5.18799 23.0086 5.18799C22.0143 5.18799 21.2083 5.99452 21.2083 6.98943C21.2083 7.98434 22.0143 8.79087 23.0086 8.79087Z" fill="#CCC3C3" />
                <path d="M0 15C0 19.0773 0.0180036 19.5877 0.090018 21.1849C0.162032 22.7822 0.420084 23.8751 0.786157 24.8299C1.17023 25.8147 1.68034 26.6553 2.5145 27.484C3.34267 28.3126 4.18284 28.8351 5.16703 29.2134C6.12122 29.5857 7.21344 29.8379 8.80976 29.9099C10.4121 29.982 10.9222 30 14.991 30C19.0658 30 19.5759 29.982 21.1722 29.9099C22.7686 29.8379 23.8608 29.5797 24.815 29.2134C25.7992 28.8291 26.6393 28.3187 27.4675 27.484C28.2957 26.6553 28.8178 25.8147 29.1958 24.8299C29.5679 23.8751 29.82 22.7822 29.892 21.1849C29.964 19.5817 29.982 19.0713 29.982 15C29.982 10.9227 29.964 10.4123 29.892 8.81505C29.82 7.21777 29.5619 6.1249 29.1958 5.17014C28.8118 4.18535 28.3017 3.34468 27.4675 2.51601C26.6453 1.68135 25.8052 1.16493 24.821 0.786629C23.8668 0.414332 22.7746 0.16213 21.1782 0.0900721C19.5759 0.0180144 19.0658 0 14.997 0C10.9222 0 10.4121 0.0180144 8.81576 0.0900721C7.21944 0.16213 6.12723 0.420336 5.17303 0.786629C4.18884 1.17094 3.34867 1.68135 2.5205 2.51601C1.69234 3.35068 1.17023 4.18535 0.792158 5.17014C0.420084 6.1249 0.162032 7.21777 0.090018 8.81505C0.0180036 10.4123 0 10.9227 0 15ZM2.70654 15C2.70654 10.9948 2.72454 10.5144 2.79656 8.93515C2.86257 7.46998 3.10862 6.67134 3.31266 6.14892C3.58272 5.45236 3.91278 4.94796 4.44089 4.41954C4.96899 3.89111 5.46709 3.57286 6.16923 3.29063C6.69734 3.08647 7.4955 2.84027 8.95379 2.77422C10.5321 2.70216 11.0062 2.68415 15.015 2.68415C19.0238 2.68415 19.4979 2.70216 21.0762 2.77422C22.5405 2.84027 23.3387 3.08647 23.8608 3.29063C24.5569 3.56085 25.061 3.89111 25.5891 4.41954C26.1172 4.94796 26.4353 5.44636 26.7173 6.14892C26.9214 6.67734 27.1674 7.47598 27.2334 8.93515C27.3055 10.5144 27.3235 10.9888 27.3235 15C27.3235 19.0112 27.3055 19.4856 27.2334 21.0649C27.1674 22.53 26.9214 23.3287 26.7173 23.8511C26.4473 24.5476 26.1172 25.052 25.5891 25.5805C25.061 26.1089 24.5629 26.4271 23.8608 26.7094C23.3327 26.9135 22.5345 27.1597 21.0762 27.2258C19.4979 27.2978 19.0238 27.3159 15.015 27.3159C11.0062 27.3159 10.5321 27.2978 8.95379 27.2258C7.4895 27.1597 6.69134 26.9135 6.16923 26.7094C5.47309 26.4392 4.96899 26.1089 4.44089 25.5805C3.91278 25.052 3.59472 24.5536 3.31266 23.8511C3.10862 23.3227 2.86257 22.524 2.79656 21.0649C2.71854 19.4856 2.70654 19.0052 2.70654 15Z" fill="#CCC3C3" />
              </svg>
            </a>
            <a className="facebook" href="#TODO" aria-label='facebook'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="6" fill="#CCC3C3" />
                <path d="M20.8389 19.3359L21.5039 15H17.3438V12.1875C17.3438 11.001 17.9238 9.84375 19.7871 9.84375H21.6797V6.15234C21.6797 6.15234 19.9629 5.85938 18.3223 5.85938C14.8945 5.85938 12.6562 7.93652 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8184C13.4209 29.9385 14.2031 30 15 30C15.7969 30 16.5791 29.9385 17.3438 29.8184V19.3359H20.8389Z" fill="#141414" />
              </svg>
            </a>
          </div>
        </div>
        <ul className="link">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <li className="main" key={index}>
                <Link className={router.asPath.startsWith(link.url) ? "active" : ""} href={link.url}>{link.name}</Link>
              </li>
              {link.subArr?.map((sub, index) => (
                <li className="sub" key={index}>
                  <Link className={router.asPath.startsWith(sub.url) ? "active" : ""} href={sub.url}>{sub.name}</Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
        <div className="copy">
          <p>Copyright © {(() => {
            const date = new Date()
            return date.getFullYear()
          })()} — <a href="https://baldur.shop"><strong>Baldur.shop</strong></a></p>
          <h2>Realizacja: <a rel="noopener noreferer" target="__blank" href="https://kryptonum.eu"><strong>Kryptonum</strong></a></h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: #141414;
  margin-top: clamp(80px, ${220 / 1440 * 100}vw, 220px);
  padding: 40px 0;

  font-family: var(--lato);

  .container{
    display: grid;
    grid-template-columns: 413px 1fr;
    grid-template-rows: 1fr auto;
    gap: clamp(50px, ${120 / 1440 * 100}vw, 120px);
    grid-template-areas: 
    'inform link'
    'copy link';

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 450px;
    }
    @media (max-width: 840px) {
      grid-template-columns: 1fr;
      grid-template-areas: 
      'inform'
      'link'
      'copy';
    }


    .inform {
      grid-area: inform;
      max-width: 413px;

      p{
        margin-top: 36px;
        font-size: 16rem;
        line-height: 180%;
        color: #CCC3C3;

        a{
          color: #CCC3C3;
          text-decoration: underline;
        }
      }

      .social{
        display: flex;
        gap: 24px;
        align-items: center;
        margin-top: 28px;

        rect,path{
          transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .facebook{
          rect{
            color: #141414;
            fill: currentColor
          }
          &:hover{
            svg{
              rect{
                color: #FFF;
              }
            }
          }
        }

        .instagram{
          path{
            color: #141414;
            fill: currentColor
          }
          &:hover{
            svg{
              path{
                color: #FFF;
              }
            }
          }
        }
      }
    }
    
    .link {
      grid-area: link;
      columns: 2;

      @media (max-width: 480px) {
        columns: 1;
      }

      li{
        list-style: none;

        a{
          color: #CCC3C3;
          font-size: 20rem;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-decoration-thickness: 2px;
          transition: text-decoration-color 0.2s ease-out;
          &:hover, &.active{
            text-decoration-color: currentColor;
          }
        }

        &.main{
          font-weight: 500;
          font-family: var(--text);
          margin-top: 20px;
        }

        &.sub{
          margin-top: 20px;
        }

        &:first-child{
          margin-top: 0;
        }
      }
    }

    .copy {
      grid-area: copy;
      height: fit-content;
      
      *{
        color: #CCC3C3;
        font-size: 20rem;
        font-family: var(--lato);
        @media (max-width: 360px) {
          font-size: clamp(0rem, ${20 / 360 * 100}vw, 20rem);
        }
      }

      strong{
        color: #CCC3C3;
        font-size: 20rem;
        text-decoration: underline;
        text-decoration-color: transparent;
        text-decoration-thickness: 2px;
        transition: text-decoration-color 0.2s ease-out;
        font-family: var(--text);
        &:hover{
          text-decoration-color: currentColor;
        }
      }
    }
  }
`