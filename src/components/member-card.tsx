// import { useDepartmentModalContext } from "../context/department-modal-context";
import { FaInstagram } from "react-icons/fa";
import { dataSCBPH } from "../data/data-sc-bph";
import { useSCModalContext } from "../context/sc-modal-context";

function MemberCard({
  cardId,
  children,
  className,
}: {
  cardId: string;
  className?: string;
  children?: React.ReactNode | null | undefined;
}) {
  const { setOpenedSCModal } = useSCModalContext();
  const currentMember = dataSCBPH.get(cardId);

  if (currentMember?.cardType === "level-1")
    return (
      <div
        className={`w-[65%] lg:min-h-[20rem] lg:w-[20%] bg-white shadow-xl md:shadow-2xl pt-2 pb-5 px-2 rounded-xl relative ${className} z-10 transition-all hover:border-4 border-primary hover:-translate-y-1 cursor-pointer text-black`}
        onClick={() => {
          setOpenedSCModal(cardId);
        }}
      >
        {children}

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl  `}
        >
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="absolute w-full h-full"
          />
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="invisible w-full h-full"
          />
        </div>

        <div role="member-description" className="text-center mt-2">
          <h3 className="text-sm min-[425px]:text-lg md:text-xl">
            {currentMember?.jabatan}
          </h3>
          <p className="text-xs min-[425px]:text-sm md:text-base">
            {currentMember?.nama}
          </p>
        </div>

        <div className="w-[80%] flex justify-center  mx-auto mt-2">
          <a
            className="rounded-full w-[30%] md:w-[20%] aspect-square bg-tertiary flex justify-center items-center transition-all group hover:bg-black"
            href="www.instagram.com"
          >
            <FaInstagram
              size="70%"
              className="text-black group-hover:text-tertiary transition-all"
            />
          </a>
        </div>
      </div>
    );

  if (currentMember?.cardType === "level-2")
    return (
      <li
        className={`w-[50%] ${
          !(
            className?.includes("lg:w-full") &&
            currentMember?.cardType === "level-2"
          )
            ? "lg:w-[18%]"
            : "lg:w-full"
        }  px-1 pt-1 pb-3 lg:pb-5 bg-white shadow xl md:shadow-2xl text-black rounded-xl flex flex-col justify-evenly relative z-30 lg:z-10 transition-all hover:-translate-y-1 border-secondary hover:border-4 cursor-pointer`}
        onClick={() => {
          setOpenedSCModal(cardId);
        }}
      >
        <div className="w-[6vw] max-w-[1.7rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%] bottom-1/2 lg:hidden"></div>

        {currentMember?.jabatan.toLowerCase().includes("divisi") &&
        !currentMember?.jabatan.toLowerCase().includes("rnd") ? (
          <div className="hidden lg:block w-1.5 h-[120%] bg-black rounded-full md:rounded-sm absolute top-full left-1/2" />
        ) : null}

        {/* Top Line */}
        {children}

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl `}
        >
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="absolute w-full h-full"
          />
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="invisible scale-[2] "
          />
        </div>

        <div
          role="member-description"
          className="text-center flex flex-col mt-1 lg:mt-3"
        >
          <h3 className="text-[0.7rem] min-[525px]:text-base lg:text-lg">
            {currentMember?.jabatan}
          </h3>
          <p className="text-[0.6rem] min-[525px]:text-xs lg:text-sm">
            {currentMember?.nama}
          </p>
        </div>

        <div className="w-[80%] flex justify-center  mx-auto mt-1 md:mt-3">
          <a
            className="rounded-full w-[30%] md:w-[20%] aspect-square bg-tertiary group hover:bg-black flex justify-center items-center hover:-translate-y-1 transition-all"
            href="www.instagram.com"
          >
            <FaInstagram
              size="70%"
              className="text-black group-hover:text-tertiary transition-all"
            />
          </a>
        </div>
      </li>
    );

  if (currentMember?.cardType === "level-3")
    return (
      <li
        className={`w-[40%] bg-white shadow-xl md:shadow-2xl text-black p-2 rounded-xl flex flex-col justify-evenly relative lg:z-10 lg:w-[18%] border-secondary hover:border-4 hover:-translate-y-1 transition-all`}
        onClick={() => {
          setOpenedSCModal(cardId);
        }}
      >
        <div className="w-[3vw] max-w-[2.3rem]  h-1 bg-black rounded-full md:rounded-sm absolute right-[100%] lg:hidden"></div>

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl`}
        >
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="absolute w-full h-full"
          />
          <img
            src={currentMember?.urlGambar}
            alt=""
            className="invisible scale-[2] "
          />
        </div>


        <div role="member-description" className="text-center">
          <h3 className="text-[0.6rem] lg:text-lg mt-1">
            {currentMember?.jabatan}
          </h3>
          <p className="text-[0.5rem] lg:text-sm">{currentMember?.nama}</p>
        </div>

        <div className="w-[80%] flex justify-center  mx-auto mt-1 ">
          <a
            className="rounded-full w-[30%] md:w-[20%] aspect-square bg-tertiary group hover:bg-black flex justify-center items-center hover:-translate-y-1 transition-all"
            href="www.instagram.com"
          >
            <FaInstagram
              size="70%"
              className="text-black group-hover:text-tertiary transition-all"
            />
          </a>
        </div>
      </li>
    );
}

export default MemberCard;
