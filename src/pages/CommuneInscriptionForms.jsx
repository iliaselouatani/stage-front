import React from 'react';
import { Link } from 'react-router-dom';

const CommuneInscriptionForms = () => {
  return (
    <section className='stagiaire-form'>
      <div id='communebgform' className='lg:w-[50%] relative'>
        <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/30">
          <div className="text-center text-white z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Bienvenue à Commune de Larache
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Enregistrement des services municipaux
            </p>
          </div>
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
              src={require('../assest/com-1.png')} 
              alt="Commune Logo" 
              className='w-full max-w-[120px]'
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-4">
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='Nom de Ville' 
            />
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='Nom du Responsable' 
            />
          </div>

          <div className="flex justify-between gap-4">
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='Adresse' 
            />
            <input 
              className='form-input w-[48%]'
              type="text" 
              placeholder='Activité Principale' 
            />
          </div>

          <input 
            className='form-input'
            type="tel" 
            placeholder='Téléphone Municipal' 
          />

          <input 
            className='form-input'
            type="email" 
            placeholder='Email Institutionnel' 
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

          <button className='commune-button' type="submit">
            S'inscrire
          </button>

          <Link to={'/forms/commune'} className='form-link text-center'>
            Déjà un compte? Se connecter
          </Link>
        </div>
      </form>
    </section>
  )
}

export default CommuneInscriptionForms;