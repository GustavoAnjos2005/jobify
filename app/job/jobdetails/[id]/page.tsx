import ApplyButton from '@/app/components/Helper/ApplyButton'
import JobCard from '@/app/components/Helper/JobCard'
import { authOptions } from '@/auth'
import JobData from '@/data'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const JobDetails =  async ({ params }: {params: { id : string }}) => {
    
    const singleJob = JobData.find((job)=> job.id.toString()===params.id)
    const session = await getServerSession(authOptions)

    const firstFourJob = JobData.slice(0, 4)

  return (
    <div className='mt-20 mb-12'>
        <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
            <div className='flex-[0.7]'>
                <JobCard job={singleJob!}/>
            </div>
            {session && <ApplyButton/>}
            {!session && (
                <Link href='/signup'>
                    <button className='px-8 py-3 bg-emerald-600 rounded-lg text-white'>Inscreva-se para se Candidatar</button>
                </Link>
            )}
        </div>
        <div className='mt-16 w-[80%] mx-auto'>
            <h1 className='text-[20px] font-semibold'>Descrição</h1>
            <p className='mt-4 text-black text-opacity-70'>
                Somente Teste :) <br />Sonhar que está comendo uma maria-mole gigante pode significar acordar sem o travesseiro!. Por que 'tudo junto' se escreve separado e 'separado' se escreve tudo junto?. Mais vale um pássaro na mão do que bois voando.. Antes tarde do que mais tarde.. O importante é o que importa..
            </p>
            <h1 className='text-[20px] mt-8 font-semibold'>Responsabilidades</h1>
            <p className='mt-4 text-black text-opacity-70'>
                Somente Teste :) <br />Sonhar que está comendo uma maria-mole gigante pode significar acordar sem o travesseiro!. Por que 'tudo junto' se escreve separado e 'separado' se escreve tudo junto?. Mais vale um pássaro na mão do que bois voando.. Antes tarde do que mais tarde.. O importante é o que importa..
            </p>
            <h1 className='text-[20px] mt-8 font-semibold'>Habilidades Necessárias</h1>
            <ul className='mt-4'>
                <li className='mt-4 text-black text-opacity-70'>React JS</li>
                <li className='mt-4 text-black text-opacity-70'>Next JS</li>
                <li className='mt-4 text-black text-opacity-70'>Tailwind CSS</li>
                <li className='mt-4 text-black text-opacity-70'>TypeScript</li>
                <li className='mt-4 text-black text-opacity-70'>Next Auth</li>
            </ul>
            <h1 className='text-[20px] mt-8 font-semibold'>Empregos Relacionados</h1>
            <div className='mt-4'>
          { firstFourJob.map((job) => {
              return (
              <Link href={`/job/jobdetails/${job.id}`} className='space-y-6' key={job.id}>
                <JobCard job={job}/>
              </Link>
    )
  })}
        </div>
        </div>
    </div>
  )
}

export default JobDetails