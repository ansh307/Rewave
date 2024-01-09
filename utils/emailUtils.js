import { toast } from 'react-toastify';

export const notify = (emailStatus) => {
  const message = emailStatus
    ? 'Email submitted successfully'
    : 'Email exists';

  const toastType = emailStatus ? toast.success : toast.error;

  toastType(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const submitEmail = async (email, onSuccess, onError) => {
  try {
    const response = await fetch('http://localhost:3001/api/submit-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    console.log(response.status, response);
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  } catch (error) {
    console.error('Error submitting email:', error);
    onError();
  }
};
