import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nh1,h2,h3,h4,h5,h6 {font-family: \"Oswald\"}\nbody {font-family: \"Open Sans\"}\n" }} />
        {/* Navigation bar with social media icons */}
        <div className="w3-bar w3-black w3-hide-small">
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-facebook-official" /></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-instagram" /></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-snapchat" /></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-flickr" /></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-twitter" /></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-linkedin" /></a>
          <a href="#" className="w3-bar-item w3-button w3-right"><i className="fa fa-search" /></a>
        </div>
        {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
        <div className="w3-content" style={{maxWidth: '1600px'}}>
          {/* Header */}
          <header className="w3-container w3-center w3-padding-48 w3-white">
            <h1 className="w3-xxxlarge"><b>MARBELLA BLOG</b></h1>
            <h6>TENDÊNCIAS<span className="w3-tag" /></h6>
          </header>
          {/* Image header */}
          <header className="w3-display-container w3-wide" id="home">
            <img className="w3-image" src="/jane.jpg" alt="Fashion Blog" width={1600} height={1060} />
            <div className="w3-display-left w3-padding-large">
              <h1 className="w3-text-white" />
              <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>MARBELLA BLOG</b></h1>
              <h6><button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick="document.getElementById('subscribe').style.display='block'">SUBSCRIBE</button></h6>
            </div>
          </header>
          {/* Grid */}
          <div className="w3-row w3-padding w3-border">
            {/* Blog entries */}
            <div className="w3-col l8 s12">
              {/* Blog entry */}
              <div className="w3-container w3-white w3-margin w3-padding-large">
                <div className="w3-center">
                  <h3>O que o olhar pode transmitir ?</h3>
                  <h5> <span className="w3-opacity"> 1 de janeiro</span></h5>
                </div>
                <div className="w3-justify">
                  <img src="/img2.jpg" alt="Girl Hat" style={{width: '100%'}} className="w3-padding-16" />
                  <p><strong>Meu olhar!</strong> O olhar pode transmitir, de forma particular, aspectos da personalidade e dos sentimentos de um indivíduo e pode modificar-se com o envelhecimento. Partindo desse pressuposto, a região orbito palpebral assume importante papel como complemento dessa forma de expressão.</p>
                  <p className="w3-left"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up" /> Like</b></button></p>
                  <p className="w3-right"><button className="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies &nbsp;</b> <span className="w3-tag w3-white">1</span></button></p>
                  <p className="w3-clear" />
                  <div className="w3-row w3-margin-bottom" id="demo1" style={{display: 'none'}}>
                    <hr />
                    <div className="w3-col l2 m3">
                      <img src="/img14.jpg" style={{width: '90px'}} />
                    </div>
                    <div className="w3-col l10 m9">
                      <h4>George <span className="w3-opacity w3-medium">DEZEMBRO 3, 2022, 6:32 PM</span></h4>
                      <p>Ótima postagem no blog! Seguindo</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* Blog entry */}
              <div className="w3-container w3-white w3-margin w3-padding-large">
                <div className="w3-center">
                  <h3>É de tirar o chapéu</h3>
                  <h5> <span className="w3-opacity"> 8 de julho</span></h5>
                </div>
                <div className="w3-justify">
                  <img src="/img3.jpg" alt="Men in Hats" style={{width: '100%'}} className="w3-padding-16" />
                  <p>  Chapéus! A tendência deste verão são os chapéus masculinos!</p>
                  <p className="w3-left"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up" /> Like</b></button></p>
                  <p className="w3-right"><button className="w3-button w3-black" onclick="myFunction('demo2')"><b>Replies &nbsp;</b> <span className="w3-tag w3-white">2</span></button></p>
                  <p className="w3-clear" />
                  {/* Example of comment field */}
                  <div id="demo2" style={{display: 'none'}}>
                    <div className="w3-row">
                      <hr />
                      <div className="w3-col l2 m3">
                        <img src="/girl_train.jpg" style={{width: '90px'}} />
                      </div>
                      <div className="w3-col l10 m9">
                        <h4>Amber <span className="w3-opacity w3-medium">April 26, 2015, 10:52 PM</span></h4>
                        <p>Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                      </div>
                    </div>
                    <div className="w3-row w3-margin-bottom">
                      <div className="w3-col l2 m3">
                        <img src="/girl.jpg" style={{width: '90px'}} />
                      </div>
                      <div className="w3-col l10 m9">
                        <h4> É de tirar o chapéu <span className="w3-opacity w3-medium">8 de julho, 9:12 PM</span></h4>
                        <p>Love hats!!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog entry */}
              <div className="w3-container w3-white w3-margin w3-padding-large">
                <div className="w3-center">
                  <h3>Tempos Passados</h3>
                  <h5> <span className="w3-opacity">3 de setembro </span></h5>
                </div>
                <div className="w3-justify">
                  <img src="img/img4.jpg" alt="Runway" style={{width: '100%'}} className="w3-padding-16" />
                  <p><strong>Moda pessoal!</strong>
                  </p><p>É a soma total de experiência, estilo de vida, ocupação, idade, local de residência, modo de pensar e de expressão, ou seja, a expressão da individualidade, que é marca registrada de todos. Ter estilo é respeitar verdadeiramente seus valores, seu tipo de corpo e os momentos da vida que você está passando.</p>
                  <p className="w3-left"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up" /> Like</b></button></p>
                  <p className="w3-right"><button className="w3-button w3-black" onclick="myFunction('demo3')"><b>Replies &nbsp;</b> <span className="w3-tag w3-white">3</span></button></p>
                  <p className="w3-clear" />
                  {/* Example of comment field */}
                  <div id="demo3" style={{display: 'none'}}>
                    <hr />
                    <div className="w3-row w3-margin-bottom">
                      <div className="w3-col l2 m3">
                        <img src="/girl_mountain.jpg" style={{width: '90px'}} />
                      </div>
                      <div className="w3-col l10 m9">
                        <h4>Jane <span className="w3-opacity w3-medium">April 10, 2015, 7:22 PM</span></h4>
                        <p>That was a great runway show! Thanks for everything.</p>
                      </div>
                    </div>
                    <div className="w3-row w3-margin-bottom">
                      <div className="w3-col l2 m3">
                        <img src="/boy.jpg" style={{width: '90px'}} />
                      </div>
                      <div className="w3-col l10 m9">
                        <h4>John <span className="w3-opacity w3-medium">April 8, 2015, 10:32 PM</span></h4>
                        <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                    <div className="w3-row w3-margin-bottom">
                      <div className="w3-col l2 m3">
                        <img src="/w3images/girl_hood.jpg" style={{width: '90px'}} />
                      </div>
                      <div className="w3-col l10 m9">
                        <h4>Anja <span className="w3-opacity w3-medium">April 7, 2015, 9:12 PM</span></h4>
                        <p>Cant wait for the runway to start!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END BLOG ENTRIES */}
            </div>
            {/* About/Information menu */}
            <div className="w3-col l4">
              {/* About Card */}
              <div className="w3-white w3-margin">
                <img src="/img5.jpg" alt="Jane" style={{width: '100%'}} className="w3-grayscale" />
                <div className="w3-container w3-black">
                  <h4> O meu nome</h4>
                  <p>Apenas eu, eu e eu, explorando o universo do desconhecimento. Eu tenho um coração de amor e um interesse de lorem ipsum e mauris neque quam blog. Quero compartilhar meu mundo com você.</p>
                </div>
              </div>
              <hr />
              {/* Posts */}
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                  <li className="w3-padding-16">
                    <img src="/img12.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">LOOKS PARTY</span>
                    <br />
                    <span />
                  </li>
                  <li className="w3-padding-16">
                    <img src="/img11.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large"> CHAPÉUS FEMININOS</span>
                    <br />
                    <span />
                  </li>
                  <li className="w3-padding-16">
                    <img src="/img9.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">PAISAGEM</span>
                    <br />
                    <span />
                  </li>
                  <li className="w3-padding-16">
                    <img src="/img10.jpg" alt="Image" className="w3-left w3-margin-right w3-sepia" style={{width: '50px'}} />
                    <span className="w3-large">CRUELLA</span>
                    <br />
                    <span />
                  </li>
                </ul>
              </div>
              <hr />
              {/* Advertising */}
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Anúnciar</h4>
                </div>
                <div className="w3-container w3-white">
                  <div className="w3-container w3-display-container w3-light-grey w3-section" style={{height: '200px'}}>
                    <span className="w3-display-middle">O seu anúncio aqui</span>
                  </div>
                </div>
              </div>
              <hr />
              {/* Tags */}
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">Fashion</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Hats</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Norway</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sweaters</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Deals</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Accessories</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Jeans</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Trends</span>
                  </p>
                </div>
              </div>
              <hr />
              {/* Inspiration */}
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Inspiração</h4>
                </div>
                <div className="w3-row-padding w3-white">
                  <div className="w3-col s6">
                    <p><img src="/img13.jpg" alt="Jeans" style={{width: '100%'}} /></p>
                    <p><img src="/img7.png" alt="Jeans" style={{width: '100%'}} /></p>
                  </div>
                  <div className="w3-col s6">
                    <p><img src="/img6.jpg" alt="Men in Hats" style={{width: '100%'}} className="w3-grayscale" /></p>
                    <p><img src="/img8.jpg" alt="Jeans" style={{width: '100%'}} /></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>ME SIGA</h4>
              </div>
              <div className="w3-container w3-xlarge w3-padding">
                <i className="fa fa-facebook-official w3-hover-opacity" />
                <i className="fa fa-instagram w3-hover-opacity" />
                <i className="fa fa-snapchat w3-hover-opacity" />
                <i className="fa fa-pinterest-p w3-hover-opacity" />
                <i className="fa fa-twitter w3-hover-opacity" />
                <i className="fa fa-linkedin w3-hover-opacity" />
              </div>
            </div>
            <hr />
            {/* Subscribe */}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>Se inscrever</h4>
              </div>
              <div className="w3-container w3-white">
                <p>Digite seu e-mail abaixo e seja notificado sobre as últimas postagens do blog.</p>
                <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" style={{width: '100%'}} /></p>
                <p><button type="button" onclick="document.getElementById('subscribe').style.display='block'" className="w3-button w3-block w3-red">Subscribe</button></p>
              </div>
            </div>
            {/* END About/Intro Menu */}
          </div>
          {/* END GRID */}
        </div>
        {/* END w3-content */}
        {/* Subscribe Modal */}
        <div id="subscribe" className="w3-modal w3-animate-opacity">
          <div className="w3-modal-content" style={{padding: '32px'}}>
            <div className="w3-container w3-white">
              <i onclick="document.getElementById('subscribe').style.display='none'" className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right" />
              <h2 className="w3-wide">SUBSCRIBE</h2>
              <p>Join my mailing list to receive updates on the latest blog posts and other things.</p>
              <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" /></p>
              <button type="button" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="w3-container w3-dark-grey" style={{padding: '32px'}}>
          <a href="#" className="w3-button w3-black w3-padding-large w3-margin-bottom"><i className="fa fa-arrow-up w3-margin-right" />To the top</a>
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </footer>
      </div>
  );
}