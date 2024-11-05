import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-right mt-8 text-[#30627E] py-2">
      <p className="text-sm">
        feito por{" "}
        <a
          href="https://www.instagram.com/davicbezerra/"
          about="https://www.instagram.com/davicbezerra/"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          <strong className=" border border-separate p-4 rounded-full">
            Davi Bezerra
          </strong>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
