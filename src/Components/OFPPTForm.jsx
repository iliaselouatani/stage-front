import React from 'react';
import { Link } from 'react-router-dom';
import ".././style/ofppt.css"
const OFPPTForm = () => {
  return (
    <div className='ofppt-form'>
      <div id='stagairebgform' className='lg:w-[60%] relative'>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img 
            src={('../assest/......png')} 
            alt="OFPPT Campus"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
      
      <form className='w-full lg:w-[40%] px-6 py-8 lg:px-12 lg:py-16'>
        <div className='flex justify-between items-center mb-12'>
          <div className="w-[45%]">
            <img 
              src={require('../assest/royaume_du_maroc_logo.png')} 
              alt="Royal Moroccan Seal" 
              className='w-full max-w-[180px]'
            />
          </div>

          <div className="w-[45%] flex justify-end">
            <img 
              src={require('../assest/ofppt.png')} 
              alt="OFPPT Logo" 
              className='w-full max-w-[120px]'
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <input 
            className='ofppt-input'
            type="email" 
            placeholder='Identifiant OFPPT' 
          />

          <input 
            className='ofppt-input'
            type="password" 
            placeholder='Mot de passe' 
          />

          <button className='ofppt-button' type="submit">
            Se connecter
          </button>

          <div className='flex flex-col gap-2 mt-4'>
            <Link to={'/ofppt_inscription'} className='ofppt-link'>
              Créer un compte institutionnel
            </Link>
            <Link to='/ofppt-password-reset' className='ofppt-link'>
              Réinitialiser le mot de passe
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OFPPTForm