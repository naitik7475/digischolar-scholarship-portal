/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { Accordion, Card } from "flowbite-react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen bg-slate-700/85 p-4 sm:p-8">
        <div className="container mx-auto min-h-screen px-4 py-8 sm:px-6 sm:py-12">
          <Card className="w-full rounded-xl p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-center text-3xl font-extrabold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 sm:text-4xl md:text-5xl">
              FAQ: Pradhan Mantri Special Scholarship Scheme (PMSSS)
            </h1>
            <p className="mb-8 text-center text-base text-gray-700 dark:text-gray-200 sm:px-6 sm:text-lg lg:px-12">
              Find answers to the most frequently asked questions about PMSSS, and learn how it can help students from Jammu and Kashmir achieve their academic goals.
            </p>

            <div className="mx-auto w-full max-w-4xl">
              <Accordion collapseAll>
                {[
                  {
                    title: "What is the Pradhan Mantri Special Scholarship Scheme (PMSSS)?",
                    content:
                      "PMSSS is a scholarship program initiated by the Government of India to support students from Jammu and Kashmir in pursuing higher education outside the state.",
                  },
                  {
                    title: "Who is eligible for PMSSS?",
                    content:
                      "Students who are permanent residents of Jammu and Kashmir, have passed their 12th grade from the state, and meet the required family income criteria are eligible.",
                  },
                  {
                    title: "What are the benefits provided under PMSSS?",
                    content:
                      "The scheme covers tuition fees, maintenance allowance, and other expenses for undergraduate courses in approved institutions.",
                  },
                  {
                    title: "How can I apply for PMSSS?",
                    content:
                      "Students can apply online through the official DIGISCHOLAR portal during the application period.",
                  },
                  {
                    title: "What is the family income limit to be eligible for PMSSS?",
                    content: "The annual family income should not exceed ₹8 lakh.",
                  },
                  {
                    title: "Are there any reserved seats under PMSSS?",
                    content:
                      "Yes, the scheme reserves seats for students in various streams like engineering, medical, and general courses.",
                  },
                  {
                    title: "Where can I find the official guidelines for PMSSS?",
                    content:
                      "The official guidelines are available on the DIGISCHOLAR website under the About section.",
                  },
                  {
                    title: "What should I do if I face issues during the application process?",
                    content:
                      "Contact the PMSSS helpline or AICTE support team for assistance.",
                  },
                ].map((item, index) => (
                  <Accordion.Panel key={index}>
                    <Accordion.Title className="!text-base !font-semibold !text-gray-800 hover:!text-blue-600 dark:!text-gray-200 dark:hover:!text-blue-300 sm:!text-lg md:!text-xl">
                      {item.title}
                    </Accordion.Title>
                    <Accordion.Content>
                      <div
                        style={{
                          width: "100%",
                          height: "100px",
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                        className="mt-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-800 backdrop-blur-sm dark:bg-gray-700/50 dark:text-gray-200 sm:p-5 sm:text-base"
                      >
                        <p>{item.content}</p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;