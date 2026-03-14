
import "./Origin.scss"


const Origin = () => {


  return (
    <>
      <div className="hero">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/src/assets/CORSAIR_Header_2024_WQHD_2.webm" type="" />
        </video>

        <div className="content-vid">
          <h3>EVERYTHING YOU NEED</h3>
          <h1>TO PERFORM YOUR BEST</h1>
          <div className="arrow">

          </div>
        </div>
      </div>

      <div id='laptoplist' class="container-fluid text-center">
        <div class="row align-items-center">
          <div id='laptop' class="col">
            <img src="./src/assets/computer2.jpeg" alt="" />
            <h5>Gamming desktops</h5>
          </div>
         
          <div id='laptop' class="col">
            <img src="./src/assets/super-computer1.avif" alt="" />
            <h5>prebuilt gamming pc</h5>
          </div>
          <div id='laptop' class="col">
            <img src="./src/assets/computer2.jpeg" alt="" />
            <h5>Workstations</h5>
          </div>
          <div id='laptop' class="col">
            <img src="./src/assets/computer2.jpeg" alt="" />
            <h5>Accessories</h5>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="pic-text">
          <h1>Play Now,<br />
            Pay Later</h1>
          <p>easy Pre-Approved Online Financing Available On All <br />
            Systems For Qualifying Customers</p>
          <button type='button'>Learn More </button>
        </div>
      </div>
      <div id='section3-background' class="container-fluid text-center">
        <div class="row align-items-center">
          <div id='section3' class="col">
            <img src="src/assets/support.svg" alt="" />
            <h1>FINANCING</h1>
            <h3>PLAY NOW PAY LATER</h3>
            <ul>
              <li>Easy to apply</li>
              <li>Get instant pre-approved offers and rates</li>
              <li>Twelve months same as cash available*</li>
              <li>No prepayment penalties</li>
              <li>Up to 36 months of payment options</li>
            </ul>
            <button type='button'>LEARN MORE</button>
          </div>
          <div id='section3' class="col">
            <img src="src/assets/support.svg" alt="" />
            <h1>AFFILATES</h1>
            <h3>JOIN THE BEST</h3>
            <ul>
              <li>Easy to apply</li>
              <li>Get instant pre-approved offers and rates</li>
              <li>Twelve months same as cash available*</li>
              <li>No prepayment penalties</li>
              <li>Up to 36 months of payment options</li>
            </ul>
            <button type='button'>CLICK TO JOIN</button>

          </div>
          <div id='section3' class="col">
            <img src="src/assets/support.svg" alt="" />
            <h1>SUPPORT</h1>
            <h3>US BASED SUPPORT</h3>
            <ul>
              <li>Easy to apply</li>
              <li>Get instant pre-approved offers and rates</li>
              <li>Twelve months same as cash available*</li>
              <li>No prepayment penalties</li>
              <li>Up to 36 months of payment options</li>
            </ul>
            <button type='button'>LEARN MORE</button>
          </div>

        </div>
      </div>
      <div id="section4" class="container-fluid">
        <div class="row">
          <div id="text4" class="col">
            <img src="src/assets/emblem.webp" alt="" />
            <h3>ASSEMBLED AND SUPPORTED</h3>
            <h6>IN THE USA</h6>
            <hr />
            <p>By buying an ORIGIN PC, you get access to a fast and powerful PC as well as supporting  <br />jobs based in the United States.</p>
            <button type='button'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div id="lastsection" class="container-fluid text-center">
        <div class="row align-items-start">
          <h3>INDUSTRY AWARDS</h3>
          <div class="col">
            <img src="src/assets/maxpc-kickass.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/pcmag-editors-choice.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/toms-guide-gaming-desktops.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/techradar-editors-choice.webp" alt="" />
          </div>
        </div>
        <div class="row align-items-start mt-3 ">
          <div class="col">
            <img src="src/assets/toms-hardware-readers-choice.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/tweaktown-editors-choice.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/tweaktown-best-performance.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/pc-perspective-editors-choice.webp" alt="" />
          </div>
          <div class="col">
            <img src="src/assets/ces-innovations.webp" alt="" />
          </div>
        </div>
      </div>




    </>
  )
}

export default Origin