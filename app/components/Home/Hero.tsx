import React from 'react'
import HeroImg from '@/public/images/hero.svg'
import Image from 'next/image'

const Hero = () => {
  return ( 
  <div className='pt-[5rem] pb-[3rem]'>
    <div className='w-[100%] h-[6ovh] flex flex-col items-center justify-center'></div>
    <div className='w-[80%] mx-auto grid gridd-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
        {/* content */}
        <div>
            <h1 className='text-[28px] sm:text-[35px] lg:text-[45px] x1:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>
                O <span className='text-blue-500'>Jeito mais Fácil</span><br />Para Conseguir o Seu Primeiro Emprego!
                </h1>
                <p className='text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]'>
                  Todo os meses, mais de 3 milhões de candidatos a emprego recorrem ao website em busca de trabalho, fazendo mais de 140.000 candidaturas todos os dias.
                </p>
                {/* SearchBox */}
                <div className='mt-[1.5rem]'>
                  <input className='w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-1-md bg-gray-200' type="text" placeholder='Procure Emprego' />
                  <button className='px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white'>Pesquisa</button>
                </div>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
            <Image src={HeroImg} alt='hero' width={700} height={400}/>
        </div>
    </div>
  </div>
  );
};

export default Hero