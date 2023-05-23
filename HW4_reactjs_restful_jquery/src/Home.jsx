import './style.css';
import React from 'react';
import Typed from 'typed.js';


function Home() {
  const typer = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: ['Angel Wang', 'A Student', 'A Painter', 'An Engineer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" class="home">
      <div class="container">
        <div class="home-content">
          <h1>I'm&nbsp;
            <span ref={typer}></span>
          </h1>
          <p>Student, Painter, Engineer</p>
          <ul class="list-unstyled list-social">
            <li><a href="https://www.facebook.com/angel870326" target="_blank"><i class="bi bi-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/angelssuyunwang" target="_blank"><i class="bi bi-instagram"></i></a></li>
            <li><a href="https://www.github.com/angel870326" target="_blank"><i class="bi bi-github"></i></a></li>
            <li><a href="https://www.youtube.com/@angelssuyunwang" target="_blank"><i class="bi bi-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
