import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Solutions", href: "#solutions" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "Changelog", href: "#changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Guides", href: "#guides" },
        { name: "API Reference", href: "#api" },
        { name: "Blog", href: "#blog" },
        { name: "Community", href: "#community" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
        { name: "Partners", href: "#partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Security", href: "#security" },
        { name: "Compliance", href: "#compliance" },
      ],
    },
  ];

  return (
    <footer className="bg-primary-900 border-t border-primary-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-100 text-transparent bg-clip-text">
                AutoCloud
              </span>
            </Link>
            <p className="text-accent-100/70 mb-4 max-w-xs">
              Simplify and optimize your cloud infrastructure management with our comprehensive SaaS platform.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github", "facebook"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-accent-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-accent-100/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-800 pt-8 pb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay up to date</h3>
            <p className="text-accent-100/70 mb-6">
              Get notified about new features and updates. No spam, we promise.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-100/50 text-sm">
            © {currentYear} AutoCloud. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-accent-100/50 text-sm">
              Made with ♥ for the cloud community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;