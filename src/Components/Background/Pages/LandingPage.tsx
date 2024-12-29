import CircularText from "@/Components/CircularText";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../ui/menubar";

function LandingPage() {
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        {/* "Title card" */}
        <div className="flex flex-row h-full justify-between p-12 ">
          <div className="flex items-center">
            <div>
              <h1 className="scroll-m-20 pb-2 text-3xl font-serif font-medium tracking-tight first:mt-0">
                Hello.
              </h1>
              <h1 className="scroll-m-20 text-9xl font-medium font-serif italic tracking-tight">
                My name is.
              </h1>
              <h1 className="scroll-m-20 text-9xl pb-3 font-medium font-serif italic tracking-tight">
                Fabrice.
              </h1>
              <h1 className="scroll-m-20 pb-2 text-3xl font-medium font-serif tracking-tight first:mt-0">
                I am Software Engineer.
              </h1>
            </div>
          </div>
          <div className="scroll-m-20 text-4xl font-extrabold tracking-tight w-1/2 lg:text-5xl flex justify-center items-center">
            <h1>Placeholder</h1>
          </div>
        </div>

        {/* Bottom elements */}
        <div>
          <div className="flex flex-row justify-between px-12 items-center">
            <div className="flex flex-col">
              <h1 className="scroll-m-20 text-xl font-medium font-serif tracking-tight first:mt-0">
                Currently Software Engineer at Virtual Incision.
              </h1>
              <h1 className="scroll-m-20 pb-4 text-xl font-medium font-serif tracking-tight first:mt-0">
                Omaha, Ne
              </h1>
            </div>
            <CircularText />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
