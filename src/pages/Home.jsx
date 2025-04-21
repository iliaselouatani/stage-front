import { Link } from 'react-router-dom';
import { ContainerBlocks } from '../Components/Container';

const usersCtaegories = [
  {
    image : require('../assest/4.jpg'),
    title : "Espace de Stagaires",
    bgColor: "bg-slate-500",
    role: "stagaire"
  },
  {
    image : require('../assest/ofppt.png'),
    title : "Espace de OFPPT",
    bgColor: "bg-green-600",
    role: "OFPPT"
  },
  {
    image : require('../assest/com-1.png'),
    title : "Espace de Commune",
    bgColor: "bg-blue-600",
    role: "Commune"
  }
]


function Home() {
  

  return (
    <>
      <section id='homebg' className='w-full min-h-screen'>
        <div className="  min-w-full py-5">
          <img className='w-[20%] h-[70px] justify-self-center' src={require('../assest/royaume_du_maroc_logo.png')} alt="" />
        </div>

        <main className='min-w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {usersCtaegories.map(uc => <Link key={uc.role} to={`forms/${uc.role}`}>  <ContainerBlocks data={uc} /> </Link>)}
        </main>

        
        <div className='min-w-full fixed bottom-0'>
          <div className="flex w-[65%] justify-between justify-self-center bg-slate-200 px-10 py-5">
            <p>Version 2.0</p>
            <p>Copyright © {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;




















