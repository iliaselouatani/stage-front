import React from 'react';
import { Link } from 'react-router-dom';
import ".././style/stagiere.css"


const StagairesForm = () => {
  return (
    <div className='stagiaire-form'>
      <div id='stagairebgform' className='lg:w-[60%]' />
      
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
              src={require('../assest/erasebg-transformed.png')} 
              alt="OFPPT Logo" 
              className='w-full max-w-[120px]'
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <input 
            className='form-input'
            type="text" 
            placeholder='Nom de Stagiaire' 
          />

          <input 
            className='form-input'
            type="password" 
            placeholder='Mot de Pass' 
          />

          <button className='form-button' type="submit">
            Se connecter
          </button>

          <div className='flex flex-col gap-2 mt-4'>
            <Link to={'/stagaire_inscription'} className='form-link'>
              Créer un nouveau compte
            </Link>
            <Link to='/password-reset' className='form-link'>
              Mot de passe oublié
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default StagairesForm;