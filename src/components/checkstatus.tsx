import { Timeline, TextInput, Button, Alert, Card } from "flowbite-react";
import {
  HiCheck,
  HiClipboardList,
  HiCurrencyDollar,
  HiDocument,
  HiMailOpen,
} from "react-icons/hi";
import { useState } from "react";

declare module "flowbite-react" {
  interface TimelineProps extends React.HTMLAttributes<HTMLElement> {
    horizontal?: boolean;
  }

  interface TimelinePointProps extends React.HTMLAttributes<HTMLElement> {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
}

export default function CheckStatusPage() {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStatus, setCurrentStatus] = useState("Application Submitted");

  const statusStages = [
    {
      title: "Application Submitted Successfully",
      icon: HiClipboardList,
      status: "Application Submitted",
      date: "February 2022",
    },
    {
      title: "Documents Verification",
      icon: HiDocument,
      status: "Documents Verification",
      date: "March 2022",
    },
    {
      title: "Scholarship Approved",
      icon: HiCheck,
      status: "Scholarship Approved",
      date: "April 2022",
    },
    {
      title: "Funds Disbursed",
      icon: HiCurrencyDollar,
      status: "Funds Disbursed",
      date: "May 2022",
    },
    {
      title: "Funds Received",
      icon: HiMailOpen,
      status: "Funds Received",
      date: "June 2022",
    },
  ];

  const handleViewStatus = () => {
    if (!applicationNumber.trim()) {
      setErrorMessage("Please enter a valid application number.");
    } else if (!/^\d{8}$/.test(applicationNumber)) {
      // Example validation: application number must be 8 digits
      setErrorMessage("Invalid application number. Please try again.");
    } else {
      setErrorMessage("");
      setCurrentStatus("Documents Verification"); // Replace with real logic to fetch status
    }
  };

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      <div className="bg-slate-800/80">
        <div className="container mx-auto min-h-screen px-4 py-12">
          <Card className="w-full rounded-xl shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {/* Application Status Section */}
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                Track Your Application Status
              </h1>
              <p className="text-base font-medium text-gray-600 dark:text-gray-400 md:text-lg">
                Enter your application number below to track your scholarship
                progress.
              </p>
            </div>

            {/* Input Section */}
            <div className="mb-10 flex flex-col items-center gap-4 px-4">
              <div className="flex w-full max-w-lg flex-col gap-4 md:flex-row md:items-center">
                <TextInput
                  className="flex-auto rounded-lg border-gray-300 bg-gray-50 px-4 py-2 text-lg font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:focus:ring-blue-400"
                  placeholder="Enter Application Number"
                  value={applicationNumber}
                  onChange={(e) => setApplicationNumber(e.target.value)}
                />
                <Button
                  gradientDuoTone="greenToBlue"
                  onClick={handleViewStatus}
                >
                  View Status
                </Button>
              </div>
              {errorMessage && (
                <p className="mt-2 text-sm font-medium text-red-500 dark:text-red-400">
                  {errorMessage}
                </p>
              )}
            </div>

            {/* Timeline Section */}
            <div className="px-4">
              <Timeline className="mx-auto max-w-3xl">
                {statusStages.map((stage, index) => (
                  <Timeline.Item key={index}>
                    <Timeline.Point
                      icon={stage.icon}
                      className={`${
                        currentStatus === stage.status
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                          : "bg-gray-300 text-gray-500 dark:bg-gray-700"
                      }`}
                    />
                    <Timeline.Content>
                      <Timeline.Time
                        className={`${
                          currentStatus === stage.status
                            ? "font-medium text-blue-600 dark:text-blue-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {stage.date}
                      </Timeline.Time>
                      <Timeline.Title
                        className={`${
                          currentStatus === stage.status
                            ? "font-semibold text-blue-600 dark:text-blue-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {stage.title}
                      </Timeline.Title>
                      {currentStatus === stage.status && (
                        <Alert
                          className="mt-4 bg-cyan-100 text-cyan-700 dark:bg-teal-800 dark:text-white"
                          color="info"
                        >
                          Current Status: {stage.status}
                        </Alert>
                      )}
                    </Timeline.Content>
                  </Timeline.Item>
                ))}
              </Timeline>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
