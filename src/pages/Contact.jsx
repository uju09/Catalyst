import { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send,
  CheckCircle2, User, MessageSquare, ChevronDown
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7758884678", "+91 7758885345", "+91 8999519632"],
    action: "tel:+917758884678"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@catalystcoachingclasses.in"],
    action: "mailto:info@catalystcoachingclasses.in"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Shop #4, Vision Aristo", "Near Mukai Chowk, Vikas Nagar"],
    action: null
  },
  {
    icon: Clock,
    title: "Timings",
    details: ["9:00 AM – 9:00 PM", "All Days"],
    action: null
  },
];



export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    studentClass: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', studentClass: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">REQUEST A CALLBACK</h2>
              <p className="text-slate-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-600 text-center">Your message has been sent successfully. We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0090D4] focus:border-transparent outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0090D4] focus:border-transparent outline-none transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Current Class *</label>
                    <select
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0090D4] focus:border-transparent outline-none transition-all text-slate-600"
                    >
                      <option value="">Select Class</option>
                      <option value="7th">7th Standard</option>
                      <option value="8th">8th Standard</option>
                      <option value="9th">9th Standard</option>
                      <option value="10th">10th Standard</option>
                      <option value="11th">11th Standard</option>
                      <option value="12th">12th Standard</option>
                      <option value="repeater">Repeater / Dropper</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Any message?</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0090D4] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0090D4] text-white font-bold rounded-xl hover:bg-[#0080C4] transition-all shadow-lg shadow-blue-200"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#0090D4]/10 flex items-center justify-center text-[#0090D4] mb-4">
                      <info.icon size={24} />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, j) => (
                      info.action ? (
                        <a key={j} href={info.action} className="block text-sm text-slate-600 hover:text-[#0090D4] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        <p key={j} className="text-sm text-slate-600">{detail}</p>
                      )
                    ))}
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-[#0090D4] mx-auto mb-4" />
                    <h3 className="font-bold text-slate-800 mb-2">VISIT OUR CENTER – 2 CENTERS</h3>
                    <p className="text-sm text-slate-600">Shop #4, Vision Aristo, Near Mukai Chowk, Vikas Nagar</p>
                    <a
                      href="https://maps.app.goo.gl/tz5oFiYDFNq7BNVn8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-[#0090D4] text-white text-sm font-semibold rounded-full hover:bg-[#0080C4] transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Which competitive exams do you prepare students for?",
                a: (
                  <div className="space-y-2">
                    <p>We prepare students for:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>JEE Main & Advanced (Engineering)</li>
                      <li>NEET-UG (Medical)</li>
                      <li>Strong Foundation for Classes 8, 9 & 10</li>
                    </ul>
                    <p>Our programs are designed for students aiming for IITs, NITs, AIIMS, Government Medical Colleges and other premier institutes.</p>
                  </div>
                )
              },
              {
                q: "What is the batch size?",
                a: (
                  <div className="space-y-2">
                    <p>We maintain limited batch strength to ensure:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Personal attention</li>
                      <li>Effective doubt resolution</li>
                      <li>Individual performance tracking</li>
                      <li>Strong teacher-student interaction</li>
                    </ul>
                    <p>Like for Super-13 Integrated Program seats are limited to 13.</p>
                  </div>
                )
              },
              {
                q: "How is your institute different from others?",
                a: (
                  <div className="space-y-2">
                    <p>We focus on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Deep concept clarity</li>
                      <li>Structured academic planning</li>
                      <li>Regular testing (Olympiad / JEE / NEET pattern)</li>
                      <li>Detailed performance analysis</li>
                      <li>Continuous mentoring</li>
                      <li>Transparent parent communication</li>
                    </ul>
                    <p>Our focus is mastery, not just completion of syllabus.</p>
                  </div>
                )
              },
              {
                q: "What are the admission requirements?",
                a: "Students can apply by filling out the inquiry form or visiting our center. We conduct a basic aptitude test for class placement."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <h4 className="font-bold text-slate-800 pr-8">{faq.q}</h4>
                  <ChevronDown
                    className={`text-[#0090D4] transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-sm text-slate-600 border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
