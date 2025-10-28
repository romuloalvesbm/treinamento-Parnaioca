import { ReactNode } from "react";

type Props = {
  text: ReactNode;
  icon: ReactNode;
  qtdeClassName?: string;
  qtde?: number;
  placeholder: ReactNode;
};

const CardTotal = ({ text, icon, qtdeClassName, qtde = 0, placeholder }: Props) => {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between mb-8">
        <div className="text-sm font-medium">{text}</div>
        <div>{icon}</div>
      </div>
      <div>
        <div className={`text-2xl font-bold ${qtdeClassName || ''}`}>{qtde}</div>
        <div className="text-xs">{placeholder}</div>
      </div>
    </div>
  );
};

export default CardTotal;
