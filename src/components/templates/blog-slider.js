import React, { useState } from "react"
import styled from "styled-components"
import Card from "../moleculas/blog-slider-card"

export default function Blog({ posts }) {
  const [transform, setTransform] = useState(1)
  return (
    <Wrapper>
      <div className="container">
        <h2>Blog</h2>
        <p className="annotation">Chcesz dowiedzieć się więcej o projektowaniu i wytwarzaniu noży <strong>wysokiej klasy?</strong> Wskazówki i artykuły dotyczące ostrzy
          i egzotycznych materiałów, których używam, znajdziesz na moim blogu.</p>
        <h2 className="title">Zobacz najnowsze posty!</h2>
        <Grid className={`slide-${transform}`}>
          {posts.map((post, index) => (
            <Card setTransform={setTransform} key={index} data={post} index={index} />
          ))}
        </Grid>
        <Control>
          <button disabled={transform <= 0} aria-label={`poprzedni artykuł`} onClick={() => { setTransform(transform <= 0 ? 0 : transform - 1) }} className="arrow">
            <svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.2419 39.7629C22.2527 38.7248 22.2527 37.0416 21.2419 36.0034L6.24855 20.604L21.2419 5.20456C22.2527 4.16642 22.2527 2.48326 21.2419 1.44511C20.2312 0.406967 18.5924 0.406967 17.5816 1.44511L0.758076 18.7243C-0.252693 19.7624 -0.252693 21.4456 0.758075 22.4837L17.5816 39.7629C18.5924 40.801 20.2312 40.801 21.2419 39.7629Z" fill="#EDE2E2" />
            </svg>
          </button>
          <div className="dots">
            {posts.map((post, index) => (
              <button aria-label={`przeskroluj do ${index + 1} artykuła`} key={index} onClick={() => { setTransform(index) }} className={index === transform ? 'active' : ''} />
            ))}
          </div>
          <button disabled={transform >= 2} aria-label={`następny artykuł`} onClick={() => { setTransform(transform >= 2 ? 2 : transform + 1) }} className="arrow">
            <svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.75808 1.44511C-0.252689 2.48326 -0.252689 4.16642 0.75808 5.20456L15.7514 20.604L0.758077 36.0034C-0.252692 37.0416 -0.252692 38.7248 0.758077 39.7629C1.76884 40.801 3.40763 40.801 4.41839 39.7629L21.2419 22.4837C22.2527 21.4456 22.2527 19.7624 21.2419 18.7243L4.4184 1.44511C3.40763 0.406968 1.76885 0.406968 0.75808 1.44511Z" fill="#EDE2E2" />
            </svg>
          </button>
        </Control>
        <svg className="rune" width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.90241 11.2173C7.32795 9.71435 6.32787 8.85127 5.21766 8.0239C3.2919 6.5894 1.91679 4.6311 0.5 2.75315C1.15482 1.70852 1.22923 1.70257 2.12514 1.9853C3.30976 2.35732 4.32473 2.91088 5.08669 3.95551C5.42303 4.41384 6.04511 4.65788 6.52431 5.01799C7.62857 5.84536 8.7239 6.68464 9.87579 7.5626C11.6289 5.40192 13.001 3.12219 14.2839 0.753177C15.4804 0.470444 16.3972 1.14603 17.3615 1.67578C18.4926 2.30077 18.5997 3.44361 18.8111 4.64002C18.5551 4.91978 18.2902 5.31561 17.933 5.58346C16.5638 6.61023 15.5816 7.92867 14.9357 9.49114C14.5696 10.3751 14.2631 11.2917 14.0339 12.2173C13.9624 12.5119 14.1619 12.9316 14.3464 13.2232C14.8941 14.0804 15.54 14.8631 15.784 15.9018C15.8703 16.2768 16.2275 16.5982 16.4924 16.9196C18.0283 18.7886 19.5968 20.6309 21.1029 22.5267C21.9036 23.5326 22.5286 25.1635 22.6358 25.973C21.7548 27.2409 20.9541 28.3688 20.1802 29.5147C18.9093 31.3956 17.6741 33.3003 16.3942 35.1753C15.4477 36.5592 15.4477 36.7705 16.4061 38.1365C17.2544 39.3478 17.9806 40.6454 18.8736 41.821C19.6593 42.8537 20.585 43.7853 21.4809 44.7347C22.9811 46.3209 23.9335 48.1989 24.4961 50.2881C24.5169 50.3625 24.4514 50.4637 24.3859 50.684C23.1745 50.7316 22.1596 50.1066 21.341 49.3566C19.073 47.2793 16.9002 45.0978 14.7095 42.9341C14.3137 42.5442 14.0309 42.0442 13.6797 41.6067C13.3314 41.1722 12.9356 41.0413 12.507 41.5055C12.126 41.9162 11.6825 42.2912 11.3967 42.7585C10.6943 43.9043 10.0931 45.1097 9.40253 46.2614C9.09596 46.7733 8.72986 47.2793 8.29232 47.681C7.65536 48.2644 6.79517 48.0144 6.72374 47.1662C6.62849 46.0174 6.04213 45.1573 5.44387 44.2734C4.96168 43.5591 4.82477 42.8359 5.16706 42.0264C5.84866 40.4103 6.31894 38.7199 7.4857 37.3092C8.11076 36.5503 8.37864 35.4967 8.85487 34.4759C8.52151 33.9253 8.1554 33.2824 7.74763 32.6634C7.18508 31.8093 6.56301 30.9938 6.02427 30.1277C5.50042 29.2855 5.00633 28.4462 3.99732 28.095C3.87231 28.0504 3.74134 27.9581 3.66991 27.848C2.96747 26.8093 2.21741 25.7945 1.60426 24.7022C1.22327 24.0266 1.00599 23.2945 1.75308 22.5534C2.14002 22.1695 2.27991 21.482 2.41087 20.9047C2.77698 19.2797 3.79492 17.991 4.58963 16.5952C5.64329 14.75 6.81601 12.9732 7.90538 11.2143L7.90241 11.2173ZM11.2807 30.595C12.504 28.2676 13.7809 25.9611 14.9268 23.5921C15.4001 22.613 15.7513 21.5118 14.5726 20.5981C14.1589 20.2767 13.9714 19.6725 13.638 19.2291C13.1261 18.5446 12.8373 17.6577 12.0367 17.2619C10.1585 20.0446 8.32804 22.7558 6.48562 25.4849C8.1435 27.2528 9.69422 28.9045 11.2807 30.595Z" fill="#9AACB8" fillOpacity="0.3" />
          <path d="M61.2209 49.6865C60.1913 48.1948 59.1986 47.0112 58.501 45.6705C57.8003 44.3266 57.9232 42.7609 57.9601 41.2691C58.0031 39.4876 58.0554 37.7062 58.1783 35.9308C58.2582 34.7504 57.9754 33.7856 57.1241 32.9226C54.3581 30.1148 51.632 27.2638 48.9213 24.459C48.1223 24.5885 47.6551 25.0015 47.2402 25.5809C46.4903 26.635 45.6267 27.609 44.8891 28.6692C44.3728 29.409 43.9026 30.2042 43.5614 31.0363C42.8945 32.6606 42.2675 34.2849 42.3044 36.1219C42.3597 38.9205 42.1845 41.7222 42.2552 44.5177C42.3044 46.4503 41.8311 48.1424 40.6755 49.6619C38.4504 48.4074 37.1565 46.364 37.1289 43.9229C37.1012 41.5188 37.1781 39.1116 37.1412 36.7075C37.0951 33.7302 37.1811 30.7281 36.84 27.7816C36.4712 24.5854 36.3636 21.383 36.1669 18.1806C36.0962 17.0372 36.1915 15.8783 36.2438 14.7286C36.3421 12.5156 36.5572 10.3057 36.5449 8.09272C36.5357 6.58554 36.5572 4.99822 35.5 3.67906C36.2161 3.09961 36.926 2.51708 37.6421 1.94072C37.7528 1.85133 37.888 1.78045 38.0232 1.74346C39.2894 1.38901 41.5607 2.75441 41.9356 4.03967C42.0462 4.41878 42.2522 4.83487 42.5441 5.08453C43.2141 5.66397 43.7888 6.27424 44.0409 7.14957C44.1054 7.37766 44.2283 7.59957 44.3636 7.79683C45.7312 9.7725 47.1081 11.742 48.488 13.7084C48.5925 13.8564 48.7585 13.9642 49.0566 14.2416C49.6313 13.2831 50.2705 12.4447 50.667 11.5047C51.2848 10.0468 52.2098 8.86018 53.307 7.75368C54.0661 6.98622 54.7269 6.11397 55.569 5.12459C56.5187 5.15541 57.2317 4.32631 57.7173 3.37392C57.9293 2.96091 58.1629 2.62804 58.4979 2.73592C59.6105 3.09653 60.8736 2.96708 61.8417 3.83625C62.3488 4.29241 62.6685 4.73932 62.5793 5.44514C62.355 7.20814 62.438 8.95264 62.6992 10.7218C62.8559 11.7882 62.5209 12.9225 62.6347 14.0012C62.9358 16.8399 62.4902 19.6755 62.7053 22.508C62.8283 24.1354 62.9512 25.7658 63.0096 27.3963C63.0803 29.372 63.0588 31.3538 63.1295 33.3295C63.1909 35.0617 63.363 36.7907 63.4122 38.526C63.4798 40.8222 63.5321 43.1215 63.4768 45.4177C63.4552 46.3177 63.108 47.19 62.4503 47.9081C62.0507 48.3458 61.7649 48.8882 61.224 49.6865H61.2209ZM57.8156 11.2673C57.7142 11.2304 57.6128 11.1934 57.5083 11.1533C57.0196 11.6711 56.4757 12.1458 56.0546 12.716C55.0896 14.0197 54.2044 15.3851 53.2456 16.695C52.5909 17.5889 52.3696 18.4303 53.0151 19.4597C53.9401 20.9299 54.7515 22.4587 55.9808 23.7255C56.7215 24.4867 57.3239 25.3837 58.2213 26.5117C58.1015 23.7008 57.9632 21.2443 57.8986 18.7878C57.831 16.282 57.8371 13.7731 57.8095 11.2673H57.8156ZM45.6236 19.845C45.0274 18.8526 44.4342 17.9217 43.8995 16.9632C43.3678 16.0108 42.7869 15.1139 41.8157 14.2694C41.699 18.0974 41.9971 21.6851 42.3751 25.5994C43.5553 23.5097 44.5633 21.722 45.6236 19.845Z" fill="#9AACB8" fillOpacity="0.3" />
        </svg>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: clamp(80px, ${200 / 1440 * 100}vw, 200px);
  position: relative;

  .rune{
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%) translateY(100%);

    @media (max-width: 1260px) {
      bottom: -40px;
      right: 10%;
      left: unset;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }

  h2{
    text-align: center;
    margin-bottom: 30px;
  }

  .annotation{
    text-align: center;
    margin: 0 auto;
    max-width: 610px;
  }

  .title{
    text-align: center;
    margin: 100px auto 40px auto;
  }
`

const Control = styled.div`
  margin-top: 32px;
  display: none;
  gap: 92px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1260px) {
    display: flex;
  }

  @media (max-width: 480px) {
    gap: 12px;
    justify-content: space-between;
  }

  .arrow{
    padding: 10px;
    border: none;
    background-color: transparent;
  }

  .dots{
    display: flex;
    align-items: center;
    gap: 16px;

    button{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid var(--primary-500);
      transition: background-color .2s ease-out;

      &.active{
        background-color: var(--primary-500);
      }
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  min-width: fit-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1260px) {
    transform: translateX(0);
    transition: left .2s ease-out, transform .2s ease-out;
    &.slide-0{
      left: 0%;
      transform: translateX(0%);
    }

    &.slide-1{
      left: calc(50vw - clamp(24px,calc(40vw / 7.68),40px));
      transform: translateX(-50%);
    }

    &.slide-2{
      left: calc(100vw - clamp(24px,calc(40vw / 7.68),40px) - clamp(24px,calc(40vw / 7.68),40px));
      transform: translateX(-100%);
    }

    @media (max-width: 480px){
      gap: 12px;
    }
  }
`