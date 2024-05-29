import DepartmentDetailCard from "./department-detail-card";
import MemberCard from "./member-card";
import empty from "/empty.jpeg";

function StrukturLaptopView() {
  return (
    <ul className="hidden lg:flex bg-white w-[90%] container mx-auto mt-10 rounded-3xl relative py-24 px-3 flex-col items-center gap-16">
      <MemberCard cardId="aldo">
        <div className="w-1.5 h-20 bg-black absolute top-full left-1/2 "></div>
      </MemberCard>

      <MemberCard cardId="bunga">
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -left-[142%] "></div>
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -left-[40%] "></div>

        <div className="w-1.5 h-[315%] bg-black absolute top-full left-1/2 "></div>

        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -right-[142%] "></div>
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -right-[40%] "></div>

        <div className="w-[340%] h-1.5 bg-black absolute top-[120%] -left-[120%] "></div>
        <div className="w-1.5 h-[50vw] max-h-[50rem]  bg-black absolute top-[120%] -left-[120%] "></div>
        <div className="w-1.5 h-[50vw] max-h-[50rem] bg-black absolute top-[120%] -right-[120%] "></div>

        <div className="w-[385.5%] h-1.5 bg-black absolute top-[390%] -left-[141.5%] "></div>
      </MemberCard>

      <li className="w-full mt-24">
        <ul className="flex justify-center gap-[50%]">
          <MemberCard cardId="gina" />

          <MemberCard cardId="fitri" />
        </ul>
      </li>

      <li className="w-full">
        <ul className="flex justify-center gap-[50%]">
          <MemberCard cardId="erizka" />

          <MemberCard cardId="rizka" />
        </ul>
      </li>

      {/* Divisi */}
      <li className="w-full flex justify-evenly mt-[15%]">
        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="zaki" className="lg:w-full" />

          <DepartmentDetailCard
            imageUrl={empty}
            departemen="Human Resource Development"
          />
          <DepartmentDetailCard imageUrl={empty} departemen="Himtika Care" />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="ojan" className="lg:w-full" />

          <DepartmentDetailCard
            imageUrl={empty}
            departemen="Public & Marketing"
          />
          <DepartmentDetailCard imageUrl={empty} departemen="Public Relation" />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="nadin" className="lg:w-full">
            <div className="w-1.5 h-[20%] bg-black rounded-full md:rounded-sm absolute bottom-full left-1/2 " />
            <div className="hidden lg:block w-1.5 h-[100%] bg-black rounded-full md:rounded-sm absolute top-full left-1/2" />
          </MemberCard>

          <DepartmentDetailCard
            imageUrl={empty}
            departemen="Product Development"
          />
          <DepartmentDetailCard
            imageUrl={empty}
            departemen="Research Development"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="bintang" className="lg:w-full" />

          <DepartmentDetailCard imageUrl={empty} departemen="Skill Education" />
          <DepartmentDetailCard
            imageUrl={empty}
            departemen="College Education"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="catur" className="lg:w-full" />

          <DepartmentDetailCard imageUrl={empty} departemen="Media Kreatif" />
          <DepartmentDetailCard imageUrl={empty} departemen="Media Informasi" />
        </ul>
      </li>
    </ul>
  );
}

export default StrukturLaptopView;
