import React from 'react';
import { Link } from 'react-router-dom';

const CommuneInscriptionForms = () => {
  return (
    <section className='bg-[#FFFFFF] lg:flex '>
        <div id='communebgform' className='h-[30dvh] w-screen lg:h-full lg:w-[50%]'>
            

            <div className="relative z-10 flex items-center justify-center min-h-screen text-white min-w-full">
          <div className="container flex justify-start flex-col">
            <div className="relative">
              <h1 className="text-4xl w-[100%] absolute top-[-17rem] lg:top-[-10rem] md:text-6xl font-normal px-5 py-5 md:w-[100%]">
                Bienvenue à Commune de Larache
              </h1>
            </div>
            </div>
            </div>
        </div>
        <form className='w-screen lg:w-[50%] px-10 py-6'>
        <div className='w-[100%] h-fit justify-self-center flex justify-between items-center'>
            <div className="w-[45%]">
            <img src={require('../assest/royaume_du_maroc_logo.png')} alt="" />
            </div>

            <div className="w-[45%]"><img src={require('../assest/commune-1.png')} alt="" /></div>

            
        </div>


        
        {/* <div className="p-20 flex flex-col gap-4 lg:p-0 lg:pt-20"> */}
        <div className="pt-20 flex flex-col gap-4">
           <div className=" flex justify-between">
           <input className='text-[16px] w-[45%] py-3 px-5 border border-zinc-300 rounded-md' type="text" placeholder='Nome de Vill' />
           <input className='text-[16px] w-[45%] py-3 px-5 border border-zinc-300 rounded-md' type="text" placeholder='Nome de Respensable' />
           </div>

           <div className="flex justify-between">
           <input className='text-[16px] w-[45%] py-3 px-5 border border-zinc-300 rounded-md' type="text" placeholder='Adress' />
           <input className='text-[16px] w-[45%] py-3 px-5 border border-zinc-300 rounded-md' type="text" placeholder='Activite' />
           </div>
            
            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="tel" placeholder='Telephon' />

            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="email" placeholder='Email' />

            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="password" placeholder='Mote de Pass'/>
            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="password" placeholder='Confirme Mote de Pass'/>

            <button className='bg-orange-500 text-white text-[16px] font-medium py-3 px-5 rounded-md hover:bg-orange-600' type="submit"> S'incrire </button>

            <Link to={'/forms/commune'} className='text-xs text-zinc-500'>
              Se connecter
            </Link>
            
        </div>
        
        </form>
    </section>
  )
}

export default CommuneInscriptionForms
