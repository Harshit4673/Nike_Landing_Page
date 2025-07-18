import Navigation from "./components/Navigation";
const App = () => {
  return (
    <>
      <Navigation />
        
      <div>
        <section>
          <div>
            <img
              id="footballimage"
              src="/images/image1.png"
              alt="footballpic"
            />
          </div>
          <div className="footballtext">
            <p>Look of Football</p>
            <h1 id="total90">TOTAL 90</h1>
            <p>Made famous by the icons. Reimagined for every legends.</p>
            <button id="shop">Shop</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
