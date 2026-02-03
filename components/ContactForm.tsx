import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    eventType: "Wedding Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the email body
    const subject = encodeURIComponent(
      `Maven Events Inquiry: ${formData.eventType} from ${formData.firstName} ${formData.lastName}`,
    );
    const body = encodeURIComponent(
      `New Inquiry from Maven Events Website\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Event Type: ${formData.eventType}\n` +
        `Message: ${formData.message}`,
    );

    // Simulate a brief loading state before opening mail client
    setTimeout(() => {
      window.location.href = `mailto:mavenevents@email.com?subject=${subject}&body=${body}`; // Replace with actual email
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6 leading-tight">
              Start Your Journey With <br />{" "}
              <span className="text-maven-gold">Maven Events</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Whether you’re planning a grand wedding in Sydney or an intimate
              corporate retreat in the Whitsundays, our team is ready to bring
              your vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full mr-4 text-maven-gold shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Call Us</h4>
                  <p className="text-slate-400 text-sm">+61 2 9000 0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full mr-4 text-maven-gold shrink-0">
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">WhatsApp</h4>
                  <a
                    href="https://wa.me/61290000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-sm hover:text-maven-gold transition-colors underline underline-offset-4 decoration-white/10"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full mr-4 text-maven-gold shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Email Us</h4>
                  <p className="text-slate-400 text-sm break-all">
                    hello@mavenevents.com.au
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full mr-4 text-maven-gold shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Visit Studio</h4>
                  <p className="text-slate-400 text-sm">
                    Level 4, 100 George St, Sydney
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-lg shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-serif mb-2 text-slate-900">
                  Inquiry Prepared
                </h3>
                <p className="text-slate-500 mb-8">
                  Your email client has been opened to send the inquiry to our
                  team. We'll be in touch soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-maven-gold font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif mb-6">Send an Inquiry</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-maven-gold"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-maven-gold"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-maven-gold"
                  />
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-maven-gold"
                  >
                    <option>Wedding Inquiry</option>
                    <option>Corporate Event</option>
                    <option>Private Soirée</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your event..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-maven-gold"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-maven-gold text-slate-900 font-bold uppercase tracking-widest rounded-md hover:brightness-110 transition-all shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <i className="fa-solid fa-circle-notch animate-spin mr-3"></i>
                        Processing...
                      </span>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
