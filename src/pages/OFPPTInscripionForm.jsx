import React from 'react';
import { Link } from 'react-router-dom';

const OFPPTInscriptionForms = () => {
  return (
    <section className='bg-[#FFFFFF] lg:flex '>
        <div id='stagairebgform' className='h-[30dvh] w-screen lg:min-h-screen lg:w-[50%]'>
            

            
            </div>


        <form className='w-screen lg:w-[50%] px-10 py-6'>
        <div className='w-[100%] h-fit justify-self-center flex justify-between items-center'>
            <div className="w-[45%]">
            <img src={require('../assest/royaume_du_maroc_logo.png')} alt="" />
            </div>

            <div className="w-[45%]"><img src={require('../assest/erasebg-transformed.png')} alt="" /></div>

            
        </div>

        
        <div className=" flex flex-col gap-4 pt-20 ">
            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="text" placeholder='Nome de Vill' />

            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="email" placeholder='Email' />

            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="password" placeholder='Mote de Pass'/>
            <input className='text-[16px] py-3 px-5 border border-zinc-300 rounded-md' type="password" placeholder='Confirme Mote de Pass'/>

            <button className='bg-orange-500 text-white text-[16px] font-medium py-3 px-5 rounded-md hover:bg-orange-600' type="submit"> S'incrire </button>

            <Link to={'/forms/OFPPT'} className='text-xs text-zinc-500'>
              Se connecter
            </Link>
            
        </div>
        
        </form>
    </section>
  )
}

export default OFPPTInscriptionForms
