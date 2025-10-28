import { ReactNode } from "react";

type Item = {
  nome: string;
  valor?: number | string;    // aceita "250" ou 250 ou "R$ 250,00"
  acomodacao: string;
  data: string | Date;       // aceita "2025-10-09" ou Date
};

type Props = {
  titulo: string;
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

const formatarData = (data: string | Date) => {
  const dataObj =
    data instanceof Date
      ? data
      : typeof data === "string"
        ? new Date(data)
        : undefined;

  return !dataObj || isNaN(dataObj.getTime())
    ? "-"
    : dataObj.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
};

const CardInfo = ({ titulo, itens = [] }: Props) => {

  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between mb-8">
        <div>{titulo}</div>
      </div>

      {itens.map((item, index) => (
        <div key={index} className="flex justify-between pb-2 mb-2 border-b border-gray-200">
          <div>
            <div className="font-medium">{item.nome}</div>
            <p className="text-xs text-muted-foreground">{item.acomodacao}</p>
          </div>

          <div className="text-right">
            <div className="text-right">
              {item.valor !== undefined ? (
                <>
                  <div className="font-medium">{formatarValor(item.valor)}</div>
                  <p className="text-xs text-muted-foreground">{formatarData(item.data)}</p>
                </>
              ) : (
                <>
                  <div className="font-medium">
                    {!item.data || isNaN(new Date(item.data).getTime())
                      ? "-"
                      : new Date(item.data).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <p className="text-xs text-muted-foreground">Checkout</p>
                </>
              )}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
