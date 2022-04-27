import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { PizzaSlice } from '../icons'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <PizzaSlice />
        <article>
          <div className='title'>
            <h2>the story</h2>
            <div className='underline'></div>
          </div>
          <p>
            I thought to remake the classic pizza shop concept in a more modern
            or more classic way.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-yellow-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
