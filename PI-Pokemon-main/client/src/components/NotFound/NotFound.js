import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    Navigate.push("/home");
  };

  return (
    <div className={`not-found-modal ${show ? "show" : ""}`}>
      <div className="not-found-header">
        <h2>404 Error</h2>
      </div>
      <div className="not-found-body">
        <p>Sorry, the pokePage you are looking for could not be found.</p>
      </div>
      <div className="not-found-footer">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default NotFound;
