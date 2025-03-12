// Default Imports
import { useState } from "react";

// Custom Imports
import agent from "../api/agent";

const Sample = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false); // New state to track if the button has been clicked

  const getStatus = async (): Promise<any> => {
    setClicked(true);  // Set clicked to true when the button is clicked
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const status = await agent.Requests.getStatus();
      const resp = status.data;

      if (resp.status === 200) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (err: any) {
      console.log("error getting status from server", err.message);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <button
        onClick={getStatus}
        style={{
          width: 200,
          height: 100,
          border: "none",
          marginBottom: "10px",
          padding: "5px",
          fontWeight: 800,
          fontSize: "1.2em",
          cursor: "pointer",
          backgroundColor: loading ? "yellow" : error ? "red" : success ? "limegreen" : "grey"
        }}
      >Get Server Status</button>
      {clicked && (
        loading ? (
          <p>Loading, please wait...</p>
        ) : error ? (
          <p>Error, try again later...</p>
        ) : success ? (
          <p>Server is up!</p>
        ) : null
      )}
    </div>
  );
};

export default Sample;
