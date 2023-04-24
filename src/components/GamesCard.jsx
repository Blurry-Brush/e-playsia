import React from 'react'

function GamesCard(props) {
  return (
        
            <div class="!z-5 mt-4 relative flex flex-col rounded-[20px] max-w-[240px] bg-white bg-clip-border hover:scale-105 transition-all duration-300 shadow-3xl w-full !p-4 3xl:p-![18px]">
                
                    <div class="h-full w-full">
                        <div class="relative w-full h-32">
                            <img src={props.imgUrl} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-center font-bold '> {props.title} </h1>
                            <p className='text-center font-semibold text-gray-700'>140+ players</p>
                        </div>
                    
                    </div>
                
            </div>
       
  )
}

export default GamesCard