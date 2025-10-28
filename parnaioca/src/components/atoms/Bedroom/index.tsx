import { ReactNode } from "react";
import { SquarePen, Trash2 } from "lucide-react";

const CARD_CLASSES = `
  inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0
  [&>svg]:size-3 [&>svg]:pointer-events-none gap-1
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
  transition-[color,box-shadow] overflow-hidden border-transparent
  [a&]:hover:bg-primary/90
  text-white
`;

type Item = {
  titulo: string;
  status: string;
  valor: number | string;
  descricao: string;
  icon: ReactNode;
  capacidade: number | string;
};

type Props = {
  itens: Item[];
};

const formatarValor = (valor: number | string) => {
  const valorNumber =
    typeof valor === "string"
      ? Number(valor.replace(/[^\d,-]/g, "").replace(",", "."))
      : valor;

  return Number.isFinite(valorNumber)
    ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valorNumber)
    : String(valor);
};

const Bedroom = ({ itens = [] }: Props) => {
  return (
    <>
      {itens.map((item, index) => (
        <div key={index} className="flex flex-col p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="font-leading-none">{item.titulo}</div>
            <div
              className={`${CARD_CLASSES} ${item.status === "disponivel" ? "bg-black" : "bg-red-600"}`}
            >
              {item.status === "disponivel" ? "Disponível" : "Ocupado"}
            </div>
          </div>

          <div className="text-2xl font-bold text-green-600 mb-4">{formatarValor(item.valor)}</div>

          <div className="text-xs text-muted-foreground mb-3">{item.descricao}</div>

          <div className="flex items-center gap-2 text-xs mb-3">
            <div>{item.icon}</div>
            <div>Capacidade: {item.capacidade} pessoas</div>
          </div>

          <div className="flex gap-5">
            {/* Botão Editar */}
            <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 border border-gray-200 rounded-md text-black
                     hover:bg-gray-200 transition-all duration-200 hover:scale-105">
              <SquarePen className="w-5 h-5" />
              <span>Editar</span>
            </button>

            {/* Botão Excluir */}
            <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 border border-gray-200 rounded-md text-red-600
                     hover:bg-gray-200 hover:text-red-700 transition-all duration-200 hover:scale-105">
              <Trash2 className="w-5 h-5" />
              <span>Excluir</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
