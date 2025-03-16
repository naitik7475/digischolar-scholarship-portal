//howtoapply.tsx
import { Card } from "flowbite-react";

const HowToApply = () => {
  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
      <div className="min-h-screen bg-slate-700/80 p-8">
        <header className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
            How to Apply for PMSSS
          </h1>
          <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
            Follow these simple steps to secure your scholarship
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <Card className="relative overflow-hidden bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-2 text-white">
                <span className="text-xl font-bold">01</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Check Eligibility
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Ensure you meet the criteria:
            </p>
            <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-300">
              <li>Permanent resident of J&K</li>
              <li>Passed Class 12th or equivalent</li>
              <li>Family income under ₹8 lakh</li>
            </ul>
            <img
              src="/images/eligibility.png"
              alt="Eligibility"
              className="mt-4 rounded-lg dark:brightness-90"
            />
          </Card>

          {/* Step 2 */}
          <Card className="relative overflow-hidden bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 p-2 text-white">
                <span className="text-xl font-bold">02</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Register Online
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              DIGISCHOLAR portal requirements:
            </p>
            <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-300">
              <li>Personal details</li>
              <li>Contact information</li>
              <li>Educational qualifications</li>
            </ul>
            <img
              src="/images/register.png"
              alt="Register Online"
              className="mt-4 rounded-lg dark:brightness-90"
            />
          </Card>

          {/* Step 3 */}
          <Card className="relative overflow-hidden bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 p-2 text-white">
                <span className="text-xl font-bold">03</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Upload Documents
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Required documents include:
            </p>
            <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-300">
              <li>Class 12th marksheet</li>
              <li>Income certificate</li>
              <li>Domicile certificate</li>
            </ul>
            <img
              src="/images/upload-documents.png"
              alt="Upload Documents"
              className="mt-4 rounded-lg dark:brightness-90"
            />
          </Card>

          {/* Step 4 */}
          <Card className="relative overflow-hidden bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-400 to-red-500"></div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-r from-pink-400 to-red-500 p-2 text-white">
                <span className="text-xl font-bold">04</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Submit Application
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Final steps before submission:
            </p>
            <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-300">
              <li>Review all details</li>
              <li>Verify documents</li>
              <li>Save application ID</li>
            </ul>
            <img
              src="/images/submit-application.png"
              alt="Submit Application"
              className="mt-4 rounded-lg dark:brightness-90"
            />
          </Card>

          {/* Step 5 */}
          <Card className="relative overflow-hidden bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-400 to-orange-500"></div>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-gradient-to-r from-red-400 to-orange-500 p-2 text-white">
                <span className="text-xl font-bold">05</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Track Status
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Post-submission process:
            </p>
            <ul className="ml-4 mt-2 list-disc text-gray-600 dark:text-gray-300">
              <li>Login to portal</li>
              <li>Check approval status</li>
              <li>Receive updates</li>
            </ul>
            <img
              src="/images/track-status.png"
              alt="Track Application Status"
              className="mt-4 rounded-lg dark:brightness-90"
            />
          </Card>
        </div>

        {/* YouTube Section */}
        <div className="mt-16 text-center">
          <h2 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent">
            Watch Step-by-Step Guide
          </h2>
          <div className="mt-8 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="PMSSS Application Process"
              className="w-full max-w-3xl rounded-xl border-4 border-transparent bg-gradient-to-r from-green-400/20 to-blue-500/20 p-1 shadow-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;