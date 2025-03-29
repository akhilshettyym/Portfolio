import React from 'react'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-fill'>
            <div className='grid-container'>
                <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                <div> 
                    <p className='grid-headtext'>Hi, I'm AKHIL</p>
                    <p className='grid-subtext'>I’m a Computer Science undergraduate with a solid academic background and a love for technology. I’m eager to
                    start my career and contribute to exciting projects. With 3 years of  experience, I have honed my skills in frontend and backend development. </p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
