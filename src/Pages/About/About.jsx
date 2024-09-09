import "./About.css";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
export default function About() {
  return (
    <div>
      <div className="section about-header-section">
        <div className="container">
          <div className="about-header-container text-center">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="about-description section">
        <div className="container">
          <div className="about-description-container">
            <img className="desc-img" src="/src/assets/basil-leaf.png" alt="" />
            <div className="about-content row py-3 gap-3 flex-wrap flex-lg-nowrap">
              <div className="description col-12 col-lg-6">
                <h2>We Are Your Favourite Store.</h2>
                <p>
                  Tuas quisquam quo gravida proident harum, aptent ligula anim
                  consequuntur, ultrices mauris, nunc voluptates lobortis,
                  varius, potenti placeat! Fuga omnis. Cubilia congue.
                  Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos
                  ultrices natus distinctio ultrices consequuntur numqu.
                </p>
                <p>
                  Officiis fuga harum porro et? Similique rhoncus atque! Netus
                  blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                  tellus elit, hic sem tenetur anim amet quas, malesuada
                  proident platea corrupti expedita.
                </p>
              </div>
              <div className="about-img-container  col-12 col-lg-6">
                <img
                  className="about-img"
                  src="/src/assets/banner-01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Statistics section">
        <div className="container">
          <div className="Statistics-container text-center">
            <h4 className="mt-3">Numbers Speak For Themselves!</h4>
            <div className="Statistics-content d-flex justify-content-between py-4">
              <div>
                <span>5,000 +</span>
                <p>Curated Products</p>
              </div>
              <div>
                <span>800 +</span>
                <p>Curated Products</p>
              </div>
              <div>
                <span>40 +</span>
                <p>Product Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="organic-quality section">
        <div className="container">
          <div className="organic-quality-content row flex-wrap flex-lg-nowrap">
            <div className="col-12 col-lg-6 ">
              <div className="slider">
                <img
                  className="slider-img"
                  src="/src/assets/image-01.jpg"
                  alt=""
                />
                <img
                  className="slider-img"
                  src="/src/assets/image-02.jpg"
                  alt=""
                />
                <img
                  className="slider-img"
                  src="/src/assets/farming01.jpg"
                  alt=""
                />
                <img
                  className="slider-img"
                  src="/src/assets/farming02.jpg"
                  alt=""
                />
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div>
                <img src="/src/assets/client.png" alt="" />
                <span className="ms-4">Mila Kunit</span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex gap-3">
                <div className="organic-img-container">
                  <img
                    className="organic-img"
                    src="/src/assets/organic-badge-freeimg.png"
                    alt="organic badge picture"
                  />
                </div>
                <div>
                  <h3>Certified Products</h3>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
