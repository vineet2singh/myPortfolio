import React, { useState } from "react";

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false); // State for success popup
    const [error, setError] = useState(false); // State for error popup
    const [validationError, setValidationError] = useState(""); // State for validation error

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();

        // Validate form fields
        if (!name || !email || !message) {
            setValidationError("All fields are required.");
            return;
        }

        formData.append("access_key", "bfff883a-6748-40ef-b4d7-5cd35352a661");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setValidationError(""); // Clear validation errors
                setIsSubmitted(true); // Show success popup
                setError(false); // Hide error popup
                setTimeout(() => setIsSubmitted(false), 3000); // Hide popup after 3 seconds
                console.log("Success", res);
            } else {
                throw new Error("Submission failed");
            }
        } catch (err) {
            console.error(err);
            setError(true); // Show error popup
            setTimeout(() => setError(false), 3000); // Hide popup after 3 seconds
        }
    };

    return (
        <div className="relative max-w-md mx-auto p-6">
            <form onSubmit={onSubmit} className="bg-gray-300 p-6 rounded-lg shadow-md">
                <div className="mb-4 ">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-3 py-2 bg-gray-300 border-b-2 border-black  rounded- focus:outline-none"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-3 py-2 bg-gray-300 border-gray-900 rounded- shadow-sm focus:outline-none border-b-2 "
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
                        placeholder="Write your message"
                    ></textarea>
                </div>
                {validationError && (
                    <div className="mb-4 text-red-500 text-sm">{validationError}</div>
                )}
                <div className='flex justify-evenly'>

<button type='reset' className=' bg-red-600 flex items-end gap-2 text-white py-2 px-6 rounded-full hover:bg- transition duration-300'> Reset
<img width="20" height="50" src="https://img.icons8.com/fluency/50/recurring-appointment.png" alt="recurring-appointment"/>
</button>
<button
    type="submit"
    className="w- bg-green-700 flex gap-2 items-center text-white py-2 px-6 rounded-full  transition duration-300"
    >
    Send  <img width="22" height="60" src="https://img.icons8.com/papercut/60/send.png" alt="send"/>
</button>
    </div>
            </form>

            {/* Success Popup */}
            {isSubmitted && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    Message sent successfully!
                </div>
            )}

            {/* Error Popup */}
            {error && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    Something went wrong. Please try again.
                </div>
            )}
        </div>
    );
}

export default ContactForm;
