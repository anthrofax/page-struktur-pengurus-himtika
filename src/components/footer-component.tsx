export function FooterComponent() {
    return (
      <footer className="bg-white shadow text-black">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://himtika.cs.unsika.ac.id/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo" 
              />*/}
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                HIMTIKA
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
              <li>
                <a
                  href="https://himtika.cs.unsika.ac.id/"
                  className="hover:underline me-4 md:me-6"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="https://himtika.cs.unsika.ac.id#kontak-kami"
                  className="hover:underline me-4 md:me-6"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://wa.link/xkpkjd"
                  className="hover:underline me-4 md:me-6"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            © 2023{" "}
            <a
              href="https://himtika.cs.unsika.ac.id/"
              className="hover:underline"
            >
              Himtika™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
  