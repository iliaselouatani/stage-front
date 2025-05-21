import React from 'react';
import { Link } from 'react-router-dom';

const StagaireInscriptionForms = () => {
  return (
    <section className='stagiaire-form'>
      <div id='stagairebgform' className='lg:w-[50%]'>
        {/* Add the same background elements as login form */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img 
            src={require('../assest/royaume_du_maroc_logo.png')} 
            alt="Education"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>

      <form className='w-full lg:w-[50%] px-6 py-8 lg:px-12 lg:py-16'>
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
          <div className="flex justify-between gap-4">
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='Nom Complet' 
            />
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='CIN' 
            />
          </div>

          <input 
            className='form-input'
            type="tel" 
            placeholder='Téléphone de Stagiaire' 
          />
          
          <input 
            className='form-input'
            type="text" 
            placeholder="Nom de Ville d'étude" 
          />

          <input 
            className='form-input'
            type="email" 
            placeholder='Email' 
          />

          <input 
            className='form-input'
            type="password" 
            placeholder='Mot de Passe' 
          />
          
          <input 
            className='form-input'
            type="password" 
            placeholder='Confirmer Mot de Passe' 
          />

          <button className='form-button' type="submit">
            S'inscrire
          </button>

          <Link to={'/forms/stagaire'} className='form-link text-center'>
            Déjà un compte? Se connecter
          </Link>
        </div>
      </form>
    </section>
  )
}

export default StagaireInscriptionForms;