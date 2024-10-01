import { toast } from 'react-toastify';

const showToast = (message: string) => {
  toast(message, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: false,

    style: {
      background: '#989898F2',
      borderRadius: '8px',
      margin: '0px 16px 31px',
      padding: '12px 16px',
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 600,
    },
  });
};

export default showToast;
