import Sign from "../assets/sign";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center text-sm">
      <div>
        <Sign />
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} - Need to reach me?{" "}
        <a
          href="https://x.com/milindmishra_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          DM me on Twitter.
        </a>
      </div>
    </div>
  );
};

export default Footer;
