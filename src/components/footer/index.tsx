import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center text-sm">
      <div>
        <Image
          alt="Milind Mishra Signature"
          loading="lazy"
          width="90"
          height="90"
          src="/milind-mishra-signature.svg"
          className="mb-4"
        />
      </div>
      <div className="text-gray-500">
        © {new Date().getFullYear()} - Milind Mishra
      </div>
    </div>
  );
};

export default Footer;
