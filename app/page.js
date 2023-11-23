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
    <main className='bg-gradient-to-b from-black to-slate-800' id='header'>
      <div className='sticky top-0 z-10 py-2'>
        <motion.nav className="flex justify-between items-center px-8  py-2" variants={navAnimate} initial="hidden" animate="show">
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

      <div id="hero" className='items-center h-screen w-screen'>
        <div className='relative top-[40px] md:top-[120px] flex flex-col justify-items-start'>
          <motion.div className='relative md:left-[20%] text-2xl flex flex-col text-semibold md:w-2/3 w-full left-0 px-8 md:px-0' variants={textAnimate1} initial="hidden" animate="show">
            <motion.h1 className={`text-5xl text-[#eaeaea] tracking-tighter font-bold ${pacifico.className}`} variants={textAnimate2} custom={0}>Hi, I&apos;m</motion.h1>
          </motion.div>
          <motion.div className='relative md:w-2/3 w-full md:left-[20%] text-2xl flex flex-col text-semibold md:w-2/3 w-full left-0 px-8 md:px-0' variants={textAnimate1} initial="hidden" animate="show">
            <motion.h1 className='text-8xl text-[#eaeaea] tracking-tighter font-bold' variants={textAnimate2} custom={0}>Guy.</motion.h1>
          </motion.div>
          <motion.p className='relative top-[40px] md:left-[20%] text-2xl flex flex-col text-semibold md:w-2/3 w-full px-2 md:px-0' variants={textParagraph} initial="hidden" animate="show">
            <span className='text-green-200 py-2'>
            I&apos;m an experienced Full Stack Developer and Digital Lead with a proven track record of driving successful projects.
            </span>
            <span className='text-green-200 py-2'>
              Research for breakfast, Prototyping for lunch, Delivery for dinner.
            </span>
            <span className="flex flex-row gap-4 py-8">
            <Link className="bg-green-400 shadow text-white hover:bg-white hover:text-green-500 flex flex-row justify-center items-center transition duration-175 ease-in-out py-2 text-xl lg:text-2xl px-4 md:px-10 rounded" href="https://www.guycrawford.ca/guycrawford-resume.pdf" target="_blank">
                Download Resume
            </Link>
            <Link className="bg-green-400 shadow text-white hover:bg-white hover:text-green-500 flex flex-row justify-center items-center transition duration-175 ease-in-out py-2 text-xl lg:text-2xl px-4 md:px-10 rounded" href="#portfolio">
                Portfolio
            </Link>
            </span>
          </motion.p>
        </div>
      </div>
      
      <motion.div id="portfolio" variants={imageAnimate} initial="hidden" ref={ref} animate={controls} className='relative gap-8 py-0 md:py-4 px-8 md:px-12 lg:px-0 w-full lg:w-3/4 flex flex-col items-center mx-auto justify-items-center'>
        <h2 className='m-auto py-8 flex text-center text-5xl text-[#eaeaea] tracking-tighter font-bold'>
          Portfolio.
        </h2>
      <motion.section variants={imageAnimateChild} initial="hidden" ref={ref} animate={controls} className="  bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.agns.ca" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/agns.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:ml-4 md:px-8 text-left space-y-4">
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
      <motion.section variants={imageAnimateChild} initial="hidden" ref={ref} animate={controls} className=" bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.aliceandsmithmetalab.com/" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/aliceandsmith.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:ml-4 md:px-8 text-left space-y-4">
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
              Use GSAP&apos;s animation library to bring life to the website, creating an engaging and interactive experience for the user.
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
              Next.js, React, GreenSock, Docker, CD, BitBucket
            </p>
          </blockquote>
        </div>
      </motion.section>
      <motion.section variants={imageAnimateChild} initial="hidden" ref={ref} animate={controls} className=" bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.braininstitute.ca" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/obi.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:ml-4 md:px-8 text-left space-y-4">
          <blockquote>
          <p className='m-auto flex text-2xl tracking-tighter font-bold'>
          Ontario Brain Institute 
          </p>
          <div className="text-sky-500 dark:text-sky-400 font-medium py-4">
            <Link href="https://www.braininstitute.ca/" target='_blank'>
            braininstitute.ca
            </Link>
            </div>
            <p className="text-lg font-medium">
              Objective:
            </p>
            <p className="text-lg">
              Update and rebuild the Annual Report template to replace static images with responsive components to meet accessibility requirements.
            </p>
            <p className="text-lg font-medium pt-4">
              Areas of responsibility:
            </p>
            <p className="text-lg">
              After researching CraftCMS Twig templates, rebuild the page to modern responsive and accessible CSS code standards. Restructure the page to serve bilingual content, and to allow for smoother future updates. Coordinate deployment with the client&apos;s hosting provider to ensure a smooth transition.
            </p>
            <p className='text-xl pt-4 tracking-tighter font-bold'>
            Tech stack 
            </p>
            <p className="text-lg pb-4">
              HTML, CSS, JavaScript, CraftCMS, Twig, JQuery, APIs, CD, G-Cloud
            </p>
          </blockquote>
        </div>
      </motion.section>
      <motion.section variants={imageAnimateChild} initial="hidden" ref={ref} animate={controls} className=" bg-slate-100 p-10 dark:bg-slate-800 flex flex-col md:flex-row items-center mx-2 md:mx-auto rounded-md">
        <Link href="https://www.efficiencyns.ca/residential/residential-tools-resources/energy-assistance-navigation-tool/" target='_blank'>
        <Image className="object-cover w-[600px] md:min-w-[300px] h-auto md:min-h-[300px] rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-175 ease-in-out hover:scale-105" src="/img/efficiencyns.jpg" alt="" width={600} height={600} />
        </Link>
        <div className="pt-6 md:ml-4 md:px-8 text-left space-y-4">
          <blockquote>
          <p className='m-auto flex text-2xl tracking-tighter font-bold'>
          Efficiency Nova Scotia 
          </p>
          <div className="text-sky-500 dark:text-sky-400 font-medium py-4">
            <Link href="https://www.efficiencyns.ca/residential/residential-tools-resources/energy-assistance-navigation-tool/" target='_blank'>
              efficiencyns.ca
            </Link>
            </div>
            <p className="text-lg font-medium">
              Objective:
            </p>
            <p className="text-lg">
              Rapidly research, prototype, and develop a new tool to help Nova Scotians find energy efficiency rebates and programs.
            </p>
            <p className="text-lg font-medium pt-4">
              Areas of responsibility:
            </p>
            <p className="text-lg">
              Research and prototype the tool, and develop the front-end code to style the tool. Present costings and alternative solutions to client. Coordinate with the client to ensure the tool meets their needs, and is delivered on time.
            </p>
            <p className='text-xl pt-4 tracking-tighter font-bold'>
            Tech stack 
            </p>
            <p className="text-lg pb-4">
              HTML, CSS, JavaScript, CD, AWS, Git
            </p>
          </blockquote>
        </div>
      </motion.section>
      </motion.div>
    </main>
  )
}
