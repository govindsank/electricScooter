import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* hii */}
        <header id="header" class="d-flex flex-column justify-content-center">


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ElectroMotive</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item p-3">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" href="#">About Us</a>
        </li>
      </ul>
      <span class="navbar-text">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>Mobile:7736335580
      </span>
    </div>
  </div>
</nav>

</header>
<main className='main'>
  {/* <div xlass="slider"><center>
<div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./ev scooter 1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./ev scooter 2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./Banner_Home.jpg" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</center>
</div> */}<div>
  <div><p><h3><center>This is company based on make in india project.
    The prodects we manufacture are all sourced from india itself.</center></h3></p></div>
<div className='bottom'>
  <div className='row '>
    <div className='col-4'>
      <div class="row card">
        <div>
          <img src='./IMG-20240423-WA0010-removebg-preview.png'/>
        </div>
        <div className='row '><h2>Scooty electric</h2></div>
      </div>
    </div>
    <div className='col-4'>
    <div class="row card">
        <div>
          <img src='./access1-removebg-preview.png'/>
        </div>
        <div className='row '><h2>Access electric</h2></div>
      </div>
    </div>
    <div className='col-4'>
    <div class="row card">
        <div>
          <img src='./ROADEO-removebg-preview.png'/>
        </div>
        <div className='row '><h2>Roadeo electric</h2></div>
      </div>
    </div>
  </div>

</div>
</div>


<footer>
  hi
</footer>
   </main>
    </>
  )
}

export default App
