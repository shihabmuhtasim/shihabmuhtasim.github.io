import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_em623n6',
        'template_6emp70g',
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'UkSbzz1itF-qrWaV9'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess(true);
          setFormData({
            email: '',
            subject: '',
            message: '',
          });
          setTimeout(() => {
            setSuccess(false);
            window.location.reload();
          }, 3000);
          alert('Message sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('There was an error sending your message.');
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      {success && (
        <div className="mb-4 text-green-600 font-semibold animate-pulse text-center">
          ✅ Message sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Your Email</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 border-t pt-6 text-gray-700">
        <p className="mb-2"><strong>Email:</strong> shihabmuhtasim.cs@gmail.com</p>
        <p className="mb-2">
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/shihabmuhtasim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/shihabmuhtasim
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/shihabmuhtasim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/shihabmuhtasim
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;