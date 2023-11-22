'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
})

// const handleScroll = (e) => {
//   e.preventDefault();
  
//   const href = e.currentTarget.href;
//   const targetId = href.replace(/.*\#/, "");
  
//   const elem = document.getElementById(targetId);
//   elem?.scrollIntoView({
//     behavior: "smooth",
//   });
// }

export default function Home() {

  const bgAnimate = {
    hidden:{
      clipPath:'polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)'
    },
    show:{
      clipPath:'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
      transition:{
        ease: 'easeInOut',
        duration:0.8,
        delay:1,
      }
    }
  }

  const textAnimate1 = {
    hidden:{
      y:"100%",
      opacity:0,
    },
    show:{
      y:80,
      opacity:1,
      transition:{
        ease: 'easeInOut',
        duration:0.8,
        staggerChildren:0.4,
        delayChildren:1.1,
      }
    }
  }

  const textAnimate2 = {
    hidden:{
      x:60,
    },
    show:(i) => ({
      x:i,
      y:-80,
      transition:{
        ease: 'easeInOut',
        duration:0.8,
      }
    })
  }

  const imageAnimate = {
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.3,
        delayChildren:0.5,
        ease: 'easeInOut',
      }
    }
  }

  const imageAnimateChild = {
    hidden:{
      x:100,
      opacity:0,
    },
    show:{
      x:0,
      opacity:1,
      transition:{
        ease: 'easeInOut',
      }
    }
  }

  const navAnimate = {
    hidden:{
      y:'-100',
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type: 'spring',
        stiffness:60,
        delay:2,
      }
    }
  }

  const textParagraph = {
    hidden:{
      y:'-100%',
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type: 'spring',
        stiffness:60,
        delay:2,
      }
    }
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    
    <main className='px-8 bg-gradient-to-b from-black to-slate-800' id='header'>
      <div className='sticky top-0 z-10 py-2'>
        <motion.nav className="flex justify-between items-center py-2" variants={navAnimate} initial="hidden" animate="show">
          <div className="text-xl font-semibold text-green-200">
            <Link href="./">Guy Crawford</Link>
          </div>
          <ul className='w-[150px] flex justify-between items-center'>
            <li className='font-semibold text-[#eaeaea]'>
            <Link href="./">Home</Link>
            </li>
            <li className='font-semibold text-[#eaeaea]'>
              <Link href="./#portfolio">Portfolio</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
      <motion.div className='absolute inset-0 h-screen w-screen z-0' variants={bgAnimate} initial="hidden" animate="show">
        <Image src="/img/bg.jpg" alt='background' fill priority={true} sizes='(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw' className='object-cover brightness-40' />
      </motion.div>

      <div id="hero" className='items-center h-screen lg:w-screen'>
        <div className='relative top-[40px] md:top-[120px] flex flex-col justify-items-start'>
          <motion.div className='relative md:left-[20%] left-0' variants={textAnimate1} initial="hidden" animate="show">
            <motion.h1 className={`text-5xl text-[#eaeaea] tracking-tighter font-bold ${pacifico.className}`} variants={textAnimate2} custom={0}>Hi, I'm</motion.h1>
          </motion.div>
          <motion.div className='relative md:left-[20%] left-0' variants={textAnimate1} initial="hidden" animate="show">
            <motion.h1 className='text-8xl text-[#eaeaea] tracking-tighter font-bold' variants={textAnimate2} custom={0}>Guy.</motion.h1>
          </motion.div>
          <motion.p className='relative top-[40px] md:left-[20%] text-2xl flex flex-col text-semibold md:w-2/3 w-full left-0' variants={textParagraph} initial="hidden" animate="show">
            <span className='text-green-200 py-2'>
            I'm an experienced Full Stack Developer and Digital Lead with a proven track record of driving successful projects.
            </span>
            <span className='text-green-200 py-2'>
              Research for breakfast, Prototyping for lunch, Delivery for dinner.
            </span>
            <span className="flex flex-row gap-4 py-8">
            <button className="bg-green-400 shadow text-white hover:bg-white hover:text-green-500 flex flex-row justify-center items-center transition duration-175 ease-in-out py-2 px-10 rounded">
                Download Resume
            </button>
            <Link className="bg-green-400 shadow text-white hover:bg-white hover:text-green-500 flex flex-row justify-center items-center transition duration-175 ease-in-out py-2 px-10 rounded" href="#portfolio">
                Portfolio
            </Link>
            </span>
          </motion.p>
        </div>
      </div>
      
      <motion.div id="portfolio" variants={imageAnimate} initial="hidden" ref={ref} animate={controls} className='relative gap-8 py-0 md:py-4 w-full left-0 flex flex-col justify-items-center'>
      <h2 className='m-auto py-8 flex text-center text-5xl text-[#eaeaea] tracking-tighter font-bold'>
        Portfolio.
      </h2>
      <motion.section variants={imageAnimateChild} initial="hidden" animate="show" className=" w-full lg:w-3/4 bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.agns.ca" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/agns.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:px-8 text-left space-y-4">
          <blockquote>
          <p className='m-auto flex text-2xl tracking-tighter font-bold'>
          Art Gallery of Nova Scotia 
          </p>
          <div className="text-sky-500 dark:text-sky-400 font-medium py-4">
            <Link href="https://www.agns.ca" target='_blank'>
              AGNS.ca
            </Link>
            </div>
            <p className="text-lg font-medium">
              Objective:
            </p>
            <p className="text-lg">
              To create a new website for the Art Gallery of Nova Scotia that is modern, accessible, and easy to use.
            </p>
            <p className="text-lg font-medium pt-4">
              Areas of responsibility:
            </p>
            <p className="text-lg">
              Develop mobile-first responsive design, accessibility, and front-end development. Manage client reviews, expectations, and feedback. Oversee offsite development team.
            </p>
            <p className='text-xl pt-4 tracking-tighter font-bold'>
            Tech stack 
            </p>
            <p className="text-lg pb-4">
              HTML, CSS, JavaScript, PHP, SQL, WordPress, APIs, CD, Git
            </p>
          </blockquote>
        </div>
      </motion.section>
      <motion.section variants={imageAnimateChild} initial="hidden" animate="show" className=" w-full lg:w-3/4 bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.agns.ca" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/aliceandsmith.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:px-8 text-left space-y-4">
          <blockquote>
          <p className='m-auto flex text-2xl tracking-tighter font-bold'>
          Alice & Smith Metalab 
          </p>
          <div className="text-sky-500 dark:text-sky-400 font-medium py-4">
            <Link href="https://www.aliceandsmithmetalab.com/" target='_blank'>
              aliceandsmithmetalab.com
            </Link>
            </div>
            <p className="text-lg font-medium">
              Objective:
            </p>
            <p className="text-lg">
              Use GSAP's animation library to bring life to the website, creating an engaging and interactive experience for the user.
            </p>
            <p className="text-lg font-medium pt-4">
              Areas of responsibility:
            </p>
            <p className="text-lg">
              To update and rebuild sections of the website using scrollTrigger and timeline events from the GSAP animation library.
            </p>
            <p className='text-xl pt-4 tracking-tighter font-bold'>
            Tech stack 
            </p>
            <p className="text-lg pb-4">
              Next.js, React, GreenSock,  CD, BitBucket
            </p>
          </blockquote>
        </div>
      </motion.section>
        
        {/* <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 absolute inset-x-4 bottom-4" variants={imageAnimate} initial="hidden" ref={ref} animate={controls}>
          <motion.div className='text-green-200' variants={imageAnimateChild}>
            <Link href="/">
            <Image src='/img/img-1.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}className="object-cover rounded-lg saturate-150" />
            </Link>
          </motion.div>
          <motion.div className='text-green-200' variants={imageAnimateChild}>
            <Link href="/">
            <Image src='/img/img-2.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="object-cover rounded-lg saturate-150" />
            </Link>
          </motion.div>
          <motion.div className='text-green-200' variants={imageAnimateChild}>
            <Link href="/">
            <Image src='/img/img-3.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="object-cover rounded-lg saturate-150" />
            </Link>
          </motion.div>
          <motion.div className='text-green-200' variants={imageAnimateChild}>
            <Link href="/">
            <Image src='/img/img-2.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="object-cover rounded-lg saturate-150" />
            </Link>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </main>
  )
}
