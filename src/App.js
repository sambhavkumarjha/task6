import logo from './logo.svg';
import './App.css';
import myImg from "./WhatsApp Image 2023-02-05 at 12.34.56 AM.jpeg"
function App() {
  return (
    <div className="App">



      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="content">
          <h2>About Me</h2>
          <p>My name is <b>Sambhav Kumar Jha</b> and I'm a versatile software developer with a strong foundation in HTML, CSS, and JavaScript. My expertise spans across the MERN stack, allowing me to craft dynamic and interactive web applications. I'm well-versed in Java,C++ and have experience in ethical hacking, data structures, and algorithms. My proficiency extends to database management with MySQL, and I possess a deep understanding of computer networks and operating systems. With a passion for problem-solving, I thrive on transforming innovative ideas into practical, efficient solutions. My commitment to learning and a knack for clear communication make me a valuable team member in any tech-driven endeavor.</p>
          <img className="small-image" src={myImg} alt="mode" />


        </div>
      </section>

      <section id="projects">
        <div className="content">
          <h2>Projects</h2>
          <p>I've had the privilege of working on a diverse range of projects that showcase my skills as a software developer. Among my standout projects is an e-learning website built using the MERN stack. This platform encompasses user authentication, a dynamic courses catalog, and seamless online books integration, ensuring a robust and user-friendly learning experience. Additionally, I've delved into the world of ethical hacking, where I designed a basic firewall which performs its functionality just like a normal firewall available in the market. Lastly, I've contributed to the realm of network monitoring by developing a Java-based network monitoring application. This tool provides real-time insights into network traffic, making it a valuable asset for diagnosing connectivity issues. These projects represent just a glimpse of my portfolio, highlighting my passion for technology and problem-solving.</p>
          
        </div>
      </section>

      <section id="skills">
        <div className="content">
          <h2>Skills</h2>
          <p> As a software developer, I have honed my expertise in a variety of areas. In web development, I am proficient in the MERN stack, allowing me to craft dynamic and interactive web applications. My knowledge extends beyond front-end technologies like HTML, CSS, and JavaScript to encompass back-end technologies such as Node.js and Express. Furthermore, I possess strong skills in Java, making me well-equipped to tackle a wide range of software development tasks.  My experience also extends to database management with MySQL, as well as a deep understanding of computer networks and operating systems. With a penchant for problem-solving, I am driven to transform innovative ideas into efficient, real-world solutions. I am dedicated to continuous learning and am a clear and effective communicator, making me a valuable asset in any tech-driven endeavor.</p>
          <div className="skills-images">
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="content">
        <section id="contact">
  <div className="content">
    <h2>Contact Me</h2>
    <p>Feel free to connect with me through the following channels:</p>
    
    
    
    <a href="https://github.com/sambhavkumarjha" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    
    <a href="https://www.linkedin.com/in/sambhav-kumar-jha-9b499524a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnQWnqERATryPVerq3Ed5yw%3D%3D" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    
    <a href="mailto:sambhavjha02003@gmail.com">
      Email
    </a>
  </div>
</section>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default App;