import useAuth from "@/hooks/useAuth";
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { IconContainer } from './style';

const Navbar = () => {
  const { removeUser, email } = useAuth();
  const primeirasLetra = email ? email.slice(0, 2).toUpperCase() : '';

  return (
    <nav className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex gap-2">
        <div>icon</div>
        <div>Title</div>
      </div>
      <div className="flex gap-2 items-center">
        <div>icon</div>
        <IconContainer >
          <ArrowRightEndOnRectangleIcon onClick={removeUser} className="w-6 h-6 text-gray-600" />
        </IconContainer>
        <div className="bg-gray-200 flex font-semibold items-center justify-center p-2 rounded-full">
          {primeirasLetra}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
