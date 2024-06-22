import { useDepartmentModalContext } from "../context/department-modal-context";

function DepartmentDetailCard({
  imageUrl,
  departemen,
}: {
  imageUrl: string;
  departemen: string;
}) {
  const { setDepartmentModalOpened } = useDepartmentModalContext();

  return (
    <li
      className={`z-20 w-[80%] md:w-full max-w-28 lg:max-w-36  bg-white shadow-2xl rounded-xl flex flex-col gap-3 justify-evenly items-center px-1 pt-1 pb-3 relative transition-all hover:-translate-y-1 cursor-pointer border-secondary hover:border-4`}
    >
      <div className="lg:hidden w-[7vw] max-w-[2.3rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%] lg:z-20 "></div>
      <div
        role="department-image"
        className={`h-fit relative overflow-hidden rounded-t-xl   `}
      >
        <img src={imageUrl} alt="" className="absolute" />
        <img src={imageUrl} alt="" className="invisible scale-[2] " />
      </div>

      <button
        className="w-[80%] text-black bg-tertiary rounded-full text-[0.700rem] transition-all border-black hover:border-2"
        onClick={setDepartmentModalOpened.bind(null, departemen)}
      >
        Detail
      </button>
    </li>
  );
}

export default DepartmentDetailCard;
