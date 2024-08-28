//Importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright{" "}
            <Link to={"mailTo:vaijai.smily06@gmail.com"}>
              ©vaijai.smily06@gmail.com
            </Link>{" "}
            2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;