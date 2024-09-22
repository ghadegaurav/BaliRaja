import React, { useState } from 'react'
import Modal from '../components/Modal'
import Accordion from '../components/Accordion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function modal() {

  const notify = () => toast.warn('🦄 Wow so easy!');

  const [modalOpen, setModalOpen] = useState(false);
  const data = [
    {
      "title": "Accordion 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit fermentum, tincidunt nibh non, lacinia ex."
    },
    {
      "title": "Accordion 2",
      "content": "Praesent id est justo. In hac habitasse platea dictumst. Sed sit amet malesuada justo, at varius lorem."
    },
    {
      "title": "Accordion 3",
      "content": "Vivamus elementum lorem id arcu volutpat faucibus. Morbi aliquam nisl quis magna maximus varius."
    }
  ]

  return (
    <div>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer/>
      </div>
      <>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </>
      <div>
        <Accordion data={data}>

        </Accordion>
      </div>
    </div>
  );
}

export default modal