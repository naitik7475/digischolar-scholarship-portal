// HeroSection.tsx
import { Button } from "flowbite-react";
import {
  HiOutlineArrowRight,
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineStar,
  HiOutlineChatAlt2,
  HiOutlineMail,
} from "react-icons/hi";
import { Link } from "react-router-dom"; 

function HeroSection() {
  const announcements = [
    {
      id: 1,
      title: "New Scholarship Application Deadline Extended",
      pdf: "/pdfs/announcement-1.pdf",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 2,
      title: "PMSSS 2024 Counseling Schedule Released",
      pdf: "/pdfs/announcement-2.pdf",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      title: "Important Update: Document Verification Process",
      pdf: "/pdfs/announcement-3.pdf",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Webinar on PMSSS Benefits and Application Process",
      pdf: "/pdfs/announcement-4.pdf",
      color: "from-pink-500 to-red-500",
    },
    {
      id: 5,
      title: "New Partner Institutions Added to PMSSS 2024",
      pdf: "/pdfs/announcement-5.pdf",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
        <div className="flex min-h-[80vh] items-center justify-center bg-slate-700/80 px-4 py-16 md:min-h-screen">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Empowering Dreams,<br />Enabling Success
            </h1>
            <p className="mb-8 text-base text-gray-200 sm:text-lg md:text-xl lg:mb-12 lg:text-2xl">
              Prime Minister's Special Scholarship Portal is designed to bridge
              the gap between scholarship providers and seekers, empowering more
              students to benefit from the system.
            </p>
            <div className="flex flex-col items-center justify-center">
              <Link to="/eligibility">
                <Button className="mb-5">
                  Check Your Eligibility
                  <HiOutlineArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <div className="text-sm text-gray-300 sm:text-base">
                <p className="font-semibold">PMSSS Scholarship</p>
                <p className="mt-2">
                  PMSSS is a scholarship scheme by the All India Council for
                  Technical Education (AICTE) for students domiciled in the UTs of
                  J&K and Ladakh who secure admission in government
                  colleges/institutions through AICTE's counseling process under the
                  supernumerary quota, after passing Class 12th or equivalent
                  examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Announcements
          </h2>
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 20s linear infinite;
                display: flex;
                width: max-content;
                will-change: transform;
              }
              .announcement-container {
                overflow: hidden;
                position: relative;
                width: 100%;
              }
              .announcement-container::before,
              .announcement-container::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100px;
                z-index: 2;
                pointer-events: none;
              }
              .announcement-container::before {
                left: 0;
                background: linear-gradient(to right, rgba(243, 244, 246, 1) 0%, rgba(243, 244, 246, 0) 100%);
              }
              .announcement-container::after {
                right: 0;
                background: linear-gradient(to left, rgba(243, 244, 246, 1) 0%, rgba(243, 244, 246, 0) 100%);
              }
              .dark .announcement-container::before,
              .dark .announcement-container::after {
                background: linear-gradient(to right, rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 0) 100%);
              }
              .dark .announcement-container::after {
                background: linear-gradient(to left, rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 0) 100%);
              }
            `}
          </style>
          <div className="announcement-container">
            <div className="animate-scroll flex space-x-4 sm:space-x-8">
              {[...announcements, ...announcements].map((announcement, index) => (
                <a
                  key={index}
                  href={announcement.pdf}
                  download={`announcement-${announcement.id}.pdf`}
                  className={`flex min-w-[250px] items-center rounded-lg bg-gradient-to-br ${announcement.color} p-4 shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:min-w-[300px] sm:p-6`}
                >
                  <HiOutlineBell className="mr-4 text-2xl text-white sm:text-3xl" />
                  <p className="text-base font-semibold text-white sm:text-lg">{announcement.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h2 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Why Choose PMSSS?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <HiOutlineBookOpen className="mb-4 text-5xl text-green-400" />,
                title: "Quality Education",
                description: "Admission to top institutions under AICTE's counseling process.",
              },
              {
                icon: <HiOutlineStar className="mb-4 text-5xl text-blue-400" />,
                title: "Financial Assistance",
                description: "Covers tuition fees, hostel charges, and other expenses.",
              },
              {
                icon: <HiOutlineChatAlt2 className="mb-4 text-5xl text-purple-400" />,
                title: "Guidance & Support",
                description: "Dedicated helpline and support for students.",
              },
              {
                icon: <HiOutlineMail className="mb-4 text-5xl text-pink-400" />,
                title: "Easy Application",
                description: "Online application process with step-by-step guidance.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border-0 bg-white p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-700 sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                {feature.icon}
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{feature.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h2 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            What Students Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "PMSSS helped me secure admission to a top engineering college without any financial stress.",
                name: "Ali Samad",
              },
              {
                quote: "The scholarship covered all my expenses, allowing me to focus on my studies.",
                name: "Ashutosh Bedi",
              },
              {
                quote: "I am grateful for the support and guidance provided by PMSSS.",
                name: "Shreya Singh",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border-0 bg-white p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-700 sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                <p className="mb-4 text-base italic text-gray-600 dark:text-gray-300 sm:text-lg">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;