import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout';
import Forms from '../pages/Forms';
import InscriptionForms from '../pages/CommuneInscriptionForms';
import OFPPTInscriptionForms from '../pages/OFPPTInscripionForm';
import StagaireInscriptionForms from '../pages/StagaireInscriptionForm';
import DemandeForm from '../pages/dash-stageiere';
import Status from '../pages/statut-stage';
import OFPPTDashboard from '../pages/dash-ofppt';
import OFPPTTraitement from '../pages/ofpptform';
import CommuneDashboard from '../pages/dash-commune';
import FormulaireCommune from '../pages/FormulaireCommune';
// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense> },
      { 
        path: 'forms/:target', 
        element: <Suspense fallback={<p>Loading...</p>}><Forms /></Suspense> 
      },
      { 
        path: 'commune_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><InscriptionForms /></Suspense> 
      },
      { 
        path: 'ofppt_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><OFPPTInscriptionForms /></Suspense> 
      },
      { 
        path: 'stagaire_inscription', 
        element: <Suspense fallback={<p>Loading...</p>}><StagaireInscriptionForms /></Suspense> 
      },
      { path: 'stagaire_demande', element: <DemandeForm /> },
      { path: 'stagaire_status', element: <Status /> },
      { path: 'OFPPTDashboard', element: <OFPPTDashboard /> },
      { path: 'OFPPTTraitement', element: <OFPPTTraitement /> },
      { path: 'CommuneDashboard', element: <CommuneDashboard /> },
      { path: '/formulaire/:id', element: <FormulaireCommune /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}