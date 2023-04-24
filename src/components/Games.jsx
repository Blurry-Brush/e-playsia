import React from 'react'
import GamesCard from './GamesCard'
function Games() {
  return (
    <main className='py-12 sm:px-32 w-full bg-indigo-600'>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-xl text-white'>Currently Trending Games</h1>
            <button className='uppercase text-white px-2 py-2 bg-indigo-500 rounded-xl'>See more</button>
        </div>
        <div className='flex flex-wrap gap-3 md:gap-5'>

        <GamesCard title="Valorant" imgUrl="https://images.alphacoders.com/128/thumbbig-1282982.webp" />
        <GamesCard title="CSGO" imgUrl="https://images4.alphacoders.com/576/thumbbig-576758.webp"/>
        <GamesCard title="DOTA 2" imgUrl="https://images2.alphacoders.com/507/thumbbig-507389.webp" />
        <GamesCard title="League of Legends" imgUrl="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/LoL-Clash-Dates-2022-720x405.jpg" />
        <GamesCard title="BGMI" imgUrl="https://images7.alphacoders.com/941/thumbbig-941884.webp" />
        </div>
    </main>
  )
}

export default Games