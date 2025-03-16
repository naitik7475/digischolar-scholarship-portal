import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

function FooterLinkWrapper({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`hover:text-blue-600 dark:hover:text-blue-400 ${className}`}
    >
      {children}
    </Link>
  );
}

function MyFooter() {
  return (
    <Footer container className="rounded-none border-t border-gray-300 bg-gray-200 shadow-md dark:border-gray-700 dark:bg-gray-900">
      <Footer.Copyright href="#" by="DIGISCHOLAR™" year={2025} />
      <Footer.LinkGroup className="flex space-x-6">
        <FooterLinkWrapper to="/Faq">FAQ</FooterLinkWrapper>
        <FooterLinkWrapper to="/about">Privacy Policy</FooterLinkWrapper>
        <FooterLinkWrapper to="/about">Terms and Conditions</FooterLinkWrapper>
        <Footer.Link href="https://dsel.education.gov.in/" className="hover:text-blue-600 dark:hover:text-blue-400">GOV.in</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MyFooter;
