import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="px-5 lg:px-16 py-10 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-2.5 bg-background text-white border-b-white border-b">
        <div className="font-semibold space-y-4 lg:space-y-2.5px">
          <p className="text-sm lg:text-base">
            Ready to be a part of something extrordinary
          </p>
          <p className="text-xl lg:text-[32px] ">
            Let's work together to create a difference
          </p>
        </div>
        <div>
          <Link href="/" className="">
            <button className="bg-primary text-white px-6 py-3 rounded-sm cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-background-dark py-8 px-5 md:px-16 flex flex-col gap-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-5 md:gap-20 justify-center">
          <div className="max-w-xs flex flex-col gap-5">
            <div>
              <Image
                src="/images/tobams.png"
                alt="tobams_logo"
                width={200}
                height={200}
              />
              <p className="md:text-base text-sm font-normal leading-relaxed mt-2">
                Tobams Group is an innovative consultancy firm reshaping the
                future of tech talent development in Africa, specializing in
                talent acquisition, internships, and skill development with a
                global perspective.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="/" className="">
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn_tobams"
                  className="bg-white h-10 w-10 p-2 rounded-[50px]"
                />
              </Link>
              <Link href="/">
                <img
                  src="/icons/instagram.png"
                  alt="Instagram_tobams"
                  className="bg-white h-10 w-10 p-2 rounded-[50px]"
                />
              </Link>
              <Link href="/">
                <img
                  src="/icons/x.png"
                  alt="Twitter_tobams"
                  className="bg-white h-10 w-10 p-2 rounded-[50px]"
                />
              </Link>
            </div>
          </div>

          {/* What We Do */}
          <div className="max-w-xs">
            <ul className="flex flex-col gap-4">
              <li className="font-bold text-xl">What We Do</li>
              {[
                "Sustainability Services",
                "Strategy Planning and Implementation",
                "Tech Talent Solutions",
                "Training and Development",
                "IT Consulting Services",
                "Social Impact",
                "Talent Recruitment",
              ].map((service, index) => {
                return (
                  <li key={index} className="md:text-base text-sm">
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:mx-auto max-w-sm">
            <ul className="flex flex-col gap-4">
              <li className="font-bold text-xl">Company</li>
              {[
                "About",
                "Jobs",
                "Projects",
                "Our Founder",
                "Business Model",
                "The team",
                "Contact Us",
                "Blog",
                "FAQs",
                "Testimonials",
              ].map((service, index) => {
                return <li key={index}>{service}</li>;
              })}
            </ul>
          </div>

          {/* Solution */}
          <div className="lg:mx-auto max-w-xs">
            <ul className="flex flex-col gap-4">
              <li className="font-bold font-xl">Solution</li>
              {[
                "Tobams Academy",
                "Help a Tech Talent",
                "Campus Ambassadors Program",
                "Join Our Platform",
                "Pricing",
                "Book a Consultation",
                "Join Our Slack Community",
              ].map((service, index) => {
                return (
                  <li key={index} className="font-light">
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/6 flex flex-col lg:flex-row items-center justify-center gap-6 p-6 my-4 rounded-lg">
          <div className="flex flex-col gap-2.5 order-2 lg:order-1">
            <p className="text-xl font-bold">Registered Offices</p>
            <div className="flex flex-col lg:flex-row gap-6">
              <p className="">
                <span className="text-secondary">United Kingdom</span>
                <br />
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
              <div className="hidden lg:block border-r border-solid border-[#DDD0DA]/10 h-20"></div>
              <p>
                <span className="text-secondary">Nigeria</span>
                <br /> RC 1048722 (Registered by the Corporate Affairs
                Commission) 4, Muaz Close, Angwar-Rimi
              </p>
            </div>
          </div>
          <div className="flex flex-col px-0 lg:px-6 gap-2.5 border-0 lg:border-l border-solid border-[#DDD0DA]/10 order-1 lg:order-2 w-full lg:w-auto">
            <p className="text-xl font-bold mb-2">Contact Information</p>
            <p className="flex items-center gap-2 mb-1">
              <img
                src="/icons/email.png"
                alt="Email"
                className="h-3 w-4.5 inline mr-2"
              />
              theteam@tobamsgroup.com
            </p>
            <p className="flex items-center gap-2">
              <img
                src="/icons/phone.png"
                alt="Phone"
                className="h-4 w-4 inline mr-2"
              />
              +447886600748
            </p>
          </div>
        </div>

        <hr className="border-t border-solid border-[#DDD0DA]/10" />
        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          <p className="text-base font-light text-center lg:text-start flex-1 order-2 lg:order-1">
            Copyright &copy; {new Date().getFullYear()} Tobams Group. All rights
            reserved.
          </p>
          <div className="md:flex order-1 lg:order-2">
            <div className="flex md:order-2 md:grid-cols-3 gap-3">
              <Link href="/" className="order-1 lg:order-2 md:mx-auto ">
                <button className="font-light text-base decoration-1 underline cursor-pointer ">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/" className="order-2 lg:order-3">
                <button className="font-light text-base decoration-1 underline cursor-pointer ">
                  Cookies Policy
                </button>
              </Link>
            </div>
            <Link href="/" className="order-3 lg:order-1 ml-10 lg:ml-0 md:mx-5">
              <button className="font-light text-base decoration-0 underline cursor-pointer ">
                Terms and Condition
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
