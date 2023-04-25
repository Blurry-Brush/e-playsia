import React from 'react'

function RankingCard() {
  return (
    <div className='h-[55vh] bg-white rounded-xl w-full'>
        <div className='flex flex-col gap-4 justify-center px-10'>
            <h1 className='text-3xl font-bold text-red-600 mt-6 tracking-wide'>Rankings</h1>
            <h1 className='text-xl'>National Rank: <span className='text-red-600'>64</span></h1>
            <h1 className='text-xl'>International Rank: <span className='text-red-600'>4278</span></h1>
            <h1 className='text-xl'>National Best Player: <span className='text-red-600'>Monyet</span></h1>
            <h1 className='text-xl'>International Best Player: <span className='text-red-600'>El Diablo</span></h1>
        </div>
    </div>
   

  )
}

export default RankingCard