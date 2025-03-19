// // import { useEffect } from "react";
// // import "./modal.css";

// // const Modal = ({ isOpen, onClose, title, message, image, extraImages, onConfirm }) => {
  
// //   useEffect(() => {
// //     if (!isOpen) return;

// //     const handleEscape = (event) => {
// //       if (event.key === "Escape") onClose();
// //     };

// //     document.addEventListener("keydown", handleEscape);
// //     return () => document.removeEventListener("keydown", handleEscape);
// //   }, [isOpen, onClose]);

// //   if (!isOpen) return null;

// //   return (
// //     <div className="dialog-overlay">
// //       <div className="dialog-box">
// //         <img src={image} alt="Main" className="dialog-main-image" />
// //         <h2 className="dialog-title">{title}</h2>
// //         <p className="dialog-message">{message}</p>
// //         <div className="dialog-extra-images">
// //           {extraImages && extraImages.map((img, index) => (
// //             <img key={index} src={img} alt={`Extra ${index}`} className="dialog-extra-image" />
// //           ))}
// //         </div>
// //         <div className="dialog-buttons">
// //           <button className="cancel-button" onClick={onClose}>Cancel</button>
// //           <button className="confirm-button" onClick={onConfirm}>Confirm</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export default function Modal() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Modal title
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={(theme) => ({
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: theme.palette.grey[500],
//           })}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
//             magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
//             ullamcorper nulla non metus auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }
