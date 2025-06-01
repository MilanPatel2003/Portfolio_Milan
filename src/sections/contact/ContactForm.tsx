import  { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ShimmerButton from "@/components/ui/shimmer-button";
import { Linkedin, Github, Mail } from 'lucide-react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkgqjjo");
  const [buttonText, setButtonText] = useState('Send Message');

  useEffect(() => {
    if (state.submitting) {
      setButtonText('Sending...');
    } else if (state.succeeded) {
      setButtonText('Sent!');
      const timer = setTimeout(() => {
        setButtonText('Send Message');
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setButtonText('Send Message');
    }
  }, [state.submitting, state.succeeded]);

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto p-6 sm:p-8 bg-gray-900 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl shadow-white/5 border border-gray-800 border-opacity-10 flex flex-col lg:flex-row gap-8 lg:gap-12 my-12" id='contact'>
      {/* Left Side: Personal Links */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Feel free to reach out through the form or connect with me via the links below.
          </p>
          <div className="flex flex-col space-y-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/milan-patel-37650330b/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
              <Linkedin className="mr-2 h-5 w-5" />
              https://www.linkedin.com/in/milan-patel-37650330b/
            </a>
            {/* GitHub */}
            <a href="https://github.com/MilanPatel2003" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
              <Github className="mr-2 h-5 w-5" />
              https://github.com/MilanPatel2003
            </a>
    
             {/* Email */}
             <a href="mailto:milanpatel6454@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
              <Mail className="mr-2 h-5 w-5" />
              milanpatel6454@gmail.com
            </a>
            {/* Add other links as needed */}
          </div>
        </div>
        {/* Optional: Add an image or illustration here */}
        {/* <div className="mt-6 sm:mt-8">
          <img src="/path/to/your/image.png" alt="Contact Illustration" className="rounded-lg" />
        </div> */}
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">Send me a message</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="shadow-sm appearance-none border border-gray-700 border-opacity-30 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-700 bg-opacity-30 placeholder-gray-400 text-sm sm:text-base"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-gray-400 text-xs mt-1"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow-sm appearance-none border border-gray-700 border-opacity-30 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-700 bg-opacity-30 placeholder-gray-400 text-sm sm:text-base"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-gray-400 text-xs mt-1"
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="shadow-sm appearance-none border border-gray-700 border-opacity-30 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-700 bg-opacity-30 placeholder-gray-400 text-sm sm:text-base"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-gray-400 text-xs mt-1"
            />
          </div>
          <div className="flex items-center justify-center pt-4 sm:pt-6">
            <ShimmerButton type="submit" disabled={state.submitting} className="shadow-lg w-full sm:w-auto">
              <span className="whitespace-pre-wrap text-center text-sm sm:text-base font-medium leading-none tracking-tight text-gray-200">
                {buttonText}
              </span>
            </ShimmerButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm; 