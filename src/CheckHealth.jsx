import apiClient from "./apiClient";
import { useEffect, useState } from "react";

export default function CheckHealth() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    console.log("Requesting:", apiClient.defaults.baseURL + "/api/health-check");

    apiClient.post("/api/health-check")
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
        setStatus({ success: false, status: "ERROR", data: err.message });
      });
  }, []);

  return (
    <div>
      <h2>Health Check</h2>
      {status ? (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
