// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { AnimatePresence, motion } from "framer-motion";

// const Test = () => {
//   const [open, setOpen] = useState(true);

//   return (
//     <>
//       <div className="w-full h-full">
//         <button onClick={() => setOpen(true)} className="text-blue-500">
//           +
//         </button>
//       </div>
//         {open && <AddFavorite onClose={() => setOpen(false)} />}
//     </>
//   );
// };

// interface AddFavoriteProps {
//   onClose: () => void;
// }

// const AddNewNote = ({ onClose }: AddFavoriteProps) => {
//   return (
//     <Modal onClose={onClose}>
//       <div className="flex flex-col h-full pt-3">
//         <div className="px-3 pb-4 shadow-sm">
//           <div className="relative mt-5 text-center">
//             <div className="absolute inset-y-0 left-0">
//               <button
//                 className="mr-1 text-blue-500 focus:outline-none"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>
//             </div>
//             <span className="font-medium">New note</span>
//             <div className="absolute inset-y-0 right-0">
//               <button
//                 className="mr-1 text-blue-500 focus:outline-none"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// interface ModalProps {
//   onClose: () => void;
//   children: React.ReactNode;
// }

// const Modal = ({ onClose, children }: ModalProps) => {
//   return (
//     <Dialog className="fixed top-0 right-0 left-0 lg:left-96 bottom-0 z-[1000]" onClose={onClose} open={true}>
//       <div className="flex flex-col justify-center h-full px-1 pt-4 text-center sm:block sm:p-0">
//         <Dialog.Overlay
//           as={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
//           }}
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
//           }}
//           className="fixed inset-0 bg-black/40"
//         />

//         <motion.div
//           initial={{ y: "100%" }}
//           animate={{
//             y: 0,
//             transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
//           }}
//           exit={{
//             y: "100%",
//             transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
//           }}
//           className="z-0 flex flex-col h-full bg-white rounded-t-lg shadow-xl lg:mt-0 md:mt-0 mt-[4rem] lg:mr-3"
//         >
//           {children}
//         </motion.div>
//       </div>
//     </Dialog>
//   );
// }

// export default Test;

const Test = () => {
  return (
    <div>Test</div>
  )
}
export default Test