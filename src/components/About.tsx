
import { Award, Target, Users, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Focused",
      description: "Passionate about delivering bug-free, high-quality software solutions"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Detail Oriented",
      description: "Meticulous attention to detail ensures comprehensive test coverage"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Team Player",
      description: "Collaborative approach with developers, product managers, and stakeholders"
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Automation Expert",
      description: "Skilled in test automation frameworks and continuous integration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated QA professional with 6 years of experience in ensuring software quality through comprehensive testing strategies and innovative automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey in Quality Assurance</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 6 years in the software testing industry, I have developed a comprehensive skill set that spans manual testing, automation frameworks, and quality assurance methodologies. My experience includes working with diverse teams and technologies to deliver exceptional software products.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in creating robust testing strategies, implementing automation frameworks, and ensuring that every piece of software meets the highest quality standards. My approach combines technical expertise with a deep understanding of user experience and business requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about continuous learning and staying updated with the latest testing tools, methodologies, and industry best practices to deliver outstanding results consistently.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Akash Sihol - QA Engineer" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h4>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
