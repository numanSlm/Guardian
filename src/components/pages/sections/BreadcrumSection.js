import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBFormInline,
  MDBBtn,
} from "mdbreact";

const BreadcrumSection = ({ signOut }) => {
  return (
    <MDBCard className="mb-5">
      <MDBCardBody
        id="breadcrumb"
        className="d-flex align-items-center justify-content-between"
      >
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBFormInline className="md-form m-0">
          <MDBBtn
            size="sm"
            color="primary"
            className="my-0"
            type="submit"
            onClick={signOut}
          >
            Signout
            <MDBIcon icon="sign-out-alt" style={{ marginLeft: "10px" }} />
          </MDBBtn>
        </MDBFormInline>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BreadcrumSection;
