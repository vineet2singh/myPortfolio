import React, { useState } from "react";

function ContactFormWithOTP() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

    // Generate and send OTP
    const sendOtp = () => {
        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const newOtp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        setGeneratedOtp(newOtp);
        setIsOtpSent(true);
        setError("");

        // Simulate sending OTP to email
        console.log(`Sending OTP ${newOtp} to ${email}`);
        alert(`OTP sent to your email: ${email}`);
    };

    // Verify OTP
    const verifyOtp = () => {
        if (parseInt(otp) === generatedOtp) {
            setIsOtpVerified(true);
            setError("");
        } else {
            setError("Invalid OTP. Please try again.");
        }
    };

    // Handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        if (!isOtpVerified) {
            setError("Please verify your OTP before submitting the form.");
            return;
        }

        setSuccessMessage("Message sent successfully!");
        setError("");
    };

    return (
        <div className="relative max-w-md mx-auto p-6">
            <form onSubmit={onSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        disabled={isOtpSent}
                    />
                </div>
                {!isOtpSent && (
                    <button
                        type="button"
                        onClick={sendOtp}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send OTP
                    </button>
                )}

                {isOtpSent && !isOtpVerified && (
                    <div className="mt-4">
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter OTP"
                        />
                        <button
                            type="button"
                            onClick={verifyOtp}
                            className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {isOtpVerified && (
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit Form
                        </button>
                    </div>
                )}
            </form>

            {successMessage && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    {successMessage}
                </div>
            )}

            {error && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    {error}
                </div>
            )}
        </div>
    );
}

export default ContactFormWithOTP;
