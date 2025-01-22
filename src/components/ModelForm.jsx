import React, { useState } from 'react';
import './ModalForm.css';

function ModalForm({ modaltype }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal(); // Close modal after submission
  };


  return (
    <div className="App">
      <button onClick={openModal} className="open-modal-btn">
        {modaltype}
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modaltype}</h2>
            {modaltype==="Login Page" ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                    />
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="close-modal-btn"
                >
                  Close
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Contact:
                    <input
                      type="number"
                      name="contact"
                    />
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="close-modal-btn"
                >
                  Close
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalForm;
