import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
    

      <h1 className="text-center">Quick Access</h1>

      {/* Cards Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                  <h5>Access your Gmail.</h5>
                </p>
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  className="card-link"
                >
                  <h3>Gmail</h3>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Watch videos on YouTube.</h5>
                <p className="card-text">
                  
                </p>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="card-link"
                >
                  <h3>YouTube</h3>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Access your Google Drive.</h5>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  className="card-link"
                >
                  <h3>Drive</h3>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
