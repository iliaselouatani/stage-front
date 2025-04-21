import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CommuneDashboard() {
  const navigate = useNavigate();
  const [demandes, setDemandes] = useState([
    {
      id: 1,
      nom: 'Omar El Idrissi',
      cin: 'EF123456',
      filiere: 'Mécanique',
      statut: 'En attente',
    },
    {
      id: 2,
      nom: 'Latifa Amrani',
      cin: 'GH789012',
      filiere: 'Gestion',
      statut: 'En attente',
    },
  ]);

  const handleAccepter = (id) => {
    const updated = demandes.map((d) =>
      d.id === id ? { ...d, statut: 'Accepté' } : d
    );
    setDemandes(updated);
    navigate(`/formulaire/${id}`);
  };
  
  const handleRefuser = (id) => {
    const updated = demandes.map((d) =>
      d.id === id ? { ...d, statut: 'Refusé' } : d
    );
    setDemandes(updated);
    alert('Demande refusée.');
  };
  

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Tableau de suivi - Commune</h2>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">Nom</th>
            <th className="p-4">CIN</th>
            <th className="p-4">Filière</th>
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
              <td className="p-4 font-semibold">{stagiaire.statut}</td>
              <td className="p-4 space-x-2">
              <button
  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
  onClick={() => handleAccepter(stagiaire.id)}
>
  Accepter
</button>
<button
  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
  onClick={() => handleRefuser(stagiaire.id)}
>
  Refuser
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommuneDashboard;
