import DepartmentDetailCard from "./department-detail-card";
import DepartmentGroup from "./department-group";
import DivisionGroup from ".//division-group";
import MemberCard from "./member-card";

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

function StrukturForMobileTabletView() {
  return (
    <ul className="w-[90%] max-w-[28rem] m-auto bg-white py-5 px-2  relative mt-5 flex flex-col items-center rounded-xl lg:hidden">
      <MemberCard
        cardId="aldo"
        className="after:w-1 after:h-10 after:bg-black after:rounded-full md:after:rounded-sm after:content-[''] after:absolute after:-bottom-[2.45rem] after:left-1/2 transition-all active:-translate-y-3"
      />
      <MemberCard
        cardId="bunga"
        className="mt-5 after:w-[12vw] after:max-w-[4.2rem] after:h-1 after:bg-black after:rounded-full md:after:rounded-sm after:content-[''] after:absolute after:top-1/2 after:right-[100%]"
      >
        <div
          className={`w-1 h-[218vw] max-[425px]:min-h-[280%] max-h-[246%] z-10 bg-black rounded-full md:rounded-sm absolute right-[123%] top-1/2 `}
        ></div>
      </MemberCard>

      <li className="w-full flex flex-col items-end gap-3  mt-5 md:mt-7">
        <ul className="  w-[90%] flex flex-col items-start gap-5 ">
          <li className="w-full container mx-auto  h-20  bg-primary rounded-xl flex items-center justify-center text-2xl relative">
            <div className="w-[6vw] max-w-[2.1rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%]"></div>
            <div className="w-1 h-[110vw] min-[370px]:h-[105vw] min-[370px]:max-h-[32rem] bg-black rounded-full md:rounded-sm absolute right-[103%] top-1/2"></div>
            BPH
          </li>

          <DivisionGroup divisi="sekretaris">
            <MemberCard cardId="gina" />
            <MemberCard cardId="erizka" />
          </DivisionGroup>

          {/* Bendum */}
          <DivisionGroup divisi="bendahara">
            <MemberCard cardId="fitri">
              {/* <div className="w-1 h-10 bg-black bottom-1/2 absolute z-10 -left-[18%]" /> */}
            </MemberCard>
            <MemberCard cardId="rizka" />
          </DivisionGroup>
        </ul>

        <ul className=" w-[90%] flex flex-col items-start gap-5 ">
          <li className="w-full container mx-auto h-20  bg-primary rounded-xl flex items-center justify-center text-2xl relative">
            <div className="w-[6vw] max-w-[2.1rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%]"></div>
            <div className="w-1 h-[1650%] min-[425px]:h-[310vw] min-[450px]:max-h-[90rem] md:max-h-[95rem] bg-black rounded-full md:rounded-sm absolute right-[103%] top-1/2"></div>
            Divisi
          </li>

          {/* Divisi Internal */}
          <DivisionGroup divisi="internal">
            <MemberCard cardId="zaki" />
            <DepartmentGroup>
              <DepartmentDetailCard
                imageUrl={humanResourceDevelopment}
                departemen="Human Resource Development"
              />
              <DepartmentDetailCard
                imageUrl={himtikaCare}
                departemen="Himtika Care"
              />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Relasi */}
          <DivisionGroup divisi="relasi">
            <MemberCard cardId="ojan" />
            <DepartmentGroup>
              <DepartmentDetailCard
                imageUrl={publicMarketing}
                departemen="Public & Marketing"
              />
              <DepartmentDetailCard
                imageUrl={publicRelation}
                departemen="Public Relation"
              />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi RnD */}
          <DivisionGroup divisi="Research and Development">
            <MemberCard cardId="nadin" />
            <DepartmentGroup>
              <DepartmentDetailCard
                imageUrl={productDevelopment}
                departemen="Product Development"
              />
              <DepartmentDetailCard
                imageUrl={researchDevelopment}
                departemen="Research Development"
              />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Edukasi */}
          <DivisionGroup divisi="edukasi">
            <MemberCard cardId="bintang" />
            <DepartmentGroup>
              <DepartmentDetailCard
                imageUrl={skillEducation}
                departemen="Skill Education"
              />
              <DepartmentDetailCard
                imageUrl={collegeEducation}
                departemen="College Education"
              />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Infokom */}
          <DivisionGroup divisi="Informasi & Komunikasi">
            <MemberCard cardId="catur" />
            <DepartmentGroup>
              <DepartmentDetailCard
                imageUrl={mediaCreative}
                departemen="Media Kreatif"
              />
              <DepartmentDetailCard
                imageUrl={mediaInformation}
                departemen="Media Informasi"
              />
            </DepartmentGroup>
          </DivisionGroup>
        </ul>
      </li>
    </ul>
  );
}

export default StrukturForMobileTabletView;
