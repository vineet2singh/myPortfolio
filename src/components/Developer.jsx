import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Developer() {
  return (
    <>
     <TypeAnimation className=''
  sequence={[
    // Same substring at the start will only be typed once, initially
    'F',
    400,
    'Full',
    400,
    'Full Stack',
    400,
    'Full Stack Developer ',
    400,
    'Full Stack',
    400,
    'Full',
  ]}
  speed={50}
  style={{ }}
  repeat={Infinity}
/>
    </>
  )
}

export default Developer