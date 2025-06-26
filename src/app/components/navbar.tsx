"use client";

import { Button } from "@/components/ui/button";
import { useCVContext } from "@/contexts/CVContext";
import { FileText, Download, ArrowLeft } from "lucide-react";

export default function Navbar() {
  const { currentStep, setCurrentStep, selectedTemplate, cvData } =
    useCVContext();
  const handleDownloadPDF = () => {
    // Get the complete page HTML to preserve all styling
    const previewContent = document.querySelector(".cv-preview-content");
    if (previewContent) {
      // Clone the content to avoid modifying the original
      const clonedContent = previewContent.cloneNode(true) as HTMLElement;

      const printWindow = window.open("", "_blank");
      if (printWindow) {
        // Get the complete HTML document
        const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>CV - ${cvData?.personalInfo?.fullName || "Resume"}</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com/3.4.1"></script>
              <style>
                /* Import all existing styles */
                ${Array.from(document.styleSheets)
                  .map((sheet) => {
                    try {
                      return Array.from(sheet.cssRules)
                        .map((rule) => rule.cssText)
                        .join("\n");
                    } catch (e) {
                      return "";
                    }
                  })
                  .join("\n")}
                
                /* Enhanced print styles */
                @media screen {
                  body {
                    margin: 0;
                    padding: 20px;
                    background: #f5f5f5;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  }
                  .cv-container {
                    max-width: 210mm;
                    margin: 0 auto;
                    background: white;
                    box-shadow: 0 0 20px rgba(0,0,0,0.1);
                  }
                }
                
                @media print {
                  body { 
                    margin: 0; 
                    padding: 0;
                    background: white !important;
                    -webkit-print-color-adjust: exact !important;
                    color-adjust: exact !important;
                  }
                  .cv-container {
                    max-width: none !important;
                    margin: 0 !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                  }
                  .cv-preview-content {
                    box-shadow: none !important;
                    border-radius: 0 !important;
                  }
                }
                
                @page {
                  margin: 0.5in;
                  size: A4;
                }
                
                /* Ensure all colors and backgrounds are preserved */
                * {
                  -webkit-print-color-adjust: exact !important;
                  color-adjust: exact !important;
                }
              </style>
            </head>
            <body>
              <div class="cv-container">
                ${clonedContent.innerHTML}
              </div>
              <script>
                // Auto print when page loads
                window.onload = function() {
                  setTimeout(function() {
                    window.print();
                  }, 1000);
                };
              </script>
            </body>
          </html>
        `;

        printWindow.document.write(htmlContent);
        printWindow.document.close();
      }
    } else {
      alert("CV preview not found. Please navigate to the preview page first.");
    }
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                CV Generator
              </span>
            </div>

            {/* Step Indicator */}
            <div className="hidden md:flex items-center space-x-2 ml-8">
              <div
                className={`flex items-center space-x-2 ${
                  currentStep === "template" ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === "template"
                      ? "bg-blue-600 text-white"
                      : currentStep === "form" || currentStep === "preview"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  1
                </div>
                <span className="text-sm font-medium">Choose Template</span>
              </div>

              <div className="w-8 h-0.5 bg-gray-300"></div>

              <div
                className={`flex items-center space-x-2 ${
                  currentStep === "form" ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === "form"
                      ? "bg-blue-600 text-white"
                      : currentStep === "preview"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  2
                </div>
                <span className="text-sm font-medium">Fill Details</span>
              </div>

              <div className="w-8 h-0.5 bg-gray-300"></div>

              <div
                className={`flex items-center space-x-2 ${
                  currentStep === "preview" ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === "preview"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  3
                </div>
                <span className="text-sm font-medium">Preview & Download</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {currentStep !== "template" && (
              <Button
                variant="outline"
                onClick={() => {
                  if (currentStep === "form") {
                    setCurrentStep("template");
                  } else if (currentStep === "preview") {
                    setCurrentStep("form");
                  }
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            )}

            {currentStep === "preview" && (
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
