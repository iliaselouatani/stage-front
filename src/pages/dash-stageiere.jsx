import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StagaireDemande() {
  const [formData, setFormData] = useState({
    cin: '',
    filiere: '',
    cv: null,
    demande: null,
    cinPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Demande envoyée ! / تم إرسال الطلب بنجاح');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">لوحة المتدرب / Tableau de Stagiaire</h1>
        <div className="space-x-6">
          <Link to="/stagaire_demande" className="text-blue-600 font-medium hover:underline">Demande / الطلب</Link>
          <Link to="/stagaire_status" className="text-blue-600 font-medium hover:underline">Statut / حالة الملف</Link>
          <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Déconnexion / تسجيل الخروج</button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">Formulaire de Demande de Stage / استمارة طلب التدريب</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Numéro CIN / رقم البطاقة الوطنية</label>
            <input type="text" name="cin" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Filière / الشعبة</label>
            <select name="filiere" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} required>
              <option value="">-- Choisir / اختر --</option>
              <option value="informatique">Informatique / الإعلاميات</option>
              <option value="gestion">Gestion / التسيير</option>
              <option value="mécanique">Mécanique / الميكانيك</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">CV / السيرة الذاتية</label>
            <input type="file" name="cv" onChange={handleChange} className="w-full" required />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Demande de Stage / طلب التدريب</label>
            <input type="file" name="demande" onChange={handleChange} className="w-full" required />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Photo CIN / صورة البطاقة الوطنية</label>
            <input type="file" name="cinPhoto" onChange={handleChange} className="w-full" required />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200">Envoyer / إرسال</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StagaireDemande;
