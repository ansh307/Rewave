import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


module.exports.EmailContext = function (email, setEmail) {
    const notify = () => toast.success('Email submitted successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleSubmit = async (email, setEmail) => {
        try {
            const response = await fetch('http://localhost:3001/api/submit-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Handle success, maybe reset the form or show a success message
                console.log('Email submitted successfully');
                setEmail('');

            } else {
                // Handle error, maybe show an error message to the user
                console.error('Failed to submit email');
            }
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    module.exports.handleButtonClick = () => {
        handleSubmit(email, setEmail);
        notify();
    };
};



