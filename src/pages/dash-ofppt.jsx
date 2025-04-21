// OFPPTDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const demandes = [
  {
    id: 1,
    nom: 'Ahmed El Madi',
    cin: 'AB123456',
    filiere: 'Informatique',
    statut: 'En attente',
    fichiers: {
      cv: 'cv_ahmed.pdf',
      demande: 'demande_ahmed.pdf',
      cinPhoto: 'cin_ahmed.jpg',
    },
  },
  {
    id: 2,
    nom: 'Sara Benali',
    cin: 'CD789012',
    filiere: 'Gestion',
    statut: 'En attente',
    fichiers: {
      cv: 'cv_sara.pdf',
      demande: 'demande_sara.pdf',
      cinPhoto: 'cin_sara.jpg',
    },
  },
];

function OFPPTDashboard() {
  const navigate = useNavigate();

  const handleTraitement = (stagiaire) => {
    navigate(`/OFPPTTraitement/`);
};

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Demandes de Stage</h2>
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">Nom</th>
            <th className="p-4">CIN</th>
            <th className="p-4">Filière</th>
            <th className="p-4">Fichiers</th>
            <th className="p-4">Statut</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((stagiaire) => (
            <tr key={stagiaire.id} className="text-center border-b">
              <td className="p-4">{stagiaire.nom}</td>
              <td className="p-4">{stagiaire.cin}</td>
              <td className="p-4">{stagiaire.filiere}</td>
              <td className="p-4 space-y-1 text-left">
                <p><strong>CV:</strong> {stagiaire.fichiers.cv}</p>
                <p><strong>Demande:</strong> {stagiaire.fichiers.demande}</p>
                <p><strong>CIN:</strong> {stagiaire.fichiers.cinPhoto}</p>
              </td>
              <td className="p-4">{stagiaire.statut}</td>
              <td className="p-4">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => handleTraitement(stagiaire)}
                >
                  Compléter le traitement
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OFPPTDashboard;
