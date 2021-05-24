import React from "react";
import { MDBRow } from "mdbreact";
import AdminCardSection1 from "./sections/AdminCardSection1";
import BreadcrumSection from "./sections/BreadcrumSection";
import ChartSection1 from "./sections/ChartSection1";
import MapSection from "./sections/MapSection";

const DashboardPage = ({ signOut }) => {
  return (
    <React.Fragment>
      <BreadcrumSection signOut={signOut} />
      <AdminCardSection1 />
      <ChartSection1 />
      <MDBRow className="mb-4">
        <MapSection />
      </MDBRow>
    </React.Fragment>
  );
};

export default DashboardPage;
