import React from 'react'
export const ArrowUp = () => {
  const goToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='upper-arrow-wrapper' onClick={goToTop}>
      <div className='fixed'>
        <a className='nes-pointer' href='#nav-bar-container'>
          <img src='img/upperarrow.png' alt='' width='50vw' height='60vw' />
        </a>
      </div>
    </div>
  )
}

export const CartIcon = () => {
  return (
    <svg>
      <g>
        <g>
          <path
            className='st0'
            d='M53.2,4.7c-1.1,2.7-4.9,10.9-8.5,18.3c-9,18.8-24.7,51.8-32.8,68.9C8.1,99.8,5,107.6,5,109.3
			c0,4.2,3.2,8.9,8,11.6c3.5,1.9,5.2,2.2,10.3,1.9c3.4-0.3,7-0.8,8-1.3c1.6-0.7,1.7,2.3,1.7,54.5c0,33.9-0.4,55.8-1,57
			c-0.5,1-2.5,2.7-4.5,3.9l-3.5,2l0.2,77.3l0.3,77.3l13,0.2c17.7,0.4,17,0.1,17.1,6.8c0.1,3,0.7,6.2,1.4,7c0.6,0.8,0.9,1.8,0.6,2.4
			c-0.8,1.3,3.1,10.1,4.4,10.1c0.6,0,0.8,0.5,0.5,1c-0.8,1.2,4.1,10,5.5,10c0.6,0,1,0.6,1,1.4c0,1.3,9,10,14.1,13.7
			c1.5,1,3.4,1.9,4.3,1.9s1.6,0.4,1.6,0.8c0,1.1,6.6,4.2,8.9,4.2c1,0,3.2,0.7,4.8,1.5c2.7,1.4,15.1,2.2,25.5,1.7
			c4.2-0.2,20.1-6,21.4-7.7c0.6-0.8,1.8-1.5,2.6-1.5c2.6,0,16.8-13.2,16.8-15.6c0-0.6,0.7-1.4,1.5-1.8c2.1-0.8,9.5-16.5,9.5-20.1
			c0-1.7,0.4-3.5,0.9-4c0.5-0.6,1.1-3.3,1.4-6c0.2-2.8,0.9-5.1,1.5-5.1c0.7-0.1,1.8-0.2,2.5-0.3c0.8-0.1,1.1-1.7,0.9-5.7
			c-0.4-5.5-0.4-5.6,1.8-4.4c2.9,1.5,6.7,0.5,8.1-2.2c1.5-2.9-1.2-12.8-6.3-23.1l-3.9-7.8l0.3-24.9l0.3-25h-17.1
			c-13.4,0-17.4,0.3-19,1.5c-2.2,1.6-6.4,2-6.4,0.5c0-0.6-1.2-1-2.6-1c-1.4,0-2.3,0.4-1.9,0.9c0.3,0.5-0.3,1.2-1.2,1.4
			c-1,0.3,1.8,0.5,6.2,0.5l8-0.1l0.3,8.1c0.2,4.5,0,8.2-0.3,8.2s-1.8-0.6-3.3-1.4c-3.8-2-14.4-4.6-21.7-5.5l-6-0.6l0.2-6.2
			c0.2-5.8,0.1-6.1-2.6-7.3c-4.5-1.8-5.1-4.5-5.1-23.6c0-18.6,0.8-22.6,4.9-23.9c1.7-0.5,2.1-1.7,2.3-7.8l0.3-7.2l15.8-0.3l15.7-0.3
			v7.6v7.5h16.5H186v-7.5v-7.4l16-0.3l16-0.3v7.8v7.7l16.3-0.2l16.2-0.3l0.3-7.3l0.3-7.2H267h16v7.4c0,7.1,0.1,7.4,2.6,8
			c4.7,1.2,5.7,5.8,5.2,25.9l-0.4,17.9l-2.7,2.4c-1.6,1.3-3.3,2.4-4,2.4c-0.9,0-1.1,6.5-0.9,26.9l0.3,26.9l-7.7,3.9
			c-7.5,3.7-18.7,13.2-22.7,19.3c-1.5,2.3-1.6-0.1-1.4-37.3l0.2-39.7h-16.7H218v46.5V394h13.6h13.7l-0.6,3.5c-0.6,3.4,1,6.5,3.3,6.5
			c1.4,0,4-3,4-4.8c0.1-2.4,4.3-9.5,6.1-10c1-0.3,0.8,0.2-0.5,1.7c-1.2,1.3-1.4,2.1-0.7,2.1c0.8,0,1,0.8,0.5,2.2
			c-0.3,1.2-0.8,3.4-0.9,4.8c-0.1,1.5-0.5,3.2-0.9,3.8c-0.8,1.4,0,13.2,1.3,18.2c0.8,3.5,5.4,13.1,7.5,15.9
			c5.5,7.2,16.6,14.6,25.8,17.1c5.5,1.5,22.3,0.9,24.1-0.9c0.6-0.6,2.1-1.1,3.3-1.1c1.2,0,3.3-0.9,4.7-2c1.4-1.1,3-2,3.6-2
			s4-2.8,7.4-6.2c11.9-11.9,16-25.2,12.8-42.2c-0.6-3.2-0.8-6.2-0.5-6.7c0.3-0.5,0-0.9-0.6-0.9s-1-0.8-0.9-1.7
			c0.3-3.2-0.1-4.4-1.1-3.8c-0.6,0.3-0.7-0.1-0.4-0.9c0.4-1,0.1-1.6-1-1.6c-0.8,0-2.1-1-2.7-2.3c-1.5-2.8-10.1-11.7-11.4-11.7
			c-1.5-0.1-4.9-2.9-4.3-3.5c0.7-0.8,10.8,5.4,10.5,6.3c-0.1,0.4,0.3,0.8,0.8,1c2.1,0.7,4.5,3.6,4.5,5.4c0,1,0.5,1.7,1.2,1.5
			c1.1-0.2,10.8,17.5,10.8,19.9c0,1.8,2.9,2.5,5.1,1.3c1.7-0.9,1.9-1.7,1.4-5l-0.7-3.9h11c9.1,0,11.1-0.3,11.6-1.6
			c0.3-0.9,0.6-25.5,0.6-54.7l0.1-53.2l5.8-4.3c9.5-6.9,18.4-9,22.4-5.4c1.6,1.4,4.3,1.8,15.4,2c7.4,0.2,14.6,0.1,15.9-0.2
			c4-1,6.4-4.2,6.4-8.4c-0.1-4.4-1.6-6.7-5.4-8.2c-4.1-1.5-25.8-1.3-30.3,0.4c-2.1,0.7-6.9,1.8-10.6,2.4c-3.8,0.6-9.4,2.3-12.5,3.9
			c-3.1,1.5-6,2.9-6.4,3.1c-0.5,0.2-0.8-6.6-0.8-15.2V239l-4-2.5l-4-2.5v-57v-57.1l3,1.6c4.6,2.4,14,2,18.1-0.8
			c4.3-2.9,7.9-8.2,7.9-11.6c0-1.5-3.1-10.1-6.9-19.1c-3.8-9.1-10.5-25.5-15.1-36.5c-4.5-11-11.3-27.4-15-36.5l-6.8-16.5l-13.6-0.3
			c-7.5-0.1-13.6,0-13.6,0.2c0,0.3,4.5,14.2,10.1,30.8c18.4,55.7,24.9,76,24.4,76.9c-0.3,0.4-1.4,0.5-2.5,0.1
			c-1-0.4-8.6-0.5-16.9-0.2l-15.1,0.5l-1.5-5c-0.8-2.8-7-27.2-13.7-54.2L302.5,0h-13.7C281.2,0,275,0.2,275,0.4
			c0,0.2,1.4,8.4,3,18.2c1.7,9.9,3.5,20.6,4,23.9c0.5,3.3,1.6,9.8,2.4,14.5c0.8,4.7,3.3,18.9,5.4,31.7c4.3,25.4,5.4,28.4,11.8,32.1
			c5.3,3.1,15.8,2.8,20.4-0.6l3-2.3v46.8c0,25.7-0.3,48.5-0.6,50.5c-0.7,3.8-0.7,3.8-5.6,3.8c-2.9,0-4.7-0.4-4.3-1
			c0.3-0.5,1.9-0.7,3.4-0.4c2.2,0.5,3.2,0.1,4.5-1.7c3.4-4.9,3.3-4.9-22.6-4.9c-14,0-24.9,0.4-25.8,1c-0.8,0.5-1,1-0.5,1.1
			c0.6,0-0.3,0.5-2,1c-3.5,1-9.1,0.2-12-1.7c-1.5-1.1-7.3-1.4-25.7-1.4H210v4c0,2.5,0.5,4,1.3,4c0.6,0,22.4,0,48.4,0
			c41.5,0,47.3,0.2,48.7,1.6c2.5,2.4,2,4.5-0.7,3.9c-4.5-1.2-46.7-1.1-47.5,0.1c-1,1.6-6.8,2.5-11.4,1.8c-2.7-0.5-3.5-1-2.6-1.5
			c0.7-0.5-8.5-0.9-21.2-1c-26.1-0.1-27.3-0.1-28.2,1.5c-1.4,2.1-0.8-3.4,0.7-7.1c0.8-1.9,1.5-3.9,1.5-4.4c0-0.6-25.2-0.8-60-0.7
			l-60,0.3v-48.9v-49l2.8,2.6c1.5,1.5,4,3.2,5.5,3.7c4,1.6,12.3,1.4,15.6-0.3c4.1-2.2,8.8-8,9.6-11.8c1.1-5.9,2.5-12,7.4-33.3
			c2.7-11.6,5.2-22.6,5.6-24.5c0.4-1.9,2.9-12.7,5.6-23.9c2.7-11.2,5.3-22.1,5.8-24.2l0.9-3.9h-13.7h-13.8l-5,15.7
			C102.5,24.4,97,41.8,93,54.5c-4,12.6-8.1,25.6-9.1,28.7c-1,3.2-1.9,6.2-1.9,6.7s-0.5,2.2-1.2,3.8c-0.6,1.5-2.1,5.5-3.2,8.8
			c-1.5,4.2-2.6,5.9-3.6,5.6c-0.8-0.1-8.6-0.3-17.4-0.2c-14.5,0-15.8-0.1-15.3-1.7c0.9-3.1,12.2-32,26.2-67.2
			C75,20,81.6,3.5,82.1,2.2L83,0H69.1H55.2L53.2,4.7z M44,113.5c0,0.5-0.5,0.3-1-0.5s-1-2-1-2.5c0-0.6,0.5-0.3,1,0.5
			S44,112.9,44,113.5z M74.1,112.7c-1.2,2-1.4,1.4-0.5-1.2c0.4-0.9,0.9-1.4,1.1-1.1C75,110.6,74.7,111.7,74.1,112.7z M331.7,112.2
			c-0.3,0.8-0.6,0.5-0.6-0.6c-0.1-1.1,0.2-1.7,0.5-1.3C331.9,110.6,332,111.5,331.7,112.2z M335.4,116.6c0.9,2.4,0.2,2.6-1.2,0.4
			c-0.7-1.1-0.8-2-0.3-2S335.1,115.7,335.4,116.6z M72,116.3c0,0.2-1.2,1.4-2.7,2.8l-2.6,2.4l1.9-2.7C70.2,116.5,72,115.2,72,116.3z
			 M360,117.5c-0.7,0.8-1.6,1.3-2,1c-0.5-0.3-1.1,0.1-1.3,0.7c-0.3,0.8-0.6,0.5-0.6-0.6c-0.1-1.2,0.4-1.6,1.4-1.2
			c0.8,0.3,1.5,0.1,1.5-0.4c0-0.6,0.5-1,1.1-1C360.9,116,360.9,116.5,360,117.5z M52.2,119.3l-2.3,1.3l2.6,1.2
			c3.6,1.7,9.4,1.5,11.2-0.3c0.8-0.9,1.8-1.3,2.2-0.9c0.3,0.4,0.2,0.8-0.4,1c-0.7,0.3-0.9,16.2-0.7,45.9l0.2,45.4l-3.5,0.7
			c-1.9,0.3-5.5,1.9-8,3.5c-2.5,1.6-4.8,2.9-5,2.9c-0.3,0-0.5-22.4-0.5-49.8v-49.9l2.3-1.1C53.4,117.7,55,117.8,52.2,119.3z
			 M340.1,119.5c0.5-0.4,0.6,0,0.3,0.8c-0.9,2.6,8.8,3.8,12.8,1.6c1.6-0.9,2.3-0.8,2.9,0.2c1,1.5,1.1,93.8,0.2,97.6
			c-0.5,2.1-0.6,2.1-5.1-1.2c-2.6-1.8-6.3-3.7-8.2-4.2l-3.5-0.9l-0.3-45.9c-0.1-28.1-0.6-46.3-1.2-47c-0.5-0.7-0.7-1.5-0.3-1.9
			c0.4-0.4,0.9-0.2,1.1,0.3C339,119.5,339.6,119.8,340.1,119.5z M58.4,120.8c0.6,1-3,0.9-4-0.1c-0.4-0.4,0.2-0.7,1.4-0.7
			C56.9,120,58.1,120.4,58.4,120.8z M351,121c-0.8,0.5-2.4,0.9-3.5,0.9c-1.6-0.1-1.6-0.2,0.5-0.9C351.5,119.9,352.8,119.9,351,121z
			 M203,226c0,0.5-0.2,1-0.4,1c-0.3,0-0.8-0.5-1.1-1c-0.3-0.6-0.1-1,0.4-1C202.5,225,203,225.4,203,226z M87,318.9
			c-11.8,6.7-18.7,11.2-24,16l-6.5,5.9l-0.3-46.7c-0.2-25.6,0-49,0.3-51.8l0.6-5.2l15.2-0.3l15.2-0.3l0.3,40.9
			C87.9,304.3,87.7,318.6,87,318.9z M349,306.1v70l-6.3-6.3c-6.1-6.3-13.5-11-22.3-14.4l-4.4-1.7v-58.3V237l16.3-0.3
			c8.9-0.1,16.3-0.4,16.5-0.5C348.9,236.1,349,267.5,349,306.1z M134,327.1c10.8,2.1,21.4,8.8,18.5,11.7c-0.9,0.9-2.5-2-1.8-3.2
			c0.3-0.5,0.1-0.6-0.6-0.2c-1.6,1-7.2-1.6-6.6-3.1c0.3-1,0-1-1.5-0.1c-1.5,1-2.2,1-3.1,0.1c-0.9-0.9-0.7-1.1,1-0.6
			c1.2,0.3,2.1,0.1,2.1-0.6c0-0.6-0.3-1-0.7-0.9c-0.5,0.1-2-0.4-3.4-0.9c-4.1-1.8-13.9-2.7-13.9-1.4c0,0.6-0.4,1.1-1,1.1
			c-0.5,0-1-0.9-1-1.9C122,325,122.9,325,134,327.1z M135.5,330.2c1.5,0.6,1.1,0.7-1.4,0.3c-1.8-0.3-4.4-0.5-5.7-0.5
			c-1.3,0-2.4-0.4-2.4-0.9C126,328,132.3,328.8,135.5,330.2z M87.7,334c0.1,1.1-0.2,2-0.8,2c-0.5,0-1.8,0.9-3,2.1
			c-2.4,2.4-3.8,1.8-1.8-0.8c1.3-1.6,1.1-1.6-1.6,0.1l-3,1.9l1.9-2.2c1.1-1.2,2.5-2,3.1-1.7c0.7,0.2,1.9-0.4,2.8-1.5
			C87.4,331.5,87.5,331.5,87.7,334z M76.7,342.6c-1.5,1.8-2.3,2.1-2.9,1.2c-0.5-1-1.1-0.9-2.5,0.5c-1.7,1.7-1.7,1.8,0,1.1
			c1.1-0.4,1.7-0.1,1.7,0.9c0,1.5-2.9,3.2-3.8,2.2c-0.3-0.3,0.1-0.5,0.9-0.5c1.2,0,1.2-0.2-0.1-1c-2-1.2-3.3,1-1.7,2.9
			c0.7,0.8,0.7,1.2,0.2,0.9c-0.6-0.4-1.7-0.3-2.5,0.3c-1.3,0.7-1.2,0.9,0.3,0.9s1.5,0.2-0.3,2c-1.2,1.2-1.8,2.5-1.5,3
			c0.4,0.6-0.1,1.3-1,1.6c-1.5,0.6-5.5,8.1-5.5,10.3c0,0.5-0.3,1.2-0.7,1.4c-0.5,0.3-0.6-1.8-0.4-4.6c0.4-5.9,4.7-13.7,6.4-11.5
			c0.6,0.9,0.7,0.8,0.3-0.5c-0.7-2.3,2.8-6.8,8.7-11.3C77.1,338.7,80,338.8,76.7,342.6z M122.3,343.7c-0.7,0.2-1.9,0.2-2.5,0
			c-0.7-0.3-0.2-0.5,1.2-0.5S122.9,343.4,122.3,343.7z M133.1,345.4c7.7,2.3,18.9,10.5,18.9,13.7c0,0.6-0.9,0.8-1.9,0.4
			c-1.3-0.4-2.4,0.1-3.4,1.5c-1.5,2.1-1.6,2.1-4.2,0.4c-1.7-1.1-2.4-2.2-2-3.3c0.4-0.9,0.7-1.8,0.8-2.1c0.1-0.3-0.2-0.5-0.8-0.5
			c-0.5,0-0.9,1.9-0.8,4.2c0.2,2.4-0.2,4.3-0.7,4.3c-0.6,0-1,0.4-1,1c0,0.5,0.7,1,1.5,1s1.5,0.4,1.5,1c0,0.5,0.7,1,1.6,1
			c1.1,0,1.4-0.6,0.9-2c-0.5-1.5-0.2-2,1.2-2c1,0,2.7-0.7,3.7-1.5c1.1-0.8,3.5-1.5,5.3-1.5h3.4l-2,2.1c-2.8,3.1-4.1,15.2-1.9,17.5
			c0.3,0.3,3.1-0.2,6.3-1.1c3.1-0.9,5.9-1.4,6.3-1c0.9,0.8-1.2,2-6.2,3.5c-6.5,1.9-7.1,2.4-7.1,6.4c0,3.9,0.1,3.8-9,4.9
			c-3.3,0.4,11.3,1,18.5,0.8c6.7-0.2,7.1,0.4,5.9,7.9c-1.1,6.8-4.6,16-6,16c-0.5,0-0.9,0.6-0.9,1.4c0,3.7-12.5,15.8-14.4,13.9
			c-0.3-0.4-0.6,0.1-0.6,1.1c0,1.2-2.4,2.9-7.7,5.3c-7.1,3.2-7.8,3.4-8.9,1.8c-1.1-1.5-1.3-1.5-2.4,0.4c-1,1.9-2,2.1-9.6,2.1
			c-6.7,0-8.6-0.3-9-1.5c-0.5-1.1-1-1.3-1.9-0.5c-2.4,2-18.4-5.7-16.9-8.2c0.5-0.8,0.1-0.9-1.1-0.4c-1.4,0.5-3.2-0.8-7.7-5.3
			c-3.2-3.3-5.8-6.9-5.8-8c0-1-0.6-2.1-1.3-2.4c-1.9-0.7-5.4-11-6.2-18l-0.6-5.7h8.3c7.2,0,8.6-0.3,9.8-2c1.8-2.5,3-2.6,3-0.1
			c0,2.6,3.6,3.3,11.7,2.1c7-1,8.3-0.5,8.3,3.2c0,0.9,1.4,2.8,3.1,4.2c5.2,4.4,12.5,3,15.4-2.9c2.2-4.9,1.9-8-1.5-11.8
			c-2.9-3.3-3-3.9-3.1-12.8c-0.1-9.9-1.6-9.2-1.8,0.8c-0.1,5.7-0.8,8.3-2.3,8.3c-1.1,0,0-34.6,1.2-36.8c0.5-1.1,1-1.1,2.3,0.2
			c1.1,1.2,1.4,2.6,1,5.3c-0.5,2.8-0.2,3.9,1.3,5c1.5,1.1,1.6,1.5,0.5,2.2c-1.1,0.7-1.1,0.9,0,1.3c1.2,0.4,1.2,0.7,0.1,2.1
			c-0.9,1-1.1,2.7-0.7,4.7c0.7,3.4,2.5,4.1,2.5,1c0-1.1-0.4-2-1-2c-0.5,0-1-0.8-0.9-1.8c0-1,0.3-1.2,0.6-0.4
			c0.9,2.3,2.3,0.1,2.3-3.9c0-2.8,0.4-3.9,1.5-3.9c0.8,0,1.5,0.7,1.5,1.5c0,2,1.6,1.9,2.4-0.1c1.4-3.7,0.7-4.4-3.6-4.2
			c-4.2,0.3-4.3,0.2-4.6-3c-0.2-2.3,0.2-3.4,1.3-3.8c1.3-0.6,1.4-0.8,0.3-1.5C123.7,343.5,127.8,343.8,133.1,345.4z M105.4,364.8
			c4.7,9.5,8.6,17.7,8.6,18.2c0,0.6-0.5,1-1,1c-1.6,0-18.4-34.6-17.5-36c0.4-0.6,0.8-1,1-0.8C96.7,347.4,100.7,355.3,105.4,364.8z
			 M87.9,354.7c-0.1,0.5-0.1,3.3,0,6.5c0.1,5.3,0.3,5.8,4,8.5c2.1,1.5,6.1,4.8,8.8,7.3c2.7,2.5,6.1,5.4,7.6,6.4
			c2.3,1.8,2.8,3.6,0.8,3.6c-0.6,0-6.5-4.8-14.1-11.3c-5.2-4.6-10.9-7.6-8.2-4.4c0.6,0.7,1.2,3.7,1.4,6.6l0.3,5.4l9.4,2.6
			c5.2,1.5,9.7,3.3,9.9,3.9c0.2,0.7,0.1,1.2-0.3,1.2c-1.4,0-13-3.1-15.8-4.2c-2.3-0.9-3-0.8-4,0.7c-1.2,1.5-1.4,1.5-2.6,0.1
			c-0.8-0.9-2.2-1.6-3.2-1.6c-1.1,0-2.8-0.5-3.9-1.2c-1-0.7-2.3-0.8-2.7-0.4c-0.4,0.5-0.2,1.1,0.5,1.3c0.6,0.3,0.9,0.9,0.6,1.4
			c-0.3,0.6,0,1.6,0.6,2.4c1,1.3,0.8,1.5-1.6,1.6c-2.6,0-2.7,0.1-0.9,0.9c1.5,0.7,1.1,0.9-2,0.7l-4-0.2l0.3-6.5
			c0.2-4.8,1.1-8.2,3.4-13c3.3-6.8,10.9-17.5,13-18.3C87.2,353.9,88,353.9,87.9,354.7z M320.5,365.6c1.9,1.6,1.9,1.6-0.5,0.9
			c-3.1-0.9-5-2.5-2.9-2.5C317.8,364,319.4,364.8,320.5,365.6z M281.5,367c-0.3,0.5-1,1-1.6,1c-0.5,0-0.9-0.5-0.9-1
			c0-0.6,0.7-1,1.6-1C281.4,366,281.8,366.4,281.5,367z M277.4,369.3c-0.3,0.9-1.5,1.9-2.6,2.3c-1.1,0.3-4.2,2.8-6.7,5.5
			c-2.6,2.7-5,4.6-5.4,4.3c-0.8-0.8,8.5-10.2,10.4-10.6c0.8-0.2,2-1.1,2.8-2.1C277.4,366.6,278.3,367,277.4,369.3z M303.4,385
			l-0.6,8.7l2.6,0.5c2.3,0.5,2.8-0.1,6.1-6.7c4.5-9.3,5.5-10.2,9.2-7.8c5.1,3.2,5.7,4.1,4.1,6.1c-1.2,1.5-1.1,1.6,0.4,0.4
			c2.1-1.7,4.1-0.6,3.5,1.8c-0.3,1.3,0,1.7,0.9,1.3c0.9-0.3,1.4,0.2,1.4,1.5c0,1.7-0.8,2.2-3.7,2.5c-2.9,0.3-2.4,0.4,1.9,0.5
			l5.6,0.2l1.7,5.5c3,9.5,1.5,21-3.9,30.3c-1.6,2.8-8.8,10.3-9.3,9.8c-0.3-0.2-1.5,0.7-2.7,1.9c-1.3,1.3-4.2,2.9-6.6,3.6
			c-3.5,1.1-4.3,1-5.1-0.2c-0.7-1.1-0.9-1-0.9,0.5c0,1.7-0.6,1.8-8.3,1.4c-14.3-0.9-23.5-6.7-30.5-19c-5.3-9.2-6.1-21-2.3-31.1
			c1.1-2.9,1.2-2.9,8.1-2.9h4.5l-3.9-0.6c-2.2-0.4-4.1-1.3-4.4-2c-0.5-1.5,9.7-11.6,10.7-10.6c0.3,0.3,0.4,3.1,0.3,6.3
			c-0.4,5.5-0.2,5.8,3.5,9.2c2.1,1.9,5.4,4.6,7.3,6.1s3.1,3,2.7,3.4c-0.4,0.4-2.3-0.8-4.2-2.6c-4.3-4.1-4.7-2.5-0.5,2
			c2,2.1,3,4.3,3,6.2c0,8.4,12.7,9.1,14.5,0.9c0.8-3.6-1-6.6-4.7-8.2c-1.6-0.6-2.8-1.6-2.8-2.1c0-0.6-0.9-2.2-2-3.8
			c-2-2.9-1.8-4,1-4c0.9,0,1.7-0.8,1.7-1.8c-0.1-10.9,0.4-17.2,1.4-16.7C303.8,376,303.9,379.1,303.4,385z M292.6,390.6
			c6.8,14.3,7,17.2,0.2,3.9c-6.6-13-8.3-16.9-6.7-15.9C286.7,379,289.7,384.4,292.6,390.6z M261.2,386.2c-2.4,2.5-3.9,1.9-2.3-0.9
			c0.8-1.4,1.1-1.5,1.1-0.3s0.3,1.1,1.1-0.3c0.6-1,1.4-1.6,1.7-1.2C263.1,383.8,262.4,385,261.2,386.2z M83,389c-1,0.7-1.1,1-0.2,1
			c0.6,0,1.2,0.4,1.2,1c0,0.5-0.7,1-1.5,1c-1.8,0-2-3.6-0.2-4.3C84.1,387,84.6,388,83,389z'
          />
          <path
            className='st0'
            d='M145.1,332.3c0.2,0.1,1.3,0.9,2.4,1.7c1.9,1.4,1.9,1.4,0.6-0.3c-0.7-0.9-1.8-1.7-2.4-1.7
			C145.1,332,144.9,332.1,145.1,332.3z'
          />
          <path
            className='st0'
            d='M60.2,358.1c-1.4,2.2-0.7,2.5,1.4,0.5c0.8-0.8,1.1-1.7,0.6-2C61.8,356.4,60.9,357,60.2,358.1z'
          />
          <path
            className='st0'
            d='M129.9,347.3c0.6,0.8,0.8,1.7,0.4,2c-0.3,0.4,0.2,0.9,1.1,1.3c1,0.4,2.2,0.2,2.8-0.4c1.5-1.5-0.8-4.2-3.4-4.2
			C129.2,346,129,346.3,129.9,347.3z'
          />
          <path
            className='st0'
            d='M141,352c0,0.8,2.4,2,4.1,2c0.6,0,0.8-0.4,0.5-0.9C144.8,351.9,141,351,141,352z'
          />
          <path
            className='st0'
            d='M132.2,370c-0.6,1.1-1.2,2.8-1.2,3.8c0,1.1-0.9,2.7-2,3.7c-1.1,1-2,2.5-2,3.4c0,1.1,1,0.6,3-1.7
			c1.6-1.7,3.2-3.2,3.6-3.2c0.7,0,3.4-2.7,3.4-3.5c0-0.3-1-0.3-2.1,0c-1.9,0.6-2.1,0.4-1.5-1.9C134.2,367.5,133.9,367.3,132.2,370z'
          />
          <path
            className='st0'
            d='M138,369.6c0,1.7,2.2,1.4,2.8-0.4c0.2-0.7-0.3-1.2-1.2-1.2C138.7,368,138,368.7,138,369.6z'
          />
          <path
            className='st0'
            d='M147.9,372.8c0.7,0.5,1.1,1.4,0.7,2c-0.3,0.6-0.1,1.4,0.5,1.7c0.7,0.5,0.9-0.1,0.7-1.6
			c-0.1-1.2-1-2.4-1.8-2.6C146.8,371.9,146.7,372,147.9,372.8z'
          />
          <path
            className='st0'
            d='M141.1,377.5c-1.3,1.4-2,2.9-1.7,3.3c0.4,0.4,1.3-0.1,2-1.1c0.7-0.9,1.8-1.7,2.5-1.7c0.6,0,1.1-0.7,1.1-1.5
			C145,374.4,143.8,374.7,141.1,377.5z'
          />
          <path
            className='st0'
            d='M136,382.4c0,0.2,0.7,0.7,1.6,1c0.8,0.3,1.2,0.2,0.9-0.4C137.9,382,136,381.6,136,382.4z'
          />
          <path
            className='st0'
            d='M138.6,389.9c-0.3,0.4,0.6,0.6,1.9,0.3c1.4-0.2,2.5-0.6,2.5-0.8C143,388.6,139.1,389,138.6,389.9z'
          />
          <path
            className='st0'
            d='M144,391c-2.3,0.7-2.2,0.8,1,0.9c1.9,0,4.2-0.4,5-0.9c1.2-0.8,1-1-1-0.9C147.6,390.2,145.4,390.6,144,391z'
          />
          <path
            className='st0'
            d='M135.8,392.7c0.6,0.2,1.8,0.2,2.5,0c0.6-0.3,0.1-0.5-1.3-0.5S135.1,392.4,135.8,392.7z'
          />
          <path
            className='st0'
            d='M83.7,359.1c0.7,2.7,2.3,3.4,2.3,1.1c0-1.1-0.6-2.2-1.4-2.5C83.6,357.3,83.4,357.7,83.7,359.1z'
          />
          <path
            className='st0'
            d='M81.2,368.2c0.3,0.7,1.2,1.4,2.1,1.6c1.2,0.2,1.5-0.1,1.1-1.2C83.7,366.7,80.6,366.4,81.2,368.2z'
          />
          <path
            className='st0'
            d='M74.7,370.9c-0.3,1.2-0.1,2.1,0.3,2.1c1.5,0,2.3-2.1,1.2-3.2C75.6,369.2,75.1,369.6,74.7,370.9z'
          />
          <path
            className='st0'
            d='M81.5,372.6c-1.2,1.3-1.3,1.9-0.4,2.4c0.6,0.5,0.9,1.5,0.6,2.4c-0.4,1-0.1,1.6,0.8,1.6c0.8,0,1.5-0.6,1.5-1.4
			c0-0.8,0.7-1.7,1.5-2c1.3-0.4,1.4-1,0.5-2.6C84.7,370.6,83.7,370.5,81.5,372.6z'
          />
          <path
            className='st0'
            d='M74.5,375c-0.4,0.6-1.1,0.8-1.6,0.5c-0.5-0.4-0.9-0.1-0.9,0.4c0,0.6,0.9,1.1,2,1.1s2-0.7,2-1.5
			C76,373.8,75.4,373.6,74.5,375z'
          />
          <path
            className='st0'
            d='M317.5,383.8c-1.7,0.9-3.9,3.5-5.1,5.9l-2.1,4.3h3.3c3,0,3.4-0.3,3.4-2.7c0-1.7,0.9-3.5,2.5-4.8
			C322.9,383.7,321.5,381.8,317.5,383.8z'
          />
          <path
            className='st0'
            d='M278.4,384.5c-1,0.8-1.4,1.5-0.8,1.5s1.7-0.7,2.4-1.5C281.6,382.6,280.9,382.6,278.4,384.5z'
          />
          <path
            className='st0'
            d='M318.5,391c-0.3,0.5-0.1,1,0.4,1c0.6,0,1.1-0.5,1.1-1c0-0.6-0.2-1-0.4-1C319.3,390,318.8,390.4,318.5,391z'
          />
          <path
            className='st0'
            d='M164.6,2.7c-0.3,1.6-1.1,6.2-1.7,10.3c-0.6,4.1-1.4,10-1.9,13s-1.8,12-3,20c-2,14.1-6,39.9-8,51
			c-0.5,3-1.1,6.9-1.4,8.7c-0.6,3.6,2,9.7,5.6,13c7.5,7,22.5,5.3,27.8-3.1c2.6-4.4,3.5-10.6,5.1-36.1c0.6-11,2.1-33.4,3.3-49.8
			L192.6,0h-13.7h-13.7L164.6,2.7z'
          />
          <path
            className='st0'
            d='M220.1,54.2c0.2,51.7,0.3,54.5,2.2,58.6c1.1,2.4,3.6,5.5,5.5,7c3.1,2.4,4.4,2.7,11.1,2.7
			c9.2,0,12.9-2.1,16.5-9.3c2.1-4.2,2.2-5.4,1.5-11.7c-0.4-3.9-1.9-19.2-3.3-34c-1.4-14.9-3.3-34.2-4.1-43S248,6.6,248,4.2V0h-14.1
			h-14L220.1,54.2z'
          />
          <path
            className='st0'
            d='M114.2,109.5c0.2,1.6,0.9,3.6,1.6,4.5c4.5,5.5,6.1,6.8,9.1,7.8c5.7,2,9.7,1.5,12.7-1.6c1.5-1.5,2.2-1.9,1.5-1
			c-1.8,2.4,0,2.3,2.8-0.1c1.4-1.2,2-2.5,1.5-3.2c-0.4-0.7-0.3-0.9,0.4-0.5c1.3,0.8,3.2-2.4,3.2-5.6v-2.3h-15.5
			c-9.7,0-15.5,0.4-15.5,1c0,0.5-0.5,0.3-1-0.5C114.2,106.9,114,107.2,114.2,109.5z M131.9,121.6c1,0.9-4.5,0.3-5.9-0.6
			c-1.1-0.7-0.5-0.8,2-0.4C129.9,121,131.7,121.4,131.9,121.6z'
          />
          <path
            className='st0'
            d='M199.8,107.8c-13.6,0.3-13.8,0.3-13.8,2.5c0,3.4,4.9,8.7,9.9,10.8c8.1,3.5,17.6,0.7,22.1-6.6
			c1.2-1.9,1.9-4.3,1.6-5.2C219,107.3,219.8,107.4,199.8,107.8z M192.5,117c0.3,0.5,0.1,1-0.4,1c-0.6,0-1.1-0.5-1.1-1
			c0-0.6,0.2-1,0.4-1C191.7,116,192.2,116.4,192.5,117z M201.7,120.6c-0.3,0.3-1.2,0.4-1.9,0.1c-0.8-0.3-0.5-0.6,0.6-0.6
			C201.5,120,202.1,120.3,201.7,120.6z'
          />
          <path
            className='st0'
            d='M259,110.7c0,3.8,1.3,4.9,3.4,2.7c0.9-0.8,1.6-1.1,1.6-0.6s-0.7,1.5-1.5,2.2c-1.4,1.2-1.4,1.5,0.1,3.2
			c1.1,1.2,2.5,1.6,3.8,1.2c1.6-0.4,1.8-0.3,0.6,0.5c-1.2,0.8-0.9,1.2,1.3,2c3.6,1.4,10.4,1.4,11.2,0c0.4-0.6,1.3-0.8,2.1-0.5
			c1.4,0.5,2.9-0.9,1.7-1.7c-0.5-0.2-0.2-0.2,0.6,0c2.8,0.7,9.8-9.4,7.9-11.3c-0.3-0.2-7.8-0.5-16.7-0.7l-16.1-0.2V110.7z
			 M272,120.4c0,1.1-1.9,1.5-2.5,0.6c-0.3-0.5,0.1-1,0.9-1C271.3,120,272,120.2,272,120.4z M275.7,121.6c-0.3,0.3-1.2,0.4-1.9,0.1
			c-0.8-0.3-0.5-0.6,0.6-0.6C275.5,121,276.1,121.3,275.7,121.6z'
          />
          <path
            className='st0'
            d='M194.8,202.5c-0.8,4.1,0.2,5.5,3.7,5.5c1.8,0,3.6-0.6,3.8-1.3c0.4-0.9,0.8-0.9,1.4-0.1
			c0.9,1.3,21.5,1.7,73.6,1.5L308,208v-3.8v-3.7l-24.7,0.2c-20,0.2-25,0.6-26.9,1.8c-2.6,1.7-9.4,2.1-9.4,0.5c0-0.6-0.8-1-1.8-1
			s-2.1-0.2-2.4-0.5s-11.2-0.7-24.1-0.8C195.8,200.5,195.1,200.6,194.8,202.5z M200.5,206c0.3,0.5,0.1,1-0.4,1c-0.6,0-1.1-0.5-1.1-1
			c0-0.6,0.2-1,0.4-1C199.7,205,200.2,205.4,200.5,206z'
          />
          <path
            className='st0'
            d='M139.6,262.6c-0.3,0.9-0.6,7.5-0.6,14.9c0,9.6,0.4,13.6,1.3,14.3c2.3,1.9,3.6-0.2,3.9-6.3
			c0.3-5.9,0.3-6,3.3-6.1c6.5-0.2,7.5-0.5,10-2.7c4-3.4,3.8-9.2-0.4-12.9c-2.8-2.5-3.9-2.8-10-2.8
			C141.7,261,140.1,261.4,139.6,262.6z M154,268c1.6,1.6,1.8,2.5,1,4c-0.8,1.6-2.1,2-6,2c-5,0-5,0-5-3.3c0-1.9,0.3-3.7,0.7-4
			C146.1,265.2,152.1,266.1,154,268z'
          />
          <path
            className='st0'
            d='M168.7,261.7c-0.4,0.3-0.7,7.3-0.7,15.4c0,11.5,0.3,14.8,1.4,15.2c2.9,1.2,3.6-1.6,3.6-15.3
			c0-9.2-0.4-14-1.2-14.8C170.4,260.8,169.6,260.7,168.7,261.7z'
          />
          <path
            className='st0'
            d='M181.4,262.5c-1.1,2.7,0.7,3.5,8.2,3.5c4.1,0,7.4,0.4,7.4,0.8c0,0.5-3.8,5.7-8.5,11.7
			c-4.7,5.9-8.5,11.1-8.5,11.4c0,2.3,3.1,3.1,12.5,3.1c10.7,0,12.9-0.7,12.3-3.6c-0.3-1.6-1.4-1.9-8.1-2.2c-4.2-0.2-7.7-0.5-7.7-0.8
			c0-0.3,2.6-3.8,5.8-7.7c14.5-17.9,14.5-17.7-1.4-17.7C184.3,261,181.8,261.3,181.4,262.5z'
          />
          <path
            className='st0'
            d='M212.1,262.4c-2.2,2.6-0.2,3.6,7.3,3.6c4,0,7.5,0.3,7.8,0.6c0.4,0.3-3.1,5.4-7.8,11.2
			c-4.6,5.9-8.4,11.4-8.4,12.3c0,2.4,2.1,2.9,12.4,2.9c10.3,0,14.1-1.4,11.7-4.4c-0.9-1.1-3.5-1.6-8.7-1.8l-7.4-0.3l8.6-10.7
			c5.1-6.4,8.4-11.5,8.2-12.5c-0.3-1.6-1.7-1.8-11.4-2.1C215.5,261,213,261.2,212.1,262.4z'
          />
          <path
            className='st0'
            d='M253.4,261.8c-0.7,0.4-3.7,6.9-6.9,14.5c-4.3,10.7-5.4,14.2-4.5,15.2c1.6,1.9,3.7,0.8,4.9-2.6
			c1-2.8,1.2-2.9,7.4-2.9s6.5,0.1,7.7,2.9c1.4,3.5,3.4,4.5,5,2.6c0.8-1-0.2-4.5-4.4-14.6C256.9,263.2,255.3,260.6,253.4,261.8z
			 M256.6,275.5c2,4.9,1.8,5.5-2.1,5.5c-3.8,0-4.1-0.7-2.3-5.7C253.7,271.1,254.7,271.1,256.6,275.5z'
          />
          <path
            className='st0'
            d='M126.2,303.2c-0.1,2.2,0.2,2.3,5.1,1.9c2.9-0.3,4.3-0.6,3.3-0.9c-1.1-0.2-2.6-1-3.4-1.8
			C129.1,300.2,126.5,300.7,126.2,303.2z'
          />
          <path
            className='st0'
            d='M203.6,303.1c0.5,0.9-1.4,1-7.5,0.5c-5.3-0.5-8.1-0.4-8.1,0.3c0,1.6,25.9,1.9,27.2,0.3
			c0.6-0.7,0.8-1.5,0.4-1.9c-0.3-0.3-0.6-0.1-0.6,0.5c0,0.9-0.5,0.9-2,0c-1.7-1.1-2.2-1-2.9,0.1c-0.6,0.9-1.1,1-1.5,0.2
			c-0.4-0.6-1.8-1.1-3.2-1.1C203.8,302,203.1,302.4,203.6,303.1z'
          />
          <path
            className='st0'
            d='M254.4,303.4c-1,0.8-1.7,1.6-1.4,1.8c0.3,0.2,4.8,0.1,10-0.2c6.5-0.3,9.6-0.9,9.8-1.8
			c0.1-0.7-0.9-1.2-2.5-1.2c-2.2,0-2.5,0.2-1.3,1c1,0.7-0.7,1-5.8,1c-4.6,0-7.1-0.4-6.7-1C257.4,301.6,256.7,301.7,254.4,303.4z'
          />
          <path
            className='st0'
            d='M276.3,305.1c1.4,0.8,2.2,0.8,3,0c0.8-0.8,0.3-1.1-1.8-1.1C274.9,304.1,274.7,304.2,276.3,305.1z'
          />
        </g>
      </g>
    </svg>
  )
}

export const PizzaSlice = () => {
  return (
    <>
      <iframe
        title='a pizza slice'
        src='https://giphy.com/embed/2KWdyAGiaMVbi'
        width='480'
        height='449'
        frameBorder='0'
        class='giphy-embed'
        allowFullScreen
      ></iframe>
      <p>
        <a href='https://giphy.com/gifs/pizza-8-bit-gif-2KWdyAGiaMVbi'>
          via GIPHY
        </a>
      </p>
    </>
  )
}

export const Hamster = () => {
  return (
    <img src='/img/Hamster-Pixel-Art.png' alt='' width='80rem' height='70rem' />
  )
}
