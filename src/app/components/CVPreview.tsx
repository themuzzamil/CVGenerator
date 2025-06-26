"use client";

import { Button } from "@/components/ui/button";
import { useCVContext } from "@/contexts/CVContext";
import { Download, Edit, Share } from "lucide-react";

export default function CVPreview() {
  const { cvData, selectedTemplate, setCurrentStep } = useCVContext();

  if (!selectedTemplate) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No Template Selected
        </h2>
        <p className="text-gray-600 mb-6">Please select a template first.</p>
        <Button onClick={() => setCurrentStep("template")}>
          Select Template
        </Button>
      </div>
    );
  }

  const TemplateComponent = selectedTemplate.component;
  const handleDownload = () => {
    const previewContent = document.querySelector(".cv-preview-content");
    if (previewContent) {
      const cvElement = previewContent.querySelector("div");
      if (cvElement) {
        const printWindow = window.open("", "_blank");
        if (printWindow) {
          printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <title>CV - ${cvData.personalInfo?.fullName || "Resume"}</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <!-- Include Tailwind CSS -->
                <script src="https://cdn.tailwindcss.com/3.4.1"></script>
                
                <!-- Custom Styles -->
                <style>
                  * {
                    box-sizing: border-box;
                    -webkit-print-color-adjust: exact !important;
                    color-adjust: exact !important;
                  }
                  
                  body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    line-height: 1.6;
                    background: white;
                    color: #000;
                  }
                  
                  .cv-container {
                    width: 100%;
                    max-width: none;
                    margin: 0;
                    background: white;
                    min-height: 100vh;
                  }
                  
                  /* Preserve all gradients and colors */
                  .bg-gradient-to-r {
                    background-image: linear-gradient(to right, var(--tw-gradient-stops)) !important;
                  }
                  
                  .from-green-600 {
                    --tw-gradient-from: #059669 !important;
                    --tw-gradient-to: rgba(5, 150, 105, 0) !important;
                    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
                  }
                  
                  .to-teal-600 {
                    --tw-gradient-to: #0d9488 !important;
                  }
                  
                  .text-white {
                    color: white !important;
                  }
                  
                  .text-green-100 {
                    color: #dcfce7 !important;
                  }
                  
                  .text-green-600 {
                    color: #059669 !important;
                  }
                  
                  .bg-green-600 {
                    background-color: #059669 !important;
                  }
                  
                  .bg-green-100 {
                    background-color: #dcfce7 !important;
                  }
                  
                  .border-green-600 {
                    border-color: #059669 !important;
                  }
                  
                  .break-words {
                    word-wrap: break-word;
                    word-break: break-word;
                    overflow-wrap: break-word;
                  }
                  
                  .break-all {
                    word-break: break-all;
                  }
                  
                  .min-w-0 {
                    min-width: 0;
                  }
                  
                  @media print {
                    body { 
                      margin: 0 !important; 
                      padding: 0 !important;
                      background: white !important;
                    }
                    
                    .cv-container {
                      margin: 0 !important;
                      box-shadow: none !important;
                    }
                    
                    .print\\:shadow-none {
                      box-shadow: none !important;
                    }
                    
                    .print\\:max-w-none {
                      max-width: none !important;
                    }
                    
                    .print\\:p-6 {
                      padding: 1.5rem !important;
                    }
                    
                    .print\\:text-white {
                      color: white !important;
                    }
                    
                    .print\\:border-white {
                      border-color: white !important;
                    }
                    
                    .print\\:!bg-green-600 {
                      background-color: #059669 !important;
                    }
                    
                    .print\\:!text-white {
                      color: white !important;
                    }
                  }
                  
                  @page {
                    margin: 0.5in;
                    size: A4 portrait;
                  }
                </style>
              </head>
              <body>
                <div class="cv-container">
                  ${cvElement.outerHTML}
                </div>
                <script>
                  setTimeout(function() {
                    window.print();
                    setTimeout(function() {
                      window.close();
                    }, 1000);
                  }, 1500);
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
        }
      }
    } else {
      alert(
        "CV preview not found. Please make sure you are on the preview page."
      );
    }
  };

  const handleEdit = () => {
    setCurrentStep("form");
  };

  const handleShare = () => {
    // This would implement sharing functionality
    if (navigator.share) {
      navigator.share({
        title: "My CV",
        text: "Check out my CV!",
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header with actions */}
      <div className="flex justify-between items-center mb-6 bg-white shadow-sm rounded-lg p-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CV Preview</h1>
          <p className="text-gray-600">Template: {selectedTemplate.name}</p>
        </div>
        <div className="flex gap-3">
          {" "}
          <Button
            variant="outline"
            onClick={handleEdit}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <Edit size={16} />
            Edit Details
          </Button>
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <Share size={16} />
            Share
          </Button>
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      </div>{" "}
      {/* CV Preview */}
      <div className="cv-preview-content bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="print:shadow-none">
          <TemplateComponent data={cvData} />
        </div>
      </div>
      {/* Tips */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">
          💡 Tips for your CV
        </h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Keep your professional summary concise and impactful</li>
          <li>• Use action verbs to describe your achievements</li>
          <li>• Quantify your accomplishments with numbers when possible</li>
          <li>• Ensure your contact information is current and professional</li>
          <li>• Proofread for spelling and grammar errors</li>
        </ul>
      </div>
    </div>
  );
}
