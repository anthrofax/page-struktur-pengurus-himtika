import DepartmentDetailCard from "./department-detail-card";
import MemberCard from "./member-card";
import crown from "/crown.png";
import vice from "/vice.png";
import member from "/member.png";

// Gambar Departemen
import humanResourceDevelopment from "/departmen/human-resource-development.png";
import himtikaCare from "/departmen/himtika-care.png";
import publicMarketing from "/departmen/public-marketing.png";
import publicRelation from "/departmen/public-relation.png";
import productDevelopment from "/departmen/product-development.png";
import researchDevelopment from "/departmen/research-development.png";
import skillEducation from "/departmen/skill-education.png";
import collegeEducation from "/departmen/college-education.png";
import mediaCreative from "/departmen/media-creative.png";
import mediaInformation from "/departmen/media-information.png";

function StrukturLaptopView() {
  return (
    <ul className="hidden lg:flex bg-white w-[90%] container mx-auto mt-10 rounded-3xl relative py-24 px-3 flex-col items-center gap-16">
      <MemberCard cardId="aldo">
        <div className="w-1.5 h-20 bg-black absolute top-full left-1/2 "></div>
      </MemberCard>

      <img
        src={crown}
        alt="kahim"
        className="absolute opacity-50 -rotate-12 right-16 w-[30%]"
      />

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

      <img
        src={vice}
        alt="kahim"
        className="absolute opacity-30 rotate-12 left-10 w-[30%] top-[21%]"
      />

      <li className="w-full mt-24">
        <ul className="flex justify-center gap-[50%]">
          <MemberCard cardId="gina" />

          <MemberCard cardId="fitri" />
        </ul>
      </li>

      <img
        src={member}
        alt="kahim"
        className="absolute opacity-30 right-1/2 translate-x-1/2 w-[30%] top-[45%]"
      />

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
            imageUrl={humanResourceDevelopment}
            departemen="Human Resource Development"
          />
          <DepartmentDetailCard
            imageUrl={himtikaCare}
            departemen="Himtika Care"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="ojan" className="lg:w-full" />

          <DepartmentDetailCard
            imageUrl={publicMarketing}
            departemen="Public & Marketing"
          />
          <DepartmentDetailCard
            imageUrl={publicRelation}
            departemen="Public Relation"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="nadin" className="lg:w-full">
            <div className="w-1.5 h-[20%] bg-black rounded-full md:rounded-sm absolute bottom-full left-1/2 " />
            <div className="hidden lg:block w-1.5 h-[120%] bg-black rounded-full md:rounded-sm absolute top-full left-1/2" />
          </MemberCard>

          <DepartmentDetailCard
            imageUrl={productDevelopment}
            departemen="Product Development"
          />
          <DepartmentDetailCard
            imageUrl={researchDevelopment}
            departemen="Research Development"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="bintang" className="lg:w-full" />

          <DepartmentDetailCard
            imageUrl={skillEducation}
            departemen="Skill Education"
          />
          <DepartmentDetailCard
            imageUrl={collegeEducation}
            departemen="College Education"
          />
        </ul>

        <ul className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard cardId="catur" className="lg:w-full" />

          <DepartmentDetailCard
            imageUrl={mediaCreative}
            departemen="Media Kreatif"
          />
          <DepartmentDetailCard
            imageUrl={mediaInformation}
            departemen="Media Informasi"
          />
        </ul>
      </li>
    </ul>
  );
}

export default StrukturLaptopView;
