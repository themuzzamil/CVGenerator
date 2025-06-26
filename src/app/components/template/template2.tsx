import { CVData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

interface Template2Props {
  data: CVData;
}

export default function Template2({ data }: Template2Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none flex flex-col md:flex-row overflow-hidden print:max-w-none print:h-screen print:overflow-hidden print:text-sm">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 bg-gray-800 text-white p-4 md:p-6 print:w-1/3 print:p-3 print:!bg-gray-800 print:!text-white">
        <div className="mb-6 md:mb-8 print:mb-3">
          <h1 className="text-xl md:text-2xl font-bold mb-4 break-words print:text-base print:mb-2">
            {data.personalInfo.fullName}
          </h1>
          <div className="space-y-2 md:space-y-3 text-xs md:text-sm print:space-y-1 print:text-sm">
            {" "}
            <div className="flex items-center gap-2 min-w-0">
              <Mail size={14} className="flex-shrink-0" />
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <Phone size={14} className="flex-shrink-0" />
              <span className="break-all">{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="break-words">{data.personalInfo.address}</span>
            </div>
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2 min-w-0">
                <Linkedin size={14} className="flex-shrink-0" />
                <span className="text-xs break-all">
                  {data.personalInfo.linkedin}
                </span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2 min-w-0">
                <Globe size={14} className="flex-shrink-0" />
                <span className="text-xs break-all">
                  {data.personalInfo.website}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6 md:mb-8 print:mb-3 print:page-break-inside-avoid">
            <h2 className="text-base md:text-lg font-bold mb-4 text-yellow-400 print:text-sm print:mb-2">
              SKILLS
            </h2>
            <div className="space-y-2 md:space-y-3 print:space-y-1">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="min-w-0 print:page-break-inside-avoid"
                >
                  <div className="flex justify-between text-xs md:text-sm mb-1 print:text-xs print:mb-0">
                    <span className="break-words flex-1 mr-2">
                      {skill.name}
                    </span>
                    <span className="text-yellow-400 flex-shrink-0">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 print:h-1">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
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
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <h2 className="text-base md:text-lg font-bold mb-4 text-yellow-400 print:text-sm print:mb-2">
              EDUCATION
            </h2>
            <div className="space-y-3 md:space-y-4 print:space-y-1">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="text-xs md:text-sm break-inside-avoid print:page-break-inside-avoid print:text-xs"
                >
                  <h3 className="font-semibold text-white break-words">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 break-words">
                    {edu.fieldOfStudy}
                  </p>
                  <p className="text-yellow-400 font-medium break-words">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.marks && (
                    <p className="text-gray-300">GPA: {edu.marks}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-2/3 p-6 md:p-8 overflow-hidden print:w-2/3 print:p-3">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 relative print:text-sm print:mb-1">
              PROFILE
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400 print:w-6"></div>
            </h2>
            <p className="text-gray-700 leading-relaxed break-words print:text-xs print:leading-tight">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6 md:mb-8 print:mb-2 print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 relative print:text-sm print:mb-1">
              EXPERIENCE
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400 print:w-6"></div>
            </h2>
            <div className="space-y-4 md:space-y-6 print:space-y-1">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6 break-inside-avoid print:page-break-inside-avoid print:pl-3"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-yellow-400 rounded-full print:w-2 print:h-2 print:top-1"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-300 print:left-1 print:top-3"></div>
                  <div className="mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 break-words">
                      {exp.position}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-medium break-words">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} -{" "}
                      {exp.isCurrentJob ? "Present" : exp.endDate}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed break-words text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="print:page-break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 relative print:text-sm print:mb-1">
              PROJECTS
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400 print:w-6"></div>
            </h2>
            <div className="space-y-4 print:space-y-1">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="border-l-4 border-yellow-400 pl-4 break-inside-avoid print:page-break-inside-avoid print:pl-2 print:border-l-2"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 break-words">
                    {project.name}
                  </h3>
                  {project.link && (
                    <p className="text-gray-600 text-sm mb-2 break-all">
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
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs break-words"
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
  );
}
