import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import NewNoteForm from "./NewNoteForm";
import { RichTextEditor } from "@mantine/rte";
import { useState } from "react";

interface NewNoteProps {
  onClose: () => void;
}

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const NewNoteModal = ({ onClose }: NewNoteProps) => {
  const [value, onChange] = useState(initialValue);

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col h-full pt-3">
        <div className="px-3 pb-4 shadow-sm">
          <div className="relative mt-5 text-center">
            <div className="flex justify-between lg:px-[4rem]">
              <button
                className="mr-1 text-blue-500 focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
              <span className="font-medium mr-4">New note</span>
              <div className="">
                <button
                  className="mr-1 text-blue-500 focus:outline-none"
                  onClick={onClose}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <RichTextEditor value={value} onChange={onChange} />;
        {/* <NewNoteForm /> */}
      </div>
    </Modal>
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <Dialog
      className="fixed top-0 right-0 left-0 lg:left-96 bottom-0 z-[1000]"
      onClose={onClose}
      open={true}
    >
      <div className="flex flex-col h-full px-1 pt-4 sm:block sm:p-0">
        <Dialog.Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="fixed inset-0 bg-black/40"
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            y: "100%",
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="z-0 flex flex-col h-full bg-white rounded-t-lg shadow-xl lg:mt-0 md:mt-0 mt-[4rem]"
        >
          {children}
        </motion.div>
      </div>
    </Dialog>
  );
};

export default NewNoteModal;
