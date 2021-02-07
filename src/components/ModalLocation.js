import React from 'react'
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

const alamat = [
  "Kulina",
  "Ambarukmo Plaza",
  "Hyatt",
  "Apartemen Melati",
  "Kampus UII",
];

function ModalLocation(showModal, handleClose) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    React.useEffect(() => {
       const results = alamat.filter(person =>
         person.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
   
     return (
    
        <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cek makanan yang tersedia di lokasi kamu!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input
           type="text"
           placeholder="Search"
           value={searchTerm}
           onChange={handleChange}
         />
         <ul>
            {searchResults.map(item => (
                <p><FontAwesomeIcon
                  icon={faMap}
                  className="mr-1"
                ></FontAwesomeIcon>{item}</p>
           ))}
         </ul>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     );
   }

export default ModalLocation
