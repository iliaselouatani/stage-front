import React, { useState } from 'react';

function OFPPTTraitement() {
  // ✅ بيانات المتدرب بشكل ثابت
  const stagiaire = {
    nom: 'Ahmed El Madi',
    cin: 'AB123456',
    filiere: 'Informatique',
  };

  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const traitementData = {
      ...stagiaire,
      dateDebut,
      dateFin,
      statut: 'Accepté',
    };

    console.log('Traitement envoyé:', traitementData);
    alert('Traitement complété avec succès !');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-xl space-y-4">
        <h2 className="text-xl font-bold text-center text-blue-700 mb-4">Traitement de la Demande</h2>

        <p><strong>Nom:</strong> {stagiaire.nom}</p>
        <p><strong>CIN:</strong> {stagiaire.cin}</p>
        <p><strong>Filière:</strong> {stagiaire.filiere}</p>

        <div>
          <label className="block">Date de début</label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label className="block">Date de fin</label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Envoyer le traitement / إرسال المعالجة
        </button>
      </form>
    </div>
  );
}

export default OFPPTTraitement;
