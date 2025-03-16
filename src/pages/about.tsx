import { Accordion, Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { HiShieldCheck, HiDatabase, HiKey, HiUserCircle } from "react-icons/hi";

function AboutPage() {
  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen bg-slate-700/85 p-4 sm:p-8">
        <div className="container mx-auto min-h-screen px-4 py-8 sm:px-6 sm:py-12">
          {/* About PMSSS Scheme Section */}
          <Card className="mb-8 w-full rounded-xl p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
            <h2 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-center text-3xl font-extrabold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 sm:text-4xl md:text-5xl">
              About PMSSS Scheme
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-center text-base sm:px-6 sm:text-lg lg:px-12">
                The Prime Minister's Special Scholarship Scheme (PMSSS) is an initiative by 
                the Government of India to provide financial assistance to students from 
                Jammu & Kashmir and Ladakh for pursuing higher education in recognized 
                institutions across India.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700/50">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600 dark:text-blue-300">Key Features</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                    <li>Full tuition fee coverage</li>
                    <li>Hostel and mess charges</li>
                    <li>Annual book allowance</li>
                    <li>Travel reimbursement</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700/50">
                  <h3 className="mb-3 text-xl font-semibold text-green-600 dark:text-green-300">Eligibility</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                    <li>Domicile of J&K or Ladakh</li>
                    <li>Passed 10+2 examination</li>
                    <li>Admission through AICTE counseling</li>
                    <li>Family income less than ₹8 lakhs</li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-sm sm:text-base">
                For detailed eligibility criteria and application process, please check our 
                <Link to="/eligibility" className="ml-2 text-blue-600 hover:underline dark:text-blue-300">
                  Eligibility Page
                </Link>
              </p>
            </div>
          </Card>

          {/* Privacy Policy Section */}
          <Card className="mb-8 w-full rounded-xl p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
            <h2 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-center text-3xl font-extrabold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 sm:text-4xl md:text-5xl">
              Privacy Policy
            </h2>
            
            <div className="mx-auto w-full max-w-4xl space-y-8">
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center gap-3">
                  <HiDatabase className="text-3xl text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Data Collection</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We collect only necessary information required for scholarship processing:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Personal identification details</li>
                  <li>Academic records and certificates</li>
                  <li>Family income information</li>
                  <li>Contact information (email & phone)</li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center gap-3">
                  <HiShieldCheck className="text-3xl text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Data Protection</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Your information is protected through multiple security layers:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>256-bit SSL encryption for all data transfers</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Role-based access control for administrators</li>
                  <li>Secure server infrastructure with firewalls</li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center gap-3">
                  <HiKey className="text-3xl text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Data Usage</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Collected data is strictly used for:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Scholarship eligibility verification</li>
                  <li>Application processing and documentation</li>
                  <li>Communication regarding application status</li>
                  <li>Anonymous statistical analysis</li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700/50">
                <div className="mb-4 flex items-center gap-3">
                  <HiUserCircle className="text-3xl text-teal-600 dark:text-teal-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">User Rights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Applicants maintain full control over their data:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Right to access and download your data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Withdraw consent (may affect application)</li>
                  <li>Request data deletion after process completion</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Terms & Conditions Section */}
          <Card className="w-full rounded-xl p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
            <h2 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-center text-3xl font-extrabold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 sm:text-4xl md:text-5xl">
              Terms & Conditions
            </h2>
            
            <div className="mx-auto w-full max-w-4xl">
              <Accordion collapseAll>
                <Accordion.Panel>
                  <Accordion.Title className="text-base font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300 sm:text-lg md:text-xl">
                    Scholarship Continuation
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="mt-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-800 backdrop-blur-sm dark:bg-gray-700/50 dark:text-gray-200 sm:p-5 sm:text-base">
                      <p>
                        Students must maintain minimum 75% attendance and 60% marks 
                        in each academic year to continue receiving benefits.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-base font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300 sm:text-lg md:text-xl">
                    Document Verification
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="mt-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-800 backdrop-blur-sm dark:bg-gray-700/50 dark:text-gray-200 sm:p-5 sm:text-base">
                      <p>
                        Original documents must be verified annually. Any discrepancy 
                        will lead to immediate cancellation of benefits.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-base font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-300 sm:text-lg md:text-xl">
                    Transfer Policy
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="mt-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-800 backdrop-blur-sm dark:bg-gray-700/50 dark:text-gray-200 sm:p-5 sm:text-base">
                      <p>
                        Scholarship is institution-specific. Transfer to other institutions 
                        not permitted under normal circumstances. Any request for transfer 
                        must be approved by both the current and receiving institutions, 
                        along with AICTE authorities.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;