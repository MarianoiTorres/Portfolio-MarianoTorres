import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Modal.module.css'

const ModalSubmit = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Gracias por tu propuesta!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        Tu propuesta ha sido recibida. Evaluaré tu propuesta y te proporcionaré una respuesta pronto. Si necesitas más información, no dudes en ponerte en contacto conmigo. ¡Gracias!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className={style.buttonClose} onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      
      );
}

export default ModalSubmit