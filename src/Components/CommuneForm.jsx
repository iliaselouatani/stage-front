import React from 'react';
import { Link } from 'react-router-dom';
import "../style/commune.css";
const CommuneForm = () => {
  return (
    <div className='stagiaire-form'>
      <div id='communebgform' className='lg:w-[60%] relative'>
        <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/30">
          <div className="text-center text-white z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Bienvenue à Commune de Larache
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Plateforme de gestion des stages municipaux
            </p>
          </div>
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
              src={require('../assest/commune-1.png')} 
              alt="Commune Logo" 
              className='w-full max-w-[120px]'
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <input 
            className='form-input'
            type="email" 
            placeholder='Identifiant Municipal' 
          />

          <input 
            className='form-input'
            type="password" 
            placeholder='Mot de passe' 
          />

          <button className='commune-button' type="submit">
            Se connecter
          </button>

          <div className='flex flex-col gap-2 mt-4'>
            <Link to={'/commune_inscription'} className='form-link'>
              Créer un compte municipal
            </Link>
            <Link to='/commune-password-reset' className='form-link'>
              Mot de passe oublié
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommuneForm;