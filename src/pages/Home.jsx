import { Link } from 'react-router-dom';
import { ContainerBlocks } from '../Components/Container';
import ".././style/Home.css"
const usersCategories = [
  {
    image: require('../assest/4.jpg'),
    title: "Espace de Stagiaires",
    role: "stagaire"
  },
  {
    image: require('../assest/ofppt.png'),
    title: "Espace de OFPPT",
    role: "OFPPT"
  },
  {
    image: require('../assest/com-1.png'),
    title: "Espace de Commune",
    role: "Commune"
  }
];

function Home() {
  return (
    <section className="home">
      {/* Header */}
      <header className="home-header">
        <img
          className="logo"
          src={require('../assest/royaume_du_maroc_logo.png')}
          alt="Royaume du Maroc"
        />
      </header>

      {/* Main Content */}
      <main className="home-main">
        {usersCategories.map((uc) => (
          <Link key={uc.role} to={`forms/${uc.role}`} className="card-link">
            <ContainerBlocks data={uc} />
          </Link>
        ))}
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <p>Version 2.0</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </section>
  );
}

export default Home;
