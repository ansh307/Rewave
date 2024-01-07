"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetStartedContent = () => {

    const [email, setEmail] = useState('');

    const notify = () => toast.success('Email submitted successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleSubmit = async () => {
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

    const handleButtonClick = () => {
        handleSubmit();
        notify();
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-40 mt-20 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center ml-4 m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-5 text-5xl font-bold text-white max-w-[1050px] w-auto h-auto"
                >
                    <span>
                        Transform Your Workflow Today

                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 mt-5 mb-2 max-w-[720px]"
                >
                    Are you ready to revolutionize the way you work? Join the thousands who have already experienced the power of Rewave.
                    Elevate your productivity, enhance your management skills, and embrace a new era of organization.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex  text-xl font-bold text-white max-w-[1050px] w-auto h-auto"
                >
                    <span>
                        Get started now!
                    </span>
                </motion.div>


                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className="flex flex-row  items-start mt-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        // value={email}
                        // onChange={handleInputChange}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pr-40 pl-5 py-2 mb-4 border rounded-l"
                    />
                    <button
                        // onClick={handleSignup} 
                        onClick={handleButtonClick}
                        style={{ padding: "0.5rem 1.5rem 0.57rem 1.6rem", background: '#7040C8', color: '#FFFFFF', fontWeight: 'bold', borderRadius: '0 0.25rem 0.25rem 0', cursor: 'pointer' }}>
                        Sign up
                    </button>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GetStartedContent;
