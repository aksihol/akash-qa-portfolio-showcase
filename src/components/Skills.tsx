
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Methodologies",
      skills: [
        "Manual Testing",
        "Automated Testing",
        "Regression Testing",
        "API Testing",
        "Mobile Testing",
        "User Acceptance Testing"
      ]
    },
    {
      title: "Automation Tools",
      skills: [
        "Playwright",
        "cypress",
        "Selenium WebDriver",
        "TestNG",
        "JUnit",
        "Postman",
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "SQL",
        "HTML/CSS",
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "JIRA",
        "Git/GitHub",
        "MySQL",
        "Agile/Scrum",
        "BrowserStack"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set covering all aspects of quality assurance, from manual testing to advanced automation frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Test Automation</span>
                <span className="text-blue-600 font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Manual Testing</span>
                <span className="text-purple-600 font-bold">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">API Testing</span>
                <span className="text-pink-600 font-bold">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
