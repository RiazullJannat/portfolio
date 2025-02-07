'use client'
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`, 
               `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                form.current,
                `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    alert("Email sent successfully!");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send email.");
                }
            );

        e.target.reset(); 
    };
    return (
        <div className="flex ">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-4 border rounded-lg w-full md:w-1/2 ">
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default Email;