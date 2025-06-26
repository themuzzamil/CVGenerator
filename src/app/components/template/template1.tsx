import { CVData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

interface Template1Props {
  data: CVData;
}

export default function Template1({ data }: Template1Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none overflow-hidden print:max-w-none print:h-screen print:overflow-hidden print:text-sm print:leading-snug">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 md:p-8 print:p-4 print:!bg-blue-600 print:!text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 print:gap-3">
          {/* Profile Image */}
          {data.personalInfo.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={data.personalInfo.profileImage}
                alt={data.personalInfo.fullName}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20 print:w-20 print:h-20 print:border-2"
              />
            </div>
          )}

          {/* Name and Contact Info */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 break-words print:text-xl print:mb-2">
              {data.personalInfo.fullName}
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4 text-blue-100 text-sm md:text-base print:gap-2 print:text-sm">
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
        </div>
      </div>{" "}
      <div className="p-6 md:p-8 overflow-hidden print:p-4 print:space-y-3">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-6 md:mb-8 print:mb-3 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-base print:mb-2 print:pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed break-words print:text-sm print:leading-snug">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6 md:mb-8 print:mb-3 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-base print:mb-2 print:pb-1">
              Work Experience
            </h2>
            <div className="space-y-4 md:space-y-6 print:space-y-2">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="break-inside-avoid print:page-break-inside-avoid"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2 print:mb-1 print:gap-1">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 break-words print:text-sm print:font-semibold">
                        {exp.position}
                      </h3>
                      <p className="text-base md:text-lg text-blue-600 font-medium break-words print:text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-600 text-sm md:text-base flex-shrink-0 print:text-sm">
                      <p>
                        {exp.startDate} -{" "}
                        {exp.isCurrentJob ? "Present" : exp.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed break-words text-sm md:text-base print:text-sm print:leading-snug">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-6 md:mb-8 print:mb-3 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-base print:mb-2 print:pb-1">
              Education
            </h2>
            <div className="space-y-4 print:space-y-2">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="break-inside-avoid print:page-break-inside-avoid"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 break-words">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h3>
                      <p className="text-blue-600 font-medium break-words">
                        {edu.institution}
                      </p>
                      {edu.marks && (
                        <p className="text-gray-600 text-sm">
                          GPA: {edu.marks}
                        </p>
                      )}
                    </div>
                    <div className="text-gray-600 text-sm flex-shrink-0">
                      <p>
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 print:grid-cols-2 print:gap-3">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="break-inside-avoid print:page-break-inside-avoid">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-base print:mb-2 print:pb-1">
                Skills
              </h2>
              <div className="space-y-2 md:space-y-3 print:space-y-1">
                {data.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex justify-between items-center min-w-0 print:text-sm"
                  >
                    <span className="text-gray-700 font-medium break-words flex-1 mr-2">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 text-sm font-medium flex-shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="break-inside-avoid print:page-break-inside-avoid">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-base print:mb-2 print:pb-1">
                Projects
              </h2>
              <div className="space-y-4 print:space-y-2">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="break-inside-avoid print:page-break-inside-avoid"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 break-words">
                      {project.name}
                    </h3>
                    {project.link && (
                      <p className="text-blue-600 text-sm mb-2 break-all">
                        {project.link}
                      </p>
                    )}
                    <p className="text-gray-700 text-sm mb-2 break-words leading-relaxed">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs break-words"
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
