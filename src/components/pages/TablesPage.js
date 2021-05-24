import React, { useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
} from "mdbreact";
import axios from "axios";
import moment from "moment";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const TablesPage = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [statusSelected, setStatusSelected] = useState("");
  const [description, setDescription] = useState("");
  const getAllCrimes = async () => {
    const response = await axios.get(
      "https://78113fba70ac.ngrok.io/crime-2199/us-central1/api/crime/admin/get-all-crimes"
    );

    console.log(response.data);
    setCrimeData(response.data);
  };
  useEffect(() => {
    getAllCrimes();
  }, []);

  const handleChangeStatus = async (id) => {
    try {
      const response = await axios.post(
        "https://78113fba70ac.ngrok.io/crime-2199/us-central1/api/crime/admin/update-crime-report",
        { id, verified: true, rejected: false, description }
      );
      console.log(response.data);
      getAllCrimes();
      setModalOpen(false);
    } catch (err) {
      alert(err);
    }
  };

  const renderModal = () => {
    const selectedData = crimeData[clickedIndex];
    return (
      <MDBModal
        size="lg"
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
      >
        <MDBModalHeader toggle={() => setModalOpen(!modalOpen)}>
          {selectedData.crimeType} in {selectedData.city} on{" "}
          {moment.unix(selectedData.created).format("MM/DD/YYYY")}
        </MDBModalHeader>
        <MDBModalBody>
          <span>
            Reported By: <b>{selectedData.firstName}</b>
          </span>
          <br />
          <span>
            Description : <b>{selectedData.description}</b>
          </span>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selectedData.images.map((imgUrl) => (
                  <img
                    src={imgUrl}
                    alt=""
                    style={{
                      width: "20vw",
                      height: "20vh",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>

          <select
            className="browser-default custom-select"
            onChange={(e) => setStatusSelected(e.target.value)}
          >
            <option>Change Status</option>
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
            <option value="pending">Pending</option>
          </select>
          <br />
          <label htmlFor="exampleFormControlTextarea1">
            Add Message For user
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={() => setModalOpen(!modalOpen)}>
            Close
          </MDBBtn>
          <MDBBtn
            color="primary"
            onClick={() => handleChangeStatus(selectedData.crimeId)}
          >
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  };

  return (
    <>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">Crimes List</h4>
            </MDBView>
            <MDBCardBody>
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th>Crime Type</th>
                    <th>Reported By</th>
                    <th>Mobile Number</th>
                    <th>Approval Status</th>
                    <th>Change Status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {crimeData.length > 0 ? (
                    <>
                      {crimeData.map((_data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{_data.city || "Mumbai"}</td>
                          <td>{_data.pincode || "401021"}</td>
                          <td>{_data.crimeType || "Robbery"}</td>
                          <td>{_data.firstName || "Anonymous"}</td>
                          <td>
                            <a href={`tel:${_data.mobile}`}>
                              {_data.mobile || "NA"}
                            </a>
                          </td>
                          <td>
                            {_data.verified
                              ? "Approved"
                              : _data.rejected
                              ? "Rejected"
                              : "Pending"}
                          </td>
                          <td>
                            <MDBBtn
                              outline
                              size="sm"
                              color={
                                _data.verified
                                  ? "primary"
                                  : _data.rejected
                                  ? "danger"
                                  : "warning"
                              }
                              onClick={() => {
                                setClickedIndex(index);
                                setModalOpen(true);
                              }}
                            >
                              Update
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                      {renderModal()}
                    </>
                  ) : null}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default TablesPage;
