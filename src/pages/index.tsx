import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import FavoriteCell from '../components/favorite-cell'
import { articles, favorites, socials } from '../utils/constants'
import SocialButton from '../components/social-button'
import Wrapper from '../components/wrapper'
import ArticleCell from '../components/article-cell'
import ProfileForm from '../components/form'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tyler Shukert</title>
        <meta
          name="description"
          content="I'm Tyler Shukert and I work as a Dev Rel/Software Engineer at Supabase."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <header>
        <div className="h-screen flex justify-center items-center bg-black bg-header bg-cover bg-fixed bg-center px-6">
          <h1 className="text-white px-12 py-6 border-4 border-white text-4xl md:text-8xl">
            Hi, I&apos;m Tyler
          </h1>
        </div>
      </header>
      <main>
        <Wrapper>
          <div className="md:grid ,d:grid-cols-2 md:grid-rows-3">
            <h2 className="text-center pb-4 text-3xl md:text-5xl md:col-start-2 md:col-end-3 md:pb-0">
              About Me
            </h2>
            <div className="text-center  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4">
              <Image
                className="profile-image object-cover mx-auto"
                src="/images/profile.jpg"
                alt="profile"
                layout="fixed"
                width={176}
                height={253}
              />
            </div>
            <p className="pt-4 text-lg md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:pt-0 md:pb-4">
              Tyler Shukert
              <br />
              Mobile/ Web app developer. <br />
              Dev Red/ Softare Enginner at Supabase. <br />
              Enjoy playing team handball. <br />
            </p>
            <div className="flex justify-center md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4">
              {socials.map((social) => {
                return <SocialButton key={social.name} social={social}></SocialButton>
              })}
            </div>
          </div>
        </Wrapper>
        <div className="bg-fun bg-center bg-fixed bg-cover">
          <Wrapper>
            <h2 className="text-white text-center pb-5 text-3xl md:text-5xl">Things I enjoy</h2>
            <div className="flex justify-center items-center flex-wrap">
              {favorites.map((favorite) => {
                return <FavoriteCell key={favorite.title} favorite={favorite}></FavoriteCell>
              })}
            </div>
          </Wrapper>
        </div>

        <Wrapper>
          <h2 className="text-center pb-5 text-3xl md:text-5xl">Articles / Speakers</h2>
          <div className="flex justify-around flex-wrap">
            {articles.map((article) => (
              <ArticleCell key={article.imagePath} article={article}></ArticleCell>
            ))}
          </div>
        </Wrapper>

        <Wrapper>
          <h2 className="text-center pb-5 text-3xl md:text-5xl">Contact me</h2>
          <ProfileForm></ProfileForm>
        </Wrapper>
      </main>
    </div>
  )
}

export default Home
