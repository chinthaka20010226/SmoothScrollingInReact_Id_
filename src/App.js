import './App.css';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className='navbar'>
        <ul>
          <li onClick={() => scrollToSection('home')} className='link'>Home</li>
          <li onClick={() => scrollToSection('services')} className='link'>Services</li>
          <li onClick={() => scrollToSection('blog')} className='link'>Blog</li>
          <li onClick={() => scrollToSection('contact')} className='link'>Contact</li>
        </ul>
      </div>
      <div className='home' id='home'>
        Home
      </div>
      <div className='services' id='services'>
        Services
      </div>
      <div className='blog' id='blog'>
        Blog
      </div>
      <div className='contact' id='contact'>
        Contact
      </div>
    </div>
  );
}

export default App;
