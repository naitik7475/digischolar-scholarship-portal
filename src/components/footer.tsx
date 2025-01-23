import { Footer } from "flowbite-react";

function MyFooter() {
    return (
        <Footer container className="rounded-none">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">GOV.in</Footer.Link>
            <Footer.Link href="#">Terms and Conditions</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      );
  }
  
  export default MyFooter;