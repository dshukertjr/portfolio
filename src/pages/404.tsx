import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const System404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 | Tyler Shukert</title>
        <meta name="description" content="404 of Tyler Shukert's profile page. " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <header>
        <div className="text-white h-screen flex justify-center items-center bg-header bg-cover bg-fixed bg-center px-6">
          <div className="px-12 py-6 border-4 border-white">
            <h1 className="text-center text-4xl md:text-8xl">404</h1>
            <div>I am so sorry, but we could not find what you were looking for.</div>
            <Link href="/">
              <a className="py-2 px-4  mt-4 bg-white rounded-sm text-black inline-block">
                Go back to Home →
              </a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default System404
