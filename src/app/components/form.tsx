"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCVContext } from "@/contexts/CVContext";
import { CVData, Experience, Education, Skill, Project } from "@/types/cv";
import { Plus, Trash2, Eye } from "lucide-react";

export default function CVForm() {
  const { cvData, setCVData, setCurrentStep } = useCVContext();
  const [activeTab, setActiveTab] = useState("personal");

  const updatePersonalInfo = (field: string, value: string) => {
    setCVData({
      ...cvData,
      personalInfo: {
        ...cvData.personalInfo,
        [field]: value,
      },
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updatePersonalInfo("profileImage", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrentJob: false,
      description: "",
    };
    setCVData({
      ...cvData,
      experience: [...cvData.experience, newExperience],
    });
  };

  const updateExperience = (
    id: string,
    field: string,
    value: string | boolean
  ) => {
    setCVData({
      ...cvData,
      experience: cvData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    setCVData({
      ...cvData,
      experience: cvData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      marks: "",
    };
    setCVData({
      ...cvData,
      education: [...cvData.education, newEducation],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setCVData({
      ...cvData,
      education: cvData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    setCVData({
      ...cvData,
      education: cvData.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediate",
    };
    setCVData({
      ...cvData,
      skills: [...cvData.skills, newSkill],
    });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    setCVData({
      ...cvData,
      skills: cvData.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    setCVData({
      ...cvData,
      skills: cvData.skills.filter((skill) => skill.id !== id),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      link: "",
    };
    setCVData({
      ...cvData,
      projects: [...cvData.projects, newProject],
    });
  };

  const updateProject = (
    id: string,
    field: string,
    value: string | string[]
  ) => {
    setCVData({
      ...cvData,
      projects: cvData.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    });
  };

  const removeProject = (id: string) => {
    setCVData({
      ...cvData,
      projects: cvData.projects.filter((project) => project.id !== id),
    });
  };

  const tabs = [
    { id: "personal", label: "Personal Info" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const handlePreview = () => {
    setCurrentStep("preview");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Fill Your CV Details
        </h1>
        <p className="text-gray-600">
          Complete all sections to create your professional CV
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Personal Information */}
      {activeTab === "personal" && (
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <Label className="text-lg font-medium">Profile Picture</Label>
                <p className="text-sm text-gray-500 mt-1">
                  Upload a professional photo (optional)
                </p>
              </div>
              {cvData.personalInfo.profileImage && (
                <div className="relative">
                  <img
                    src={cvData.personalInfo.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => updatePersonalInfo("profileImage", "")}
                    className="absolute -top-2 -right-2 rounded-full p-1 h-8 w-8"
                  >
                    ×
                  </Button>
                </div>
              )}
              <div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={cvData.personalInfo.fullName}
                  onChange={(e) =>
                    updatePersonalInfo("fullName", e.target.value)
                  }
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={cvData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={cvData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={cvData.personalInfo.address}
                  onChange={(e) =>
                    updatePersonalInfo("address", e.target.value)
                  }
                  placeholder="City, State, Country"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={cvData.personalInfo.linkedin || ""}
                  onChange={(e) =>
                    updatePersonalInfo("linkedin", e.target.value)
                  }
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={cvData.personalInfo.website || ""}
                  onChange={(e) =>
                    updatePersonalInfo("website", e.target.value)
                  }
                  placeholder="https://johndoe.com"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="summary">Professional Summary *</Label>
              <Textarea
                id="summary"
                value={cvData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                placeholder="Brief description of your professional background and goals..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Experience */}
      {activeTab === "experience" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Work Experience</CardTitle>
            <Button
              onClick={addExperience}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Experience</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div key={exp.id} className="border p-4 rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">
                    Experience {index + 1}
                  </h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeExperience(exp.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Company *</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(exp.id, "company", e.target.value)
                      }
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label>Position *</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) =>
                        updateExperience(exp.id, "position", e.target.value)
                      }
                      placeholder="Job Title"
                    />
                  </div>
                  <div>
                    <Label>Start Date *</Label>
                    <Input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "startDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "endDate", e.target.value)
                      }
                      disabled={exp.isCurrentJob}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`current-${exp.id}`}
                    checked={exp.isCurrentJob}
                    onChange={(e) =>
                      updateExperience(exp.id, "isCurrentJob", e.target.checked)
                    }
                    className="h-4 w-4"
                  />
                  <Label htmlFor={`current-${exp.id}`}>
                    Currently working here
                  </Label>
                </div>
                <div>
                  <Label>Job Description *</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, "description", e.target.value)
                    }
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            ))}
            {cvData.experience.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No experience added yet. Click "Add Experience" to get started.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Education */}
      {activeTab === "education" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Education</CardTitle>
            <Button
              onClick={addEducation}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Education</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {cvData.education.map((edu, index) => (
              <div key={edu.id} className="border p-4 rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">Education {index + 1}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeEducation(edu.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institution *</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(edu.id, "institution", e.target.value)
                      }
                      placeholder="University/College/School Name"
                    />
                  </div>
                  <div>
                    <Label>Degree *</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(edu.id, "degree", e.target.value)
                      }
                      placeholder="Matric, Intermediate, Bachelor's, Master's, PhD, etc."
                    />
                  </div>
                  <div>
                    <Label>Subjects *</Label>
                    <Input
                      value={edu.fieldOfStudy}
                      onChange={(e) =>
                        updateEducation(edu.id, "fieldOfStudy", e.target.value)
                      }
                      placeholder=""
                    />
                  </div>
                  <div>
                    <Label>Marks/GPA</Label>
                    <Input
                      value={edu.marks || ""}
                      onChange={(e) =>
                        updateEducation(edu.id, "marks", e.target.value)
                      }
                      placeholder="Marks in percentage or GPA"
                    />
                  </div>
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "startDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "endDate", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            {cvData.education.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No education added yet. Click "Add Education" to get started.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Skills */}
      {activeTab === "skills" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Skills</CardTitle>
            <Button onClick={addSkill} className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Skill</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {cvData.skills.map((skill, index) => (
              <div
                key={skill.id}
                className="flex items-center space-x-4 p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <Input
                    value={skill.name}
                    onChange={(e) =>
                      updateSkill(skill.id, "name", e.target.value)
                    }
                    placeholder="Skill name (e.g., JavaScript, Project Management)"
                  />
                </div>
                <div className="w-40">
                  <Select
                    value={skill.level}
                    onValueChange={(value) =>
                      updateSkill(skill.id, "level", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeSkill(skill.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {cvData.skills.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No skills added yet. Click "Add Skill" to get started.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Projects */}
      {activeTab === "projects" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Projects</CardTitle>
            <Button
              onClick={addProject}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Project</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {cvData.projects.map((project, index) => (
              <div key={project.id} className="border p-4 rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">Project {index + 1}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeProject(project.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Project Name *</Label>
                    <Input
                      value={project.name}
                      onChange={(e) =>
                        updateProject(project.id, "name", e.target.value)
                      }
                      placeholder="Project Name"
                    />
                  </div>
                  <div>
                    <Label>Project Link</Label>
                    <Input
                      value={project.link || ""}
                      onChange={(e) =>
                        updateProject(project.id, "link", e.target.value)
                      }
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
                <div>
                  <Label>Technologies Used</Label>
                  <Input
                    value={project.technologies.join(", ")}
                    onChange={(e) =>
                      updateProject(
                        project.id,
                        "technologies",
                        e.target.value.split(", ").filter(Boolean)
                      )
                    }
                    placeholder="React, Node.js, MongoDB (comma separated)"
                  />
                </div>
                <div>
                  <Label>Project Description *</Label>
                  <Textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, "description", e.target.value)
                    }
                    placeholder="Describe what the project does and your role in it..."
                    rows={3}
                  />
                </div>
              </div>
            ))}
            {cvData.projects.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No projects added yet. Click "Add Project" to get started.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Preview Button */}
      <div className="flex justify-end mt-8">
        <Button
          onClick={handlePreview}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          <Eye className="h-5 w-5" />
          <span>Preview CV</span>
        </Button>
      </div>
    </div>
  );
}
