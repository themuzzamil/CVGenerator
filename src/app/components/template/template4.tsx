import { CVData } from "@/types/cv";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
} from "lucide-react";

interface Template4Props {
  data: CVData;
}

export default function Template4({ data }: Template4Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none overflow-hidden print:h-screen print:overflow-hidden print:text-sm print:leading-snug">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 md:p-8 print:!bg-green-600 print:!text-white print:p-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 print:gap-2">
          {/* Profile Image and Name Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 min-w-0 print:gap-2">
            {data.personalInfo.profileImage && (
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={data.personalInfo.profileImage}
                  alt={data.personalInfo.fullName}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg print:border-white print:w-16 print:h-16 print:border-2"
                />
              </div>
            )}
            <div className="min-w-0 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 break-words print:text-lg print:mb-1">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-green-100 text-base md:text-lg print:text-white print:text-sm">
                Professional Resume
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-1 text-green-100 md:text-right print:text-white print:space-y-0 print:text-sm">
            <div className="flex items-center gap-2 md:justify-end min-w-0">
              <Mail size={14} className="flex-shrink-0" />
              <span className="text-sm break-all">
                {data.personalInfo.email}
              </span>
            </div>
            <div className="flex items-center gap-2 md:justify-end min-w-0">
              <Phone size={14} className="flex-shrink-0" />
              <span className="text-sm break-all">
                {data.personalInfo.phone}
              </span>
            </div>
            <div className="flex items-center gap-2 md:justify-end min-w-0">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="text-sm break-words">
                {data.personalInfo.address}
              </span>
            </div>
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2 md:justify-end min-w-0">
                <Linkedin size={14} className="flex-shrink-0" />
                <span className="text-xs break-all">
                  {data.personalInfo.linkedin}
                </span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2 md:justify-end min-w-0">
                <Globe size={14} className="flex-shrink-0" />
                <span className="text-xs break-all">
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
          <section className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <div className="flex items-center gap-3 mb-4 print:gap-2 print:mb-2">
              <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0 print:p-1">
                <Briefcase size={20} className="print:w-4 print:h-4" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 print:text-base">
                Professional Summary
              </h2>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-green-600 print:p-2 print:border-l-2">
              <p className="text-gray-700 leading-relaxed break-words print:text-sm print:leading-snug">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}{" "}
        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <div className="flex items-center gap-3 mb-6 print:gap-1 print:mb-1">
              <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0 print:p-1">
                <Briefcase size={20} className="print:w-3 print:h-3" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 print:text-xs">
                Work Experience
              </h2>
            </div>
            <div className="space-y-6 print:space-y-1">
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative print:page-break-inside-avoid"
                >
                  <div className="flex items-start gap-4 print:gap-1">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center print:w-4 print:h-4">
                      <span className="text-green-600 font-bold text-sm md:text-base print:text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm print:p-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 print:mb-1 print:gap-0">
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 break-words print:text-xs print:font-medium">
                              {exp.position}
                            </h3>
                            <p className="text-base md:text-lg text-green-600 font-semibold break-words print:text-xs">
                              {exp.company}
                            </p>
                          </div>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap self-start print:px-1 print:py-0 print:text-xs">
                            {exp.startDate} -{" "}
                            {exp.isCurrentJob ? "Present" : exp.endDate}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed break-words print:text-xs print:leading-tight">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < data.experience.length - 1 && (
                    <div className="absolute left-5 md:left-6 top-10 md:top-12 w-0.5 h-6 bg-green-200 print:left-2 print:top-4 print:h-2"></div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}{" "}
        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <div className="flex items-center gap-3 mb-6 print:gap-1 print:mb-1">
              <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0 print:p-1">
                <GraduationCap size={20} className="print:w-3 print:h-3" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 print:text-xs">
                Education
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 print:grid-cols-2 print:gap-1">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm print:p-1 print:page-break-inside-avoid"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap
                        size={14}
                        className="text-green-600 md:w-4 md:h-4"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 break-words">
                        {edu.degree}
                      </h3>
                      <p className="text-green-600 font-semibold mb-1 break-words">
                        {edu.fieldOfStudy}
                      </p>
                      <p className="text-gray-700 font-medium mb-1 break-words">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {edu.startDate} - {edu.endDate}
                      </p>
                      {edu.marks && (
                        <p className="text-gray-600 text-sm">
                          GPA: {edu.marks}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 print:grid-cols-2 print:gap-1">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="print:page-break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 print:gap-1 print:mb-1">
                <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0 print:p-1">
                  <Code size={20} className="print:w-3 print:h-3" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 print:text-xs">
                  Skills
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm print:p-1">
                <div className="space-y-4 print:space-y-1">
                  {data.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="print:page-break-inside-avoid"
                    >
                      <div className="flex justify-between items-center mb-2 print:mb-0">
                        <span className="font-semibold text-gray-800 break-words print:text-xs">
                          {skill.name}
                        </span>
                        <span className="text-green-600 text-sm font-medium whitespace-nowrap ml-2 print:text-xs">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 print:h-1">
                        <div
                          className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300 print:h-1"
                          style={{
                            width:
                              skill.level === "Expert"
                                ? "100%"
                                : skill.level === "Advanced"
                                ? "80%"
                                : skill.level === "Intermediate"
                                ? "60%"
                                : "40%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="print:page-break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 print:gap-1 print:mb-1">
                <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0 print:p-1">
                  <FolderOpen size={20} className="print:w-3 print:h-3" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 print:text-xs">
                  Projects
                </h2>
              </div>
              <div className="space-y-4 print:space-y-1">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm print:p-1 print:page-break-inside-avoid"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <FolderOpen
                          size={10}
                          className="text-green-600 md:w-3 md:h-3"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 mb-1 break-words">
                          {project.name}
                        </h3>
                        {project.link && (
                          <p className="text-green-600 text-sm mb-2 break-all">
                            {project.link}
                          </p>
                        )}
                        <p className="text-gray-700 text-sm mb-3 break-words">
                          {project.description}
                        </p>
                        {project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium break-words"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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
