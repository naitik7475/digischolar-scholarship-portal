// components/ContactModal.tsx
import { Modal } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

interface ContactModalProps {
  openModal: boolean;
  onCloseModal: () => void;
}

export function ContactModal({ openModal, onCloseModal }: ContactModalProps) {
  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800">
        {/* Top Gradient Line */}
        <div className="absolute inset-x-0 top-0 h-2 rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500"></div>

        {/* Modal Header */}
        <Modal.Header className="relative border-0 pt-6">
          <h3 className="w-full text-center text-2xl font-bold text-gray-800 dark:text-white">
            Contact Information
          </h3>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body className="space-y-6 py-4">
          <div className="space-y-4">
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <HiPhone className="text-blue-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Phone</p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">+91-1123782698</p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">+91-1123782387</p>
              </div>
            </div>

            {/* Email IDs */}
            <div className="flex items-center space-x-4">
              <HiMail className="text-blue-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Email</p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">contact@digischolar.ac.in</p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">support@digischolar.ac.in</p>
              </div>
            </div>

            {/* Postal Address */}
            <div className="flex items-center space-x-4">
              <HiLocationMarker className="text-blue-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Address</p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">
                302-C, Shastri Bhawan, 
                </p>
                <p className="text-base font-semibold text-gray-800 dark:text-white">
                New Delhi, India - 110001
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}
