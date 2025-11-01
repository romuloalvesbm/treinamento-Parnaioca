import useAuth from "@/hooks/useAuth";
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { IconContainer } from './style';
import { NavbarProps } from "./types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { PanelLeft } from "lucide-react";

const Navbar = ({ handleDrawerChange, titulo }: NavbarProps) => {
  const { removeUser, email } = useAuth();
  const primeirasLetra = email ? email.slice(0, 2).toUpperCase() : '';

  return (
    <nav className="border-b px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div onClick={() => handleDrawerChange()}>
          <PanelLeft className="w-4 h-4 text-gray-600" />
        </div>
        <div>{titulo}</div>
      </div>
      <div className="flex gap-2 items-center">       
        <IconContainer >
          <ArrowRightStartOnRectangleIcon onClick={removeUser} className="w-5 h-5 text-gray-600" />
        </IconContainer>
        <div className="bg-gray-200 flex font-semibold items-center justify-center p-2 rounded-full text-xs">
          {primeirasLetra}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
