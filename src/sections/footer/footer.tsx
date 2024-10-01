const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg text-white p-4 md:p-6 w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Milan Patel. Crafted with passion
            🤖. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
