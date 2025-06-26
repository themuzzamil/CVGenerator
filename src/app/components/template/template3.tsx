import { CVData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

interface Template3Props {
  data: CVData;
}

export default function Template3({ data }: Template3Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none overflow-hidden print:max-w-none print:h-screen print:overflow-hidden print:text-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 md:p-8 print:p-3 print:!bg-purple-600 print:!text-white">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 break-words print:text-xl print:mb-2">
            {data.personalInfo.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-purple-100 text-sm md:text-base print:gap-2 print:text-sm print:!text-white">
            {" "}
            <div className="flex items-center gap-2 min-w-0">
              <Mail size={16} className="flex-shrink-0" />
              <span className="break-all text-sm">
                {data.personalInfo.email}
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <Phone size={16} className="flex-shrink-0" />
              <span className="break-all text-sm">
                {data.personalInfo.phone}
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="break-words text-sm">
                {data.personalInfo.address}
              </span>
            </div>
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2 min-w-0">
                <Linkedin size={16} className="flex-shrink-0" />
                <span className="break-all text-sm">
                  {data.personalInfo.linkedin}
                </span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2 min-w-0">
                <Globe size={16} className="flex-shrink-0" />
                <span className="break-all text-sm">
                  {data.personalInfo.website}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>{" "}
      <div className="p-6 md:p-8 overflow-hidden print:p-3 print:space-y-3">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-6 md:mb-8 text-center print:mb-2 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 print:text-sm print:mb-1">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-purple-600">
                About Me
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto break-words print:text-xs print:leading-tight">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8 print:mb-2 print:page-break-inside-avoid">
            <h2 className="text-2xl font-bold text-center mb-8 print:text-sm print:mb-1">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-purple-600">
                Professional Experience
              </span>
            </h2>
            <div className="space-y-8 print:space-y-1">
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative print:page-break-inside-avoid"
                >
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 shadow-sm print:p-2 print:bg-purple-50">
                    <div className="flex justify-between items-start mb-4 print:mb-1">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 print:text-xs print:font-medium">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-xs print:text-purple-600">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium print:px-1 print:py-0 print:text-xs print:bg-purple-600">
                          {exp.startDate} -{" "}
                          {exp.isCurrentJob ? "Present" : exp.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed print:text-xs print:leading-tight">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8 print:mb-1 print:page-break-inside-avoid">
            <h2 className="text-2xl font-bold text-center mb-8 print:text-sm print:mb-1">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-purple-600">
                Education
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-1">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-sm print:p-2 print:bg-purple-50 print:page-break-inside-avoid"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {edu.fieldOfStudy}
                  </p>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.marks && (
                    <p className="text-gray-600 text-sm">GPA: {edu.marks}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-1">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="print:page-break-inside-avoid">
              <h2 className="text-2xl font-bold text-center mb-6 print:text-sm print:mb-1">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-purple-600">
                  Skills
                </span>
              </h2>
              <div className="space-y-4 print:space-y-1">
                {data.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 print:p-1 print:bg-purple-50"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 print:text-xs">
                        {skill.name}
                      </span>
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium print:px-1 print:py-0 print:bg-purple-600">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="print:page-break-inside-avoid">
              <h2 className="text-2xl font-bold text-center mb-6 print:text-sm print:mb-1">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent print:text-purple-600">
                  Projects
                </span>
              </h2>
              <div className="space-y-4 print:space-y-1">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 print:p-1 print:bg-purple-50 print:page-break-inside-avoid"
                  >
                    <h3 className="font-bold text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    {project.link && (
                      <p className="text-purple-600 text-sm mb-2 break-all">
                        {project.link}
                      </p>
                    )}
                    <p className="text-gray-700 text-sm mb-3">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
