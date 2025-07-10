
import { ExternalLink, Github, TestTube, Bug, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Citroen",
      description: "Comprehensive automated testing framework for a major e-commerce platform covering user registration, product search, cart functionality, and payment processing.",
      technologies: ["Selenium", "TestNG", "Java", "Maven", "Jenkins"],
      achievements: [
        "Reduced testing time by 70%",
        "Achieved 95% test coverage",
        "Identified 150+ critical bugs"
      ],
    
      icon: <img className="w-63 h-63" src='/public/CT.png' />,
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Redington",
      description: "Comprehensive automated testing framework for a major e-commerce platform covering user registration, product search, cart functionality, and payment processing.",
      technologies: ["Selenium", "TestNG", "Java", "Maven", "Jenkins"],
      achievements: [
        "Reduced testing time by 70%",
        "Achieved 95% test coverage",
        "Identified 150+ critical bugs"
      ],
      icon: <img className="w-63 h-63" src='/public/RG.png' />,
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "FreightClub",
      description: "Comprehensive automated testing framework for a major e-commerce platform covering user registration, product search, cart functionality, and payment processing.",
      technologies: ["Selenium", "TestNG", "Java", "Maven", "Jenkins"],
      achievements: [
        "Reduced testing time by 70%",
        "Achieved 95% test coverage",
        "Identified 150+ critical bugs"
      ],
      icon: <img className="w-63 h-63" src='/public/FC.jpg' />,
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Cymax",
      description: "End-to-end testing of a mobile banking application including security testing, usability testing, and performance optimization across iOS and Android platforms.",
      technologies: ["Appium", "Python", "Pytest", "Charles Proxy", "JIRA"],
      achievements: [
        "Ensured 99.9% security compliance",
        "Improved app performance by 40%",
        "Zero critical bugs in production"
      ],
      icon: <img className="w-63 h-63" src='/public/CM.png' />,
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "ChannelGate",
      description: "Developed a robust API testing framework for microservices architecture, including automated contract testing and performance validation.",
      technologies: ["RestAssured", "Java", "Cucumber", "Docker", "Postman"],
      achievements: [
        "Automated 90% of API tests",
        "Reduced API response time issues by 80%",
        "Implemented continuous testing pipeline"
      ],
      icon: <img className="w-63 h-63" src='/public/CG.png' />,
      gradient: "from-blue-100 to-cyan-100"
    }
    
  ];

  const certifications = [
    // "ISTQB Foundation Level Certified",
    "Selenium WebDriver Certification",
    "Agile Testing Certification",
    "API Testing with Postman",
    "Cypress Automation Testing",
    "Database Testing",
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of key testing projects that demonstrate expertise in various domains and testing methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
