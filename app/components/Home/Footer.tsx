import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4 gap-[3rem] 
        items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            {/* 1st part of footer */}
            <div>
                <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>
                    Jobify
                    </h1>
                    <p className='text-[14px] text-white text-opacity-70'>Todos os direitos reservados | @Jobify</p>
                    {/* socialicons */}
                    <div className='mt-[1.5rem] flex items-center space-x-3'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex 
                        items-center justify-center flex-col cursor-pointer'>
                            <FaFacebookF className='text-white'/>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex 
                        items-center justify-center flex-col cursor-pointer'>
                            <FaTwitter className='text-white'/>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex 
                        items-center justify-center flex-col cursor-pointer'>
                            <FaYoutube className='text-white'/>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex 
                        items-center justify-center flex-col cursor-pointer'>
                            <FaInstagram className='text-white'/>
                        </div>
                    </div>
            </div>
            {/* 2nd parrt of footer */}
            <div>
                <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>
                    Sobre NÓS
                </h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Trabalho</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Privacidade</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Política</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Aplicação</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Candidatos</p>
            </div>
            <div>
                <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>
                    Links Rápidos
                </h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Todos os Empregos</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Detalhes do Emprego</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Como se inscrever</p>
                                <p className='text-[15px] w-fit text-white hover:text-yellow-300 
                cursor-pointer text-opacity-30 mb-[0.7rem]'>Resumo</p>
            </div>
        </div>
    </div>
  )
}

export default Footer