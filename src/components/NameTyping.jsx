import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Typing() {
  return (
    <>
        <TypeAnimation className=''
  sequence={[
    // Same substring at the start will only be typed once, initially
    ' ',
    200,
    'V',
    200,
    'VI',
    200,
    'VIN',
    200,
    'VINE',
    200,
    'VINEE',
    200,
    'VINEET',
    200,

    'VINEE',
    200,
    'VINE',
    200,
    'VIN',
    200,
    'VI',
    200,
  ]}
  speed={50}
  style={{ }}
  repeat={Infinity}
/>
    </>
  )
}

export default Typing