const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20">
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-1.5 items-center justify-between">
        <p className="text-sm text-white/60">
          {new Date().getFullYear()} &copy; All rights reserved.
        </p>
        <p className="text-sm text-white/60">
          Built with <span className="text-red-800">&#9825;</span> by
          <span className="text-accent"> Muhammed Jasir M</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
