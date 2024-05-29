import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdCloseCircle,
} from "react-icons/io";
import { useDepartmentModalContext } from "../context/department-modal-context";
import { dataAnggotaDepartemen } from "../data/data-anggota-departemen";
import { FaInstagram } from "react-icons/fa";

function DepartmentModal() {
  const { departmentModalOpened, handleCloseModal, setDepartmentModalIndex, departmentModalIndex } =
  useDepartmentModalContext();

  const currentDepartment = dataAnggotaDepartemen.get(departmentModalOpened);

  function handleClickRight() {
    setDepartmentModalIndex((openedModal) =>
      openedModal + 1 === currentDepartment?.jumlahAnggota ? 0 : openedModal + 1
    );
  }

  function handleClickLeft() {
    setDepartmentModalIndex((openedModal) => {
      if (!currentDepartment) return 0;

      return openedModal === 0
        ? currentDepartment.jumlahAnggota - 1
        : openedModal - 1;
    });
  }

  if (!currentDepartment) return null;

  return (
    <div
      role="detail-modal"
      className="fixed top-1/2 left-1/2 w-3/4 h-fit bg-white z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl text-black flex flex-col items-center text-center max-w-96 pb-2 border-tertiary hover:border-4 transition-all"
    >
      <IoMdCloseCircle
        className="absolute z-50 w-10 -left-5 -top-5 cursor-pointer"
        size={50}
        color="black"
        onClick={handleCloseModal}
      />

      <IoIosArrowDropleftCircle
        className="absolute z-50 left-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100 transition-all hover:scale-105"
        size={50}
        onClick={handleClickLeft}
      />
      <IoIosArrowDroprightCircle
        className="absolute z-50 right-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100 transition-all hover:scale-105"
        size={50}
        onClick={handleClickRight}
      />

      <div className="overflow-hidden w-full rounded-t-xl">
        <div className="w-full bg-secondary h-fit py-3 px-3 z-10 relative text-white">
          <h1 className="font-semibold  min-[375px]:text-lg">
            Departemen {departmentModalOpened}
          </h1>
        </div>

        <img
          src={currentDepartment?.urlGambar[departmentModalIndex]}
          alt="foto-anggota"
          className="scale-125 relative -top-5"
        />
      </div>

      <div className="w-[80%] flex justify-center items-center gap-3  mx-auto mt-2">
        <span className="w-[15%] h-1 bg-black"></span>
        <a
          className="rounded-full w-[30%] md:w-[20%] aspect-square bg-secondary flex justify-center items-center hover:-translate-y-1 transition-all"
          href="www.instagram.com"
        >
          <FaInstagram size="70%" className="text-white " />
        </a>
        <span className="w-[15%] h-1 bg-black"></span>
      </div>
    </div>
  );
}

export default DepartmentModal;
