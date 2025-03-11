// HeroSection.tsx
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiOutlineBell, HiOutlineBookOpen, HiOutlineStar, HiOutlineChatAlt2, HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom'; // Import Link

function HeroSection() {
  const announcements = [
    {
      id: 1,
      title: "New Scholarship Application Deadline Extended",
      link: "/announcements/1",
      color: "from-purple-500 to-indigo-500", // Purple to Indigo
    },
    {
      id: 2,
      title: "PMSSS 2024 Counseling Schedule Released",
      link: "/announcements/2",
      color: "from-green-500 to-teal-500", // Green to Teal
    },
    {
      id: 3,
      title: "Important Update: Document Verification Process",
      link: "/announcements/3",
      color: "from-yellow-500 to-orange-500", // Yellow to Orange
    },
    {
      id: 4,
      title: "Webinar on PMSSS Benefits and Application Process",
      link: "/announcements/4",
      color: "from-pink-500 to-red-500", // Pink to Red
    },
    {
      id: 5,
      title: "New Partner Institutions Added to PMSSS 2024",
      link: "/announcements/5",
      color: "from-blue-500 to-cyan-500", // Blue to Cyan
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb')] bg-cover bg-center">
        <div className="flex h-screen items-center justify-center bg-slate-700/80">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Empowering Dreams, Enabling Success
            </h1>
            <p className="mb-8 text-lg text-gray-200 md:text-xl lg:mb-12 lg:text-2xl">
              Prime Minister's Special Scholarship Portal is designed to bridge
              the gap between scholarship providers and seekers, empowering more
              students to benefit from the system.
            </p>
            <div className="flex flex-col items-center justify-center">
              <Link to="/eligibility"> {/* Use Link to navigate to eligibility page */}
                <Button className="mb-5">
                  Check Your Eligibility
                  <HiOutlineArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <div className="text-sm text-gray-300 md:text-base">
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
        <div className="container mx-auto px-6">
          <h2 className="mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
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
              }
            `}
          </style>
          <div className="overflow-hidden">
            <div className="animate-scroll flex space-x-8">
              {announcements.map((announcement) => (
                <a
                  key={announcement.id}
                  href={announcement.link}
                  className={`flex min-w-[300px] items-center rounded-lg bg-gradient-to-br ${announcement.color} p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl`}
                >
                  <HiOutlineBell className="mr-4 text-3xl text-white" />
                  <p className="text-lg font-semibold text-white">{announcement.title}</p>
                </a>
              ))}
              {/* Duplicate announcements for infinite scroll effect */}
              {announcements.map((announcement) => (
                <a
                  key={`dup-${announcement.id}`}
                  href={announcement.link}
                  className={`flex min-w-[300px] items-center rounded-lg bg-gradient-to-br ${announcement.color} p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl`}
                >
                  <HiOutlineBell className="mr-4 text-3xl text-white" />
                  <p className="text-lg font-semibold text-white">{announcement.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
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
                className="group relative overflow-hidden border-0 bg-white p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                {feature.icon}
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            What Students Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "PMSSS helped me secure admission to a top engineering college without any financial stress.",
                name: "Priya Sharma",
              },
              {
                quote: "The scholarship covered all my expenses, allowing me to focus on my studies.",
                name: "Rohit Singh",
              },
              {
                quote: "I am grateful for the support and guidance provided by PMSSS.",
                name: "Anjali Verma",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border-0 bg-white p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-20"></div>
                <p className="mb-4 text-lg italic text-gray-600 dark:text-gray-300">
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