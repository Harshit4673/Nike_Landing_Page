import './Featured.css'
const Featured = () => {
  return (
    <>
      <section className="featured">
        <div id="fe-text">Featured</div>
        <div className="image-row">
          <div className="image-col">
            <div className="image-overlay-container">
              <img src="./images/fe01.png" alt="image1" />
              <div className="image-overlay">
                <h4>Spikes Off, Style On</h4>
                <h3>Nike Air Superfly</h3>
                <button id="shop-fe">Get Notified</button>
              </div>
            </div>
          </div>
          <div className="image-col">
            <div className="image-overlay-container">
              <img src="./images/fe02.png" alt="image2" />
              <div className="image-overlay" id="image-overlayfe02">
                <h4>Nike Fotoball</h4>
                <h3>Introducing Scary Good Pack</h3>
                <button id="shop-fe">Shop</button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-row">
          <div className="image-col">
            <div className="image-overlay-container">
              <img src="./images/fe03.png" alt="image1" />
              <div className="image-overlay fe03">
                <h4>Own Every Swing</h4>
                <h3>Tennis</h3>
                <button id="shop-fe">Shop</button>
              </div>
            </div>
          </div>
          <div className="image-col">
            <div className="image-overlay-container">
              <img src="./images/fe04.png" alt="image2" />
              <div className="image-overlay">
                <h4>Jordan Streetwear</h4>
                <h3>Real Ones Know</h3>
                <button id="shop-fe">Shop Apparel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Featured;