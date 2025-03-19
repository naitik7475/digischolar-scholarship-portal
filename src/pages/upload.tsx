import { Button, FileInput, Label } from "flowbite-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveApplicationData, uploadFile } from "../firebase";

function PMSSSDocumentUpload() {
  const { pmsssId } = useParams<{ pmsssId: string }>();
  const [files, setFiles] = useState<Record<string, File | null>>({
    aadhaar: null,
    domicile: null,
    marksheet: null,
    income: null,
    other: null,
  });
  const [filePreviews, setFilePreviews] = useState<Record<string, string>>({
    aadhaar: "",
    domicile: "",
    marksheet: "",
    income: "",
    other: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({
    aadhaar: "",
    domicile: "",
    marksheet: "",
    income: "",
    other: "",
  });
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [field]: "File size should not exceed 2MB",
        }));
        setFiles((prev) => ({ ...prev, [field]: null }));
        setFilePreviews((prev) => ({ ...prev, [field]: "" }));
      } else {
        setFiles((prev) => ({ ...prev, [field]: file }));
        setErrors((prev) => ({ ...prev, [field]: "" }));

        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreviews((prev) => ({
            ...prev,
            [field]: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");
    setIsSubmitting(true);

    try {
      const missingFiles = Object.keys(files).filter(
        (key) => !files[key] && key !== "other"
      );

      if (missingFiles.length > 0) {
        setStatusMessage("Please upload all required documents.");
        return;
      }

      if (!pmsssId) {
        setStatusMessage("PMSSS ID is missing. Please try again.");
        return;
      }

      const uploadedFileURLs: Record<string, string> = {};

      // Upload files sequentially
      for (const field in files) {
        const file = files[field];
        if (file) {
          const fileURL = await uploadFile(file, pmsssId, field);
          if (fileURL) {
            uploadedFileURLs[field] = fileURL;
          } else {
            setStatusMessage(`Error uploading ${field}. Please try again.`);
            return;
          }
        }
      }

      await saveApplicationData(pmsssId, pmsssId, uploadedFileURLs);
      navigate(`/application-confirmation/${pmsssId}`);
    } catch (error) {
      setStatusMessage("An error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      <div className="flex size-full items-center justify-center bg-gray-900/80 py-7 backdrop-blur-sm">
        <div className="w-full max-w-2xl rounded-lg bg-white p-8 py-5 shadow-lg dark:bg-gray-800 dark:text-white">
          <div className="py-5">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Upload Required Documents
            </h2>
            <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-300">
              Please upload all required documents. Ensure files are in PDF format and under 2MB.
            </p>

            {statusMessage && (
              <p className="mb-4 text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                {statusMessage}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              {/* File upload sections remain the same */}
              {/* Aadhaar Upload */}
              <div className="mb-6">
                <Label htmlFor="aadhaar" className="mb-2 block text-sm font-medium">
                  Aadhaar Card
                </Label>
                <FileInput
                  id="aadhaar"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "aadhaar")}
                  required
                />
                {errors.aadhaar && (
                  <p className="mt-1 text-sm text-red-500">{errors.aadhaar}</p>
                )}
                {filePreviews.aadhaar && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Aadhaar Card Preview:</p>
                    <embed src={filePreviews.aadhaar} type="application/pdf" width="100%" height="200px" />
                  </div>
                )}
              </div>

              {/* Domicile Certificate Upload */}
              <div className="mb-6">
                <Label htmlFor="domicile" className="mb-2 block text-sm font-medium">
                  Domicile Certificate
                </Label>
                <FileInput
                  id="domicile"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "domicile")}
                  required
                />
                {errors.domicile && (
                  <p className="mt-1 text-sm text-red-500">{errors.domicile}</p>
                )}
                {filePreviews.domicile && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Domicile Certificate Preview:</p>
                    <embed src={filePreviews.domicile} type="application/pdf" width="100%" height="200px" />
                  </div>
                )}
              </div>

              {/* Marksheet Upload */}
              <div className="mb-6">
                <Label htmlFor="marksheet" className="mb-2 block text-sm font-medium">
                  12th Marksheet
                </Label>
                <FileInput
                  id="marksheet"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "marksheet")}
                  required
                />
                {errors.marksheet && (
                  <p className="mt-1 text-sm text-red-500">{errors.marksheet}</p>
                )}
                {filePreviews.marksheet && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Marksheet Preview:</p>
                    <embed src={filePreviews.marksheet} type="application/pdf" width="100%" height="200px" />
                  </div>
                )}
              </div>

              {/* Income Certificate Upload */}
              <div className="mb-6">
                <Label htmlFor="income" className="mb-2 block text-sm font-medium">
                  Income Certificate
                </Label>
                <FileInput
                  id="income"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "income")}
                  required
                />
                {errors.income && (
                  <p className="mt-1 text-sm text-red-500">{errors.income}</p>
                )}
                {filePreviews.income && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Income Certificate Preview:</p>
                    <embed src={filePreviews.income} type="application/pdf" width="100%" height="200px" />
                  </div>
                )}
              </div>

              {/* Other Documents Upload */}
              <div className="mb-6">
                <Label htmlFor="other" className="mb-2 block text-sm font-medium">
                  Other Documents (Optional)
                </Label>
                <FileInput
                  id="other"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "other")}
                />
                {errors.other && (
                  <p className="mt-1 text-sm text-red-500">{errors.other}</p>
                )}
                {filePreviews.other && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Other Document Preview:</p>
                    <embed src={filePreviews.other} type="application/pdf" width="100%" height="200px" />
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="mt-4 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Documents..." : "Submit Documents"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMSSSDocumentUpload;