import { Button, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/logo.png" className="mr-3 h-12 sm:h-20" alt="Himtika Logo" />
        <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-medium dark:text-white uppercase tracking-widest">
          Himtika
        </span>
      </Navbar.Brand>
      <div className="lg:flex md:order-2 hidden">
        <a href="/#kontak-kami">
          <Button className="group bg-tertiary text-black hover:scale-110 transition-all hover:bg-tertiary">
            Contact
            <HiOutlineArrowRight
              className="ml-2 h-5 w-5 transition-all -rotate-45 group-hover:rotate-6"
              color="black"
            />
          </Button>
        </a>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex md:order-2 text-lg items-center flex-col lg:flex-row gap-8">
          <Dropdown
            arrowIcon={true}
            inline
            label={<p>Tentang Kami</p>}
            className="z-50"
          >
            <Dropdown.Item>
              <Navbar.Link href="/sejarah">Sejarah</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/logo">Logo</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/visi">Visi</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Navbar.Link href="/misi">Misi</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/struktur-organisasi">
                Struktur Organisasi
              </Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label={<p>Agenda</p>}
            className="z-50"
          >
            <Dropdown.Item>
              <Navbar.Link href="/himtika-awards">Himtika Awards</Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label={<p>Event</p>}
            className="z-50"
          >
            <Dropdown.Item>
              <Navbar.Link href="/pekan-it">PEKAN IT</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/lkmmpd">LKMM-PD</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/diesnatalis">Diesnatalis</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/it-bootcamp">IT BOOTCAMP 2024</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/open-project">Open Project</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/semantik">SEMANTIK 8.0</Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label={<p>Aplikasi Publik</p>}
            className="z-50"
          >
            <Dropdown.Item>
              <Navbar.Link href="/corporation">Corporation</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/study-club">Study Club</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/hikode">Hikode</Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/kalendar">Kalendar</Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Link className="lg:hidden" href="/#kontak-kami">
            <Button className="group bg-tertiary text-black hover:scale-110 transition-all hover:bg-tertiary">
              Contact
              <HiOutlineArrowRight
                className="ml-2 h-5 w-5 transition-all -rotate-45 group-hover:rotate-6"
                color="black"
              />
            </Button>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
