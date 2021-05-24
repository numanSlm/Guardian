import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardText,
} from "mdbreact";
import axios from "axios";

const AdminCardSection1 = () => {
  const [crimeStats, setCrimeStats] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://ace70632d186.ngrok.io/crime-2199/us-central1/api/crime/crime-stats"
      );
      setCrimeStats(response.data);
    };

    getData();
  }, []);

  return (
    <MDBRow className="mb-4">
      <MDBCol xl="3" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="edit" className="red accent-2" />
            <div className="data">
              <p>Cases Reported</p>
              <h4>
                <strong>{crimeStats.casesReported || ""}</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "25%" }}
              ></div>
            </div>
            <MDBCardText>Better than last week (25%)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl="3" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="check-square" className="success-color" />
            <div className="data">
              <p>Cases Resolved</p>
              <h4>
                <strong>{crimeStats.casesApproved || ""}</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar bg grey"
                role="progressbar"
                style={{ width: "25%" }}
              ></div>
            </div>
            <MDBCardText>Worse than last week (25%)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl="3" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="chart-pie" className="warning-color" />
            <div className="data">
              <p>Cases Rejected</p>
              <h4>
                <strong>{crimeStats.casesRejected || ""}</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar grey darken-2"
                role="progressbar"
                style={{ width: "75%" }}
              ></div>
            </div>
            <MDBCardText>Worse than last week (75%)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl="3" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="chart-bar" className="primary-color" />
            <div className="data">
              <p>Cases Pending</p>
              <h4>
                <strong>{crimeStats.casesPending || ""}</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "25%" }}
              ></div>
            </div>
            <MDBCardText>Better than last week (25%)</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default AdminCardSection1;
