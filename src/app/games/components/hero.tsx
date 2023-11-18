import { Button } from '@/components/ui/button'
import { ArrowDownNavigation, IconApple, IconJoystick, IconWindows } from '@/components/ui/icons'
import { MotionDiv } from '@/components/ui/motion-div'
import Link from 'next/link'

function GamesHero () {
  return (
    <section className='relative h-[800px]'>
      <img className='block w-full h-full object-cover object-top' src='/hero.webp' alt='games-hero' />
      <div className='z-30 flex flex-col sm:flex-row absolute justify-between left-0 bottom-0 w-full pb-16 px-5 sm:px-10'>
        <div className='grid gap-y-6'>
          <MotionDiv>
            <img className='block w-[165px] sm:w-fit' src='/tvon-horizontal.svg' alt='The Vow of Nazka' />
          </MotionDiv>
          <MotionDiv delay={0.3} className='space-y-3'>
            <div className='flex space-y-1.5 sm:space-y-3 flex-col font-transducer text-3xl sm:text-3xl lg:text-6xl font-semibold'>
              <h1>
                UN VIAJE
              </h1>
              <h1>
                SIN RETORNO
              </h1>
              <h1>
                CON LOS DIOSES
              </h1>
            </div>
            <div className='flex items-center space-x-6 py-4'>
              <IconWindows />
              <IconApple />
              <div className='flex items-center'>
                <IconJoystick className='mr-2 w-7 h-7' />
                <p className='ml-3 hidden sm:flex'>
                  Compatibilidad total con mando
                </p>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv delay={0.6}>
            <Button className='w-fit mx-auto sm:mx-0'>
              DESCARGA LA DEMO AHORA
            </Button>
          </MotionDiv>
        </div>
        <MotionDiv delay={0.6} className='sm:self-end mt-[30px] sm:mt-auto'>
          <Link href='/games#the-journey' className='sm:-mb-4 flex items-center justify-center sm:justify-normal gap-x-5'>
            <p>Descubre más</p>
            <button>
              <ArrowDownNavigation className='h-8 w-8 sm:w-20 sm:h-20' />
              <span className='sr-only'>Scroll Down</span>
            </button>
          </Link>
        </MotionDiv>
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent from-0% to-100% to-entropy-black z-20' />
    </section>
  )
}

export default GamesHero
