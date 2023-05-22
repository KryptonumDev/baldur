import React from "react"
import styled from "styled-components"

export const RunesB = ({ className }) => (
  <Wrapper xmlns="http://www.w3.org/2000/svg" className={className + " rune"} width="76" height="89" fill="none" viewBox="0 0 76 89">
    <path fill="#9AACB8" d="M1.296 19.377c.762-.976 3.187-1.781 1.99-3.006 3.351-.345 6.418-.661 10.024-1.03.72.909 2.422 1.173 4.967.526.799-.2 2.461.259 2.386.54-.444 1.595 1.382 1.694 2.614 2.114 6.21 2.098 12.422 4.205 18.81 6.13 1.24.372 3.27-.058 4.921-.085.871-.015 1.863-.105 2.527.113 2.121.698 3.18 4.746 1.65 6.562-1.34 1.585-2.827 3.167-4.507 4.642-3.106 2.734-6.834 6.737-7.984 8.8 5.77.912 11.475 1.87 17.274 2.7 2.135.306 4.505.297 6.741.471 1.26.097 2.52.214 3.698.428 1.666.3 1.975 1.178 1.143 2.477-.706 1.093-1.362 2.189-2.067 3.282-.252.39-.795.811-.832 1.157-.292 2.61-3.011 4.54-5.937 6.487-4.558 3.035-7.602 6.618-10.61 10.189-2.363 2.801-4.611 5.627-6.87 8.447-.774.965-1.426 1.952-2.26 3.103-.781-.035-1.595-.07-2.626-.118-2.596 1.594-5.361 3.055-5.743-.187-4.225-.031-6.128-1.5-6.811-4.212-.756-2.997-2.592-5.657-3.817-8.518-1.627-3.794-3.087-7.65-4.662-11.463-.996-2.405-2.136-4.756-3.103-7.171-1.596-3.967-3.326-7.897-4.532-11.993-.603-2.045-.092-4.447-.249-6.65-.241-3.31-.535-6.606-1.024-9.85-.087-.588-1.066-1.153-1.952-1.256-2.177-.239-3.051-1.119-3.16-2.629ZM47.48 57.603c-2.338.747-2.27.684-3.983-.017-1.16-.474-2.438-.907-3.855-1.078-2.589-.318-5.3-.447-7.99-.607-.569-.035-1.255.136-1.962.221-.145 5.312 2.627 9.415 4.923 13.778 4.45-4.256 8.68-8.298 12.865-12.302l.002.005ZM23.654 44.16c3.255-3.709 6.414-7.268 9.458-10.851.346-.402.393-1.197.029-1.375-2.512-1.24-5.046-2.477-7.835-3.475-1.556-.554-3.614-.637-5.995-1.017.13.906.095 1.353.271 1.724 1.083 2.302.862 4.952 1.172 7.46.337 2.655.374 5.487 2.89 7.532l.01.002Z" />
  </Wrapper>
)

const Wrapper = styled.svg`
  @media (max-width: 640px) {
    display: none; 
  }
`