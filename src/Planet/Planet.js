import React, { Component, useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import axios from 'axios';

function Planet(props) {

  const [show, setShow] = useState(false);
  const [planet, setPlanet] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showPlanet = () => {
    if (planet && show) {
      return (<table className="table">
        <thead className="text-capitalize">
          <th>name</th>
          <th>diameter</th>
          <th>climate</th>
          <th>population</th>
        </thead>
        <tbody>
          <tr>
            <td>{planet.name}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.population}</td>
          </tr>
        </tbody>
      </table>)
    } else if (!planet) {
      loadPlanet();
      return (<>Loading ...</>)
    } else {
      return (<>Loading ...</>)
    }
  };

  const loadPlanet = () => {
    if (props.url && !planet) {
      axios.get(props.url).then((response) => {
        // console.log(response.data);
        setPlanet(response.data);
        // showPlanet();
      });
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {planet ? planet.name : "loading ..."}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Planet {planet ? planet.name : "..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showPlanet()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default Planet