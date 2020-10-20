import React from 'react'
import Head from 'next/head'

import NextLogo from '../assets/next.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NextLogo />
      <h1>Next.js bro</h1>
      <p>this is a struct to setup a react next project</p>
    </Container>
  )
}

export default Home
