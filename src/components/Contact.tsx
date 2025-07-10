
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "akash.sihol@email.com",
      link: "mailto:akash.sihol@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bangalore, India",
      link: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "/in/akash-sihol",
      link: "https://linkedin.com/in/akash-sihol"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next quality assurance project? I'm here to help ensure your software meets the highest standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, challenging projects, and innovative testing solutions. 
              Whether you need help with test automation, quality strategy, or team leadership, let's connect and explore how I can contribute to your success.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-blue-400 group-hover:text-pink-400 transition-colors duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 font-medium">{info.title}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Available for:</h4>
              <div className="flex flex-wrap gap-3">
                {["Contract Work", "Full-time Roles", "Consulting", "Mentoring"].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-400/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
