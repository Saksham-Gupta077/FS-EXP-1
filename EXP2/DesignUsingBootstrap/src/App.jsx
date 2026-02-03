import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Learning Bootstrap</h2>

      {/* Form Card */}
      <div className="card p-3 mt-4">
        <h5 className="card-title">User Form</h5>

        <input
          className="form-control mt-2"
          placeholder="Enter your name"
        />

        <input
          className="form-control mt-2"
          placeholder="Enter your email"
        />

        <button className="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
