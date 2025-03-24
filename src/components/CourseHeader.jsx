import { Input } from "@/components/ui/input";

export const CourseHeader = () => {
  return (
    <header className="bg-white shadow-[2px_2px_2px_rgba(30,30,30,0.1)] flex w-full items-center gap-10 text-lg flex-wrap px-[46px] py-[37px] border-[rgba(4,118,112,0.5)] border-b max-md:max-w-full max-md:px-5">
      <h1 className="text-black text-[50px] font-normal leading-[1.1] tracking-[0.25px] self-stretch grow max-md:text-[40px]">
        AI SKILLS
      </h1>
      <div className="self-stretch flex items-center gap-3 text-[rgba(30,30,30,1)] font-medium tracking-[0.09px] leading-none my-auto">
        <div className="self-stretch min-w-60 w-[376px] my-auto">
          <div className="border flex items-stretch gap-[31px] rounded-[25px] border-[rgba(30,30,30,1)] border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39ff1f0bf16d7091fb34b3eb5fa7fa35642d221b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[50px] shrink-0"
              alt="Search icon"
            />
            <Input
              type="text"
              placeholder="Search for anything"
              className="grow shrink w-[285px] basis-auto my-auto border-none focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
      <nav className="self-stretch flex min-h-[45px] items-center gap-[30px] text-[rgba(30,30,30,1)] font-medium leading-none my-auto">
        <a href="#courses" className="hover:text-[rgba(4,118,112,1)]">
          Courses
        </a>
        <a href="#business" className="hover:text-[rgba(4,118,112,1)]">
          Business
        </a>
        <a href="#digital" className="hover:text-[rgba(4,118,112,1)]">
          Digital product
        </a>
        <a href="#newsletter" className="hover:text-[rgba(4,118,112,1)]">
          newsletter
        </a>
      </nav>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d15b1cae925a6dd621bfb0cbe2290ca70a6bc6?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
        alt="User profile"
      />
      <div className="self-stretch flex min-h-[50px] items-center gap-2.5 leading-[35px] my-auto">
        <button className="self-stretch min-h-[50px] text-[rgba(4,118,112,1)] font-medium whitespace-nowrap w-[90px] my-auto px-2.5 py-2 rounded-2xl border-[rgba(4,118,112,1)] border-solid border-2 hover:bg-[rgba(4,118,112,0.1)]">
          login
        </button>
        <button className="self-stretch bg-[rgba(4,118,112,1)] min-h-[50px] text-white font-bold w-[90px] my-auto px-2.5 py-2 rounded-xl hover:bg-[rgba(4,118,112,0.9)]">
          sign up
        </button>
      </div>
    </header>
  );
};
