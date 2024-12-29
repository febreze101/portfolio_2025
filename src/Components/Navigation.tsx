import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";

import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between px-12">
        <Menubar className="flex justify-end pointer-events-auto w-auto font-serif font-semibold">
          {/* File Menu */}
          <MenubarMenu>
            <MenubarTrigger
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              Fabrice Bokovi
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div className="pointer-events-auto w-auto">
          <Menubar className="flex justify-end">
            {/* File Menu */}
            <MenubarMenu>
              <MenubarTrigger
                className="cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </MenubarTrigger>
            </MenubarMenu>

            {/* Edit Menu */}
            <MenubarMenu>
              <MenubarTrigger
                className="cursor-pointer"
                onClick={() => navigate("/work")}
              >
                Work
              </MenubarTrigger>
            </MenubarMenu>

            {/* Photography */}
            <MenubarMenu>
              <MenubarTrigger
                className="cursor-pointer"
                onClick={() => navigate("/photography")}
              >
                Photography
              </MenubarTrigger>
            </MenubarMenu>

            {/* Resume */}
            <MenubarMenu>
              <MenubarTrigger
                className="cursor-pointer"
                onClick={() => navigate("/resume")}
              >
                Resume
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
}

export default Navigation;
