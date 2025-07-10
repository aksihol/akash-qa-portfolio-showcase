
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      duration: "2+ years",
      responsibilities: [
        "Led a team of 5 QA engineers in implementing comprehensive testing strategies",
        "Developed and maintained automated test suites using Selenium and TestNG",
        "Reduced testing time by 60% through automation framework optimization",
        "Collaborated with cross-functional teams to establish quality gates",
        "Mentored junior QA engineers in best practices and automation techniques"
      ]
    },
    {
      title: "QA Engineer",
      company: "Digital Innovations Ltd.",
      location: "Bangalore, India",
      period: "2020 - 2022",
      duration: "2 years",
      responsibilities: [
        "Executed comprehensive test plans for web and mobile applications",
        "Implemented API testing using Postman and RestAssured",
        "Performed database testing and validation using SQL queries",
        "Participated in Agile ceremonies and sprint planning",
        "Created detailed test documentation and bug reports"
      ]
    },
    {
      title: "Junior QA Engineer",
      company: "StartUp Ventures",
      location: "Mumbai, India",
      period: "2018 - 2020",
      duration: "2 years",
      responsibilities: [
        "Conducted manual testing for web applications across multiple browsers",
        "Developed test cases and test scenarios based on requirements",
        "Performed regression testing and user acceptance testing",
        "Collaborated with development team to resolve defects",
        "Gained expertise in testing tools and methodologies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey in quality assurance, from junior engineer to senior leadership roles, delivering excellence at every step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {exp.duration}
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
