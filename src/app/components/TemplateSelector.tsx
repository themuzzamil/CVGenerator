"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCVContext } from "@/contexts/CVContext";
import { Template } from "@/types/cv";
import Template1 from "@/app/components/template/template1";
import Template2 from "@/app/components/template/template2";
import Template3 from "@/app/components/template/template3";
import Template4 from "@/app/components/template/template4";
import { Check, Eye } from "lucide-react";

const sampleData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "New York, NY",
    linkedin: "linkedin.com/in/johndoe",
    website: "johndoe.com",
    summary:
      "Experienced software developer with 5+ years in web development and a passion for creating innovative solutions.",
    profileImage:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB4PSIzMiIgeT0iMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0yMCAxNi0xIDEiLz4KPHA+CiAgPHBhdGggZD0ibTIwIDEyIDEgMSIvPgo8L3A+CjxwYXRoPgo8L3BhdGg+Cjwvc3ZnPgo8L3N2Zz4K",
  },
  experience: [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Developer",
      startDate: "2022-01",
      endDate: "",
      isCurrentJob: true,
      description:
        "Lead development of web applications using React and Node.js",
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "Bachelor's",
      fieldOfStudy: "Computer Science",
      startDate: "2018-09",
      endDate: "2022-05",
      gpa: "3.8/4.0",
    },
  ],
  skills: [
    {
      id: "1",
      name: "JavaScript",
      level: "Expert" as const,
    },
    {
      id: "2",
      name: "React",
      level: "Advanced" as const,
    },
  ],
  projects: [
    {
      id: "1",
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce solution",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "github.com/johndoe/ecommerce",
    },
  ],
};

const templates: Template[] = [
  {
    id: "template1",
    name: "Professional Blue",
    description: "Clean and professional design with blue accents",
    preview: "A modern template with a bold blue header and structured layout",
    component: Template1,
  },
  {
    id: "template2",
    name: "Modern Sidebar",
    description: "Two-column layout with dark sidebar",
    preview:
      "Professional template with skills sidebar and timeline experience",
    component: Template2,
  },
  {
    id: "template3",
    name: "Creative Gradient",
    description: "Eye-catching design with purple-pink gradients",
    preview: "Creative template with gradient colors and centered layout",
    component: Template3,
  },
  {
    id: "template4",
    name: "Corporate Green",
    description: "Professional corporate design with green theme",
    preview: "Business-focused template with icons and structured sections",
    component: Template4,
  },
];

export default function TemplateSelector() {
  const { selectedTemplate, setSelectedTemplate, setCurrentStep } =
    useCVContext();

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      setCurrentStep("form");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your CV Template
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select a professional template that best represents your style. You
          can customize all the content later.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedTemplate?.id === template.id
                ? "ring-2 ring-blue-500 shadow-lg"
                : "hover:shadow-md"
            }`}
            onClick={() => handleSelectTemplate(template)}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl font-bold">
                    {template.name}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{template.description}</p>
                </div>
                {selectedTemplate?.id === template.id && (
                  <div className="bg-blue-500 text-white rounded-full p-2">
                    <Check size={20} />
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-96 overflow-hidden">
                <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                  <template.component data={sampleData} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{template.preview}</p>{" "}
                {/* <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // This would open a modal or larger preview
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <Eye size={16} />
                  Preview
                </Button> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedTemplate && (
        <div className="text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 max-w-md mx-auto">
            <h3 className="font-semibold text-blue-900 mb-2">
              Template Selected
            </h3>
            <p className="text-blue-700">
              You've selected <strong>{selectedTemplate.name}</strong>. Click
              continue to start filling out your information.
            </p>
          </div>
          <Button
            onClick={handleContinue}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Continue to Form
          </Button>
        </div>
      )}
    </div>
  );
}
