import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function FormulaireCommune() {
  const { id } = useParams();
  const [numero, setNumero] = useState('');
  const [adresse, setAdresse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Infos pour stagiaire ID ${id}:\nTéléphone: ${numero}\nAdresse: ${adresse}`);
    setNumero('');
    setAdresse('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Formulaire de la commune</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Numéro de téléphone..."
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Adresse..."
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormulaireCommune;
