import React from 'react'
import Heading from '../Helper/Heading'
import JobCategoryCard from '../Helper/JobCategoryCard'

const JobCategory = () => {
  return (
    <div className='pt-20 pb-12'>
      <Heading
       mainHeading='Categorias de Emprego Popular' 
       subHeading='2020 Empregos ao vivo - 293 adicionados hoje.'/>
         <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
                <JobCategoryCard image="/images/icon1.png" category="Finanças" openPosition="23"/>
                <JobCategoryCard image="/images/icon2.png" category="Marketing" openPosition="13"/>
                <JobCategoryCard image="/images/icon3.png" category="Design" openPosition="33"/>
                <JobCategoryCard image="/images/icon4.png" category="Desenvolvimento" openPosition="23"/>
                <JobCategoryCard image="/images/icon5.png" category="RH" openPosition="33"/>
                <JobCategoryCard image="/images/icon6.png" category="Empregos Automotivos" openPosition="53"/>
                <JobCategoryCard image="/images/icon7.png" category="Atendimento ao Cliente" openPosition="13"/>
                <JobCategoryCard image="/images/icon8.png" category="Saúde e Cuidados" openPosition="03"/>
                <JobCategoryCard image="/images/icon9.png" category="Gerenciamento de Projetos" openPosition="23"/>
            </div>
        </div>
  )
}

export default JobCategory