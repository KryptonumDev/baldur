import React from "react"
import styled from "styled-components"
import Grid from "../organisms/blog-grid"
import Image from "next/image"
import Pagination from "../organisms/pagination"

export default function Archive({ currPage, urlBasis, background, category, posts }) {
  return (
    <Wrapper>
      <Background width={background.mediaDetails.width}>
        <Image
          loading="eager"
          className="image"
          src={background.mediaItemUrl}
          alt={background.altText}
          width={background.mediaDetails.width}
          height={background.mediaDetails.height}
        />
      </Background>
      <div className="container">
        <h1>{category.name} ({category.count || '0'})</h1>
        <Grid posts={posts.nodes} />
        <Pagination currentPage={Number(currPage)} itemCount={posts.pageInfo.offsetPagination.total} urlBasis={urlBasis} />
        <svg xmlns="http://www.w3.org/2000/svg" className="rune" width="63" height="51" fill="none" viewBox="0 0 63 51"><path fill="#9AACB8" d="M7.402 11.197c-.574-1.503-1.574-2.366-2.684-3.193C2.792 6.569 1.417 4.61 0 2.734c.655-1.046.73-1.051 1.625-.769 1.185.372 2.2.926 2.962 1.97.336.459.958.703 1.437 1.063 1.105.827 2.2 1.667 3.352 2.545 1.753-2.161 3.125-4.44 4.408-6.81 1.196-.283 2.113.393 3.077.923 1.132.625 1.239 1.768 1.45 2.964-.256.28-.52.676-.878.943-1.37 1.027-2.351 2.346-2.997 3.908-.366.884-.673 1.8-.902 2.726-.072.295.128.715.312 1.006.548.857 1.194 1.64 1.438 2.679.086.375.443.696.708 1.018 1.536 1.869 3.105 3.71 4.61 5.607.802 1.006 1.427 2.636 1.534 3.446-.881 1.268-1.682 2.396-2.456 3.542-1.27 1.88-2.506 3.785-3.786 5.66-.946 1.384-.946 1.596.012 2.962.848 1.21 1.575 2.508 2.468 3.684.785 1.033 1.711 1.964 2.607 2.914 1.5 1.586 2.452 3.464 3.015 5.553.02.075-.045.176-.11.396-1.212.048-2.226-.577-3.045-1.327-2.268-2.078-4.44-4.26-6.632-6.423-.395-.39-.678-.89-1.03-1.327-.348-.435-.743-.566-1.172-.102-.381.411-.825.786-1.11 1.254-.703 1.145-1.304 2.35-1.994 3.502-.307.512-.673 1.018-1.11 1.42-.638.583-1.498.333-1.57-.515-.095-1.149-.68-2.009-1.28-2.893-.481-.714-.618-1.437-.276-2.247C5.35 40.39 5.82 38.7 6.986 37.29c.625-.759.893-1.812 1.369-2.833-.333-.55-.7-1.194-1.107-1.813-.563-.854-1.185-1.67-1.724-2.535-.524-.843-1.018-1.682-2.027-2.033a.679.679 0 0 1-.327-.247c-.703-1.039-1.453-2.054-2.066-3.146-.38-.675-.598-1.407.15-2.149.386-.384.526-1.071.657-1.648.366-1.625 1.384-2.914 2.179-4.31 1.053-1.845 2.226-3.622 3.315-5.38l-.003.002Zm3.379 19.378c1.223-2.327 2.5-4.634 3.646-7.003.473-.98.824-2.08-.354-2.994-.414-.321-.602-.925-.935-1.369-.512-.684-.8-1.571-1.601-1.967l-5.551 8.223 4.795 5.11ZM60.72 49.666c-1.029-1.491-2.021-2.675-2.719-4.016-.7-1.343-.578-2.91-.54-4.4.042-1.782.094-3.564.217-5.34.08-1.18-.203-2.144-1.054-3.007-2.766-2.808-5.492-5.66-8.203-8.464-.799.13-1.266.542-1.68 1.122-.75 1.054-1.614 2.028-2.352 3.088-.516.74-.986 1.535-1.328 2.367-.666 1.625-1.294 3.249-1.257 5.086.056 2.799-.12 5.6-.049 8.396.05 1.932-.424 3.624-1.58 5.144-2.225-1.255-3.518-3.298-3.546-5.74-.028-2.403.05-4.81.012-7.215-.046-2.977.04-5.979-.301-8.925-.369-3.197-.476-6.399-.673-9.601-.07-1.144.024-2.303.077-3.452.098-2.213.313-4.423.3-6.636-.008-1.507.013-3.095-1.044-4.414.716-.58 1.426-1.162 2.142-1.738.11-.09.246-.16.381-.198 1.266-.354 3.538 1.011 3.913 2.297.11.379.316.795.608 1.045.67.579 1.245 1.19 1.497 2.065.064.228.187.45.323.647 1.367 1.975 2.744 3.945 4.124 5.911.105.148.27.256.569.534.574-.959 1.213-1.797 1.61-2.737.618-1.458 1.543-2.645 2.64-3.751.76-.768 1.42-1.64 2.262-2.63.95.031 1.663-.798 2.148-1.75.212-.413.446-.746.78-.638 1.114.36 2.377.231 3.345 1.1.507.456.827.903.737 1.61-.224 1.762-.141 3.507.12 5.276.157 1.066-.178 2.2-.064 3.28.3 2.838-.145 5.674.07 8.506.123 1.627.246 3.258.305 4.888.07 1.976.049 3.958.12 5.933.06 1.733.233 3.462.282 5.197.068 2.296.12 4.596.065 6.892-.022.9-.369 1.772-1.027 2.49-.4.438-.685.98-1.226 1.779h-.003Zm-3.404-38.419c-.102-.037-.203-.074-.308-.114-.488.518-1.032.993-1.453 1.563-.965 1.304-1.85 2.67-2.81 3.979-.654.894-.875 1.735-.23 2.765.925 1.47 1.736 2.999 2.966 4.265.74.762 1.343 1.659 2.24 2.787-.12-2.811-.258-5.268-.322-7.724-.068-2.506-.062-5.015-.09-7.52h.007Zm-12.192 8.578c-.597-.992-1.19-1.923-1.724-2.882-.532-.952-1.113-1.85-2.084-2.694-.117 3.828.181 7.416.56 11.33 1.18-2.09 2.187-3.877 3.248-5.754Z"/></svg>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 300px;
  position: relative;
  overflow: hidden;

  padding-bottom: 100px;
  margin-bottom: -100px;

  @media (max-width: 768px){
    padding-top: 200px;
    padding-bottom: 80px;
    margin-bottom: -80px;
  }

  @media (max-width: 640px) {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .rune {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 640px) {
      display: none;
    }
  }

  h1{
    text-transform: capitalize;
    font-size: clamp(32rem, ${64 / 768 * 100}vw, 64rem);

    @media (max-width: 360px) {
      font-size: clamp(0rem, ${32 / 360 * 100}vw, 32rem);
    }
  }

  .flex{
    margin-top: 15px;
    display: flex;
    gap: 75px;

    @media (max-width: 480px){
      gap: 24px;
      flex-wrap: wrap;
    }

    a{
      font-weight: 500;
      font-size: clamp(20rem, ${36 / 768 * 100}vw, 36rem);
      line-height: 149%;
      letter-spacing: 0.02em;
      text-decoration-line: underline;
      color: #CCC4C4;

      @media (max-width: 360px) {
        font-size: clamp(0rem, ${20 / 360 * 100}vw, 20rem);
      }
    }

    .line{
      display: block;
      width: 3px;
      background-color: #EEEBEB;
      margin: 5px 0;

      &:last-child{
        display: none;
      }

      @media (max-width: 640px) {
        display: none;
      }
    }
  }
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
  max-width: ${props => props.width}px;

  @media (max-width: 480px) {
    bottom: unset;
    height: 300px;
    min-width: 120vw;
  }

  .image{
    position: relative;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-height: 100%;
    width: 150vw;
    max-width: inherit;
    height: auto;

    @media (max-width: 768px) {
      height: fit-content;
    }
    @media (max-width: 480px) {
      height: 100%;
      width: auto;
    }
  }

  &::after{
    content: '';
    inset: -2px;
    position: absolute;
    background: radial-gradient(50% 50% at 50% 50%, rgba(10, 10, 10, 0.57) 0%, #0A0A0A 89.06%);

    @media (max-width: 480px){
      background: radial-gradient(50% 50% at 50% 50%, rgba(10, 10, 10, 0.17) 0%, #0A0A0A 89.06%);;
    }
  }
`