import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";
import GoogleMapReact from "google-map-react";

const MapSection = () => {
  return (
    <MDBCol lg="6" className="mb-4">
      <MDBCard style={{ width: "75vw", height: "70vh" }}>
        <MDBCardHeader>Google Map</MDBCardHeader>
        <MDBCardBody
          style={{ width: "100%", height: "100%" }}
          className="text-center"
        >
          {/* <GoogleMapReact
            defaultCenter={{ lat: 10, lng: 10 }}
            defaultZoom={7}
            
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15064.292514470584!2d72.86336325!3d19.2791858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621764535982!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%" }}
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default MapSection;
