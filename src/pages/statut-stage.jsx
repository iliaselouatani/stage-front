import React from 'react';

function Status() {
  // بيانات ثابتة كتجربة
  const stagiaire = {
    cin: 'AB123456',
    nom: 'ILIAS',
    filiere: 'Informatique / الإعلاميات',
    statut: 'En cours de traitement / قيد المعالجة',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Statut de votre demande / حالة طلبك
        </h2>
        <div className="space-y-4 text-gray-800">
          <p><strong>CIN:</strong> {stagiaire.cin}</p>
          <p><strong>Nom:</strong> {stagiaire.nom}</p>
          <p><strong>Filière:</strong> {stagiaire.filiere}</p>
          <p className="text-blue-700 font-semibold">
            <strong>Statut:</strong> {stagiaire.statut}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Status;