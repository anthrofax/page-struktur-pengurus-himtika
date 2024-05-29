import { IoMdCloseCircle } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { dataSCBPH } from "../data/data-sc-bph";
import { useSCModalContext } from "../context/sc-modal-context";

function SCModal() {
  const { openedSCModal, setOpenedSCModal } = useSCModalContext();

  const currentMember = dataSCBPH.get(openedSCModal);

  if (!currentMember) return null;

  return (
    <div
      role="detail-modal"
      className="fixed top-1/2 left-1/2 w-3/4 h-fit bg-white z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl text-black flex flex-col items-center text-center max-w-96 pb-2"
    >
      <IoMdCloseCircle
        className="absolute z-50 w-10 -left-5 -top-5 cursor-pointer"
        size={50}
        color="black"
        onClick={() => setOpenedSCModal("")}
      />

      <div className="overflow-hidden w-full rounded-t-xl">
        <div className="w-full bg-secondary h-fit py-3 px-3 z-10 relative text-white">
          <h1 className="font-semibold  min-[375px]:text-lg">
            Steering Commitee
          </h1>
        </div>

        <img
          src={currentMember.urlGambar}
          alt="foto-anggota"
          className="w-full h-full"
        />
      </div>

      <div className="w-[80%] flex justify-center items-center gap-3  mx-auto mt-2">
        <span className="w-[15%] h-1 bg-black"></span>
        <a
          className="rounded-full w-[25%] md:w-[20%] aspect-square bg-secondary flex justify-center items-center hover:-translate-y-1 transition-all"
          href="www.instagram.com"
        >
          <FaInstagram size="70%" className="text-white " />
        </a>
        <span className="w-[15%] h-1 bg-black"></span>
      </div>
    </div>
  );
}

export default SCModal;
