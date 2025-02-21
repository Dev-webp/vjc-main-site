import React, { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
// import Form from '../../Form';  // Import your Form component

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control modal visibility

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center p-0 md:p-5 lg:p-5 mt-0 lg:mt-4 tablet:mt-10">
      <button
        className="bg-saffron text-white py-3 px-10 rounded-full uppercase text-xl font-semibold border border-black italic hover:bg-black hover:text-white transition-all flex items-center space-x-2"
        onClick={openModal}  // Open the modal on button click
      >
        <span>Schedule Your Consultation Today</span>
        <FaArrowRight className="text-white text-xl" />
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 opacity-100 transition-opacity duration-500 ease-in-out"
          onClick={closeModal}  // Close the modal if user clicks outside
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full h-[35rem] mb-14 md:mb-0 lg:mb-0 transform transition-all duration-500 ease-in-out ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}  // Prevent click from closing when clicking inside the modal
          >
            <div className="mt-0 md:mt-3 lg:mt-3">
              {/* <Form />   */}
            </div>
            <button
              className="absolute top-2 right-2 p-2 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
              onClick={closeModal}  // Close button inside modal
            >
              <FaTimes className="text-xl text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
