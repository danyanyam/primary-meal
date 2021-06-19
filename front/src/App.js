import "./App.css";

function App() {
  return (
    <>
      <div className="logo">Primarymeal</div>
      <div className="bubble-top"></div>
      <div className="bubble-bottom"></div>
      <div className="glass">
        <h1>
          Select your ingredients and explore endless recipe ideas, check
          nutrition and choose portion size!
        </h1>
        <div className="form-container">
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="Select one or several ingredients"
            />
            <button className="search">Submit</button>
          </form>
        </div>
        <div class="nav-buttons">
          <button class="nav-button">Show Combination</button>
          <button class="nav-button">Nutrition and portion size</button>
        </div>
      </div>
    </>
  );
}

export default App;