import React from "react"
import styled from "styled-components"
import HTMLReactParser from "html-react-parser"
import Grid from "../organisms/categories-grid"

export default function Materials({ categories, data: { title, leftTitle, leftText, rightTitle, rightText } }) {
  return (
    <Wrapper>
      <div className="container">
        <svg className="rune-first" width="110" height="231" viewBox="0 0 110 231" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.0179 132.995C36.7456 131.343 38.3619 130.007 39.7134 128.451C46.1506 121.07 51.083 112.725 55.9596 104.298C64.0966 90.2656 72.4984 76.3849 81.0813 62.6144C84.9687 56.3764 92.3812 50.579 98.6233 47.701C106.551 50.2072 106.635 57.8223 108.934 63.8125C109.422 65.0656 107.527 67.6544 106.133 69.0728C104.559 70.6977 102.455 71.9646 100.351 72.9147C93.0221 76.2197 89.915 82.6643 87.0587 89.4669C86.0834 91.7803 84.0212 93.6669 83.0877 95.9941C78.3643 107.768 69.8929 117.628 65.6293 129.677C64.7794 132.073 62.1599 133.808 60.5994 136.011C55.7367 142.855 50.9854 149.782 46.2063 156.694C42.723 161.748 39.2118 166.802 35.826 171.925C34.2655 174.293 33.9032 176.758 34.0426 179.815C34.5581 190.226 36.9268 200.65 34.6138 211.115C34.5163 211.542 34.2098 212.01 34.3212 212.355C36.3973 218.496 33.1091 223.633 30.9494 229.595C28.5668 230.008 25.8359 230.738 23.0771 230.917C14.5081 231.482 9.26922 227.668 7.68083 219.35C6.76123 214.503 6.59403 209.518 6.1203 204.588C5.59084 199.08 4.96384 193.572 4.60157 188.05C4.32291 183.836 4.37864 179.595 4.28111 175.353C4.09998 168.124 4.55977 160.798 3.54264 153.692C2.34438 145.348 2.21898 137.085 2.60911 128.727C2.83205 124.058 1.77312 119.39 3.25005 114.708C3.86311 112.78 3.43118 110.384 3.01318 108.291C2.10752 103.774 1.34119 99.4092 3.96064 95.1128C4.51797 94.2039 4.21144 92.6479 3.98851 91.4361C2.41405 82.6918 2.06572 73.92 2.16325 65.038C2.24685 56.5416 3.16645 48.059 1.14612 39.48C-0.13574 33.9993 0.769923 27.9679 1.03465 22.198C1.24365 17.6813 2.14932 13.261 0.115059 8.82688C-0.372606 7.75279 0.797789 5.71475 1.60592 4.35148C2.44192 2.94689 3.76558 1.83148 5.4097 0C10.1609 1.18426 15.4556 2.17574 20.5412 3.8282C30.4896 7.05049 32.9419 13.3436 31.9108 20.9036C31.5764 23.3685 32.1755 25.9574 32.2591 28.4911C32.3845 31.8787 32.6214 35.28 32.4821 38.6538C32.0919 47.4531 31.6321 56.2387 33.4992 66.4977C35.7703 63.3167 37.5816 61.3062 38.8078 58.979C45.022 47.1364 51.6403 35.5692 59.6937 24.8007C63.9155 19.1548 67.371 12.9443 70.924 6.84393C72.4427 4.22754 73.8639 3.37377 77.1382 3.99344C85.9998 5.65967 91.8657 12.6551 90.4723 21.1652C90.1379 23.1757 88.8282 25.1036 87.6578 26.88C85.54 30.1161 83.2131 33.2144 80.942 36.3403C79.1864 38.7639 77.2218 41.0498 75.6334 43.5698C74.0589 46.0623 72.8189 48.7613 71.4952 51.4052C70.3527 53.6911 69.252 56.0046 68.2209 58.3456C67.4406 60.0944 66.8554 61.9259 66.0473 63.6748C64.8908 66.1948 63.6508 68.6597 62.3968 71.1246C61.9091 72.0748 60.9756 72.8872 60.7666 73.8649C59.5683 79.3043 55.9457 83.2013 52.8246 87.5941C48.157 94.1764 44.5901 101.53 40.3404 108.415C37.2751 113.372 34.3352 118.247 33.1369 124.1C32.496 127.267 32.4403 129.897 35.004 133.05L35.0179 132.995Z" fill="#9AACB8" fill-opacity="0.3" />
        </svg>
        <svg className="rune-second" width="47" height="87" viewBox="0 0 47 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_78_16)">
            <path d="M14.6366 1.37149C15.5224 -0.0669922 16.5559 -0.314474 17.9356 0.355788C19.417 1.07761 20.9698 1.47977 22.4105 2.47485C24.9051 4.19175 25.3989 6.94498 26.6259 9.29089C28.9779 13.7971 31.6812 18.0507 34.7104 22.1135C36.6297 24.6915 38.4319 27.357 40.2544 30.0071C42.2043 32.8429 44.1083 35.7044 46.0327 38.5607C46.7607 39.6434 47.3615 40.752 46.7404 42.4379C45.8087 42.3039 44.8058 42.2832 43.8792 41.9894C42.8152 41.6542 42.0821 41.8038 41.3846 42.7267C39.3839 45.3768 37.2049 47.8928 35.306 50.6151C33.4223 53.3168 31.89 56.235 31.1925 59.5451C30.7445 61.6538 29.2172 62.3963 27.0993 61.7415C23.7393 60.7051 21.1072 58.6376 18.9385 56.0185C19.2338 52.9198 20.4149 50.3573 22.1967 47.9702C24.4418 44.9643 26.4681 41.7883 28.6826 38.7566C30.1132 36.8026 31.89 35.2146 34.3133 34.5134C31.671 30.6568 29.2019 26.8466 26.5291 23.1859C22.3393 17.4423 18.9843 11.2398 16.2199 4.69187C15.7515 3.58851 15.1915 2.52641 14.6366 1.37149Z" fill="#9AACB8" fill-opacity="0.3" />
            <path d="M14.3719 31.126C16.561 31.0074 18.6738 30.863 20.7916 31.621C22.3647 32.1881 23.3728 33.2347 23.9277 34.6835C24.1415 35.2404 23.9582 36.1323 23.6426 36.6892C22.8535 38.0812 21.9015 39.3805 20.98 40.6901C19.5138 42.7731 18.0068 44.8251 16.5457 46.9081C16.3319 47.2123 16.281 47.6299 16.113 47.9753C15.6599 48.9034 15.217 49.8366 14.7028 50.7337C13.8322 52.2599 12.9413 53.7705 12.0097 55.2554C11.414 56.1989 10.7318 57.0858 9.93254 58.2097C10.4111 58.6892 10.9151 59.2821 11.5006 59.772C15.1864 62.8552 18.9843 65.7992 22.5531 69.0164C26.0557 72.177 29.319 75.6108 32.7045 78.9054C33.2136 79.4003 33.7838 79.854 34.3846 80.2407C36.3497 81.4988 37.2304 83.623 38.4726 85.4533C38.6661 85.7369 38.5846 86.2164 38.6712 87.0001C37.6682 86.7732 36.8231 86.7165 36.0951 86.3917C27.7561 82.6691 20.2825 77.7814 14.545 70.4085C12.9311 68.3358 10.7573 66.7221 8.87871 64.8505C6.44012 62.4169 3.99136 59.9885 1.6546 57.457C1.00295 56.7506 0.738217 55.6782 0.315665 54.7656C-0.646532 52.7033 0.778945 51.1359 1.69532 49.7283C4.58191 45.3046 7.76887 41.082 10.7878 36.7407C12.0148 34.9774 13.1042 33.1213 14.3668 31.126H14.3719Z" fill="#9AACB8" fill-opacity="0.3" />
          </g>
          <defs>
            <clipPath id="clip0_78_16">
              <rect width="47" height="87" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h2>{title}</h2>
        <div className="flex">
          <div>
            <h3 className="big-text">{leftTitle}</h3>
            <div>{HTMLReactParser(leftText)}</div>
          </div>
          <div>
            <h3 className="big-text">{rightTitle}</h3>
            <div>{HTMLReactParser(rightText)}</div>
          </div>
        </div>
        <Grid categories={categories} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: clamp(0px, ${270 / 1440 * 100}vw, 270px);

  .rune-first{
    position: absolute;
    bottom: 0;
    left: -12px;

    @media (max-width: 864px) {
      display: none;
    }
  }

  .rune-second{
    position: absolute;
    bottom: 260px;
    right: 80px;

    @media (max-width: 864px) {
      bottom: unset;
      top: 0;
      right: 10px;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }

  .container{
    position: relative;
  }

  @media (max-width: 864px) {
    margin-top: 0;
  }

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 864px) {
      grid-template-columns: 1fr;
    }
  }

  h2{
    margin-bottom: 45px;
    max-width: 620px;
  }

  h3{
    margin-bottom: 15px;
  }
`