import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS.
 * Ensure your .env file contains:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 * 
 * @param formData Object containing the form data (name, email, message)
 * @returns Promise that resolves on successful submission
 */
export const sendEmail = async (formData: { name: string, email: string, message: string, subject?: string }) => {
  // Map the form data to the template parameters used in EmailJS
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject || "Portfolio Contact Form",
    message: formData.message,
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are missing.');
  }

  // Perform the email submission workflow
  return await emailjs.send(serviceId, templateId, templateParams, { publicKey });
};
