import Bedroom from '@/components/atoms/Bedroom';
import ButtonCreate from '@/components/atoms/ButtonCreate';
import { Users } from 'lucide-react';

const QuartosPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <div>Total de 6 quartos cadastrados</div>
        <ButtonCreate />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Bedroom
          itens={[
            {
              titulo: "Suíte Master",
              status: "disponivel",
              valor: 250,
              descricao: "Suíte luxuosa com vista para o mar",
              icon: <Users className="w-4 h-5 text-gray-500" />,
              capacidade: "2",
            },
          ]}
        />
        <Bedroom
          itens={[
            {
              titulo: "Quarto Duplo",
              status: "Ocupado",
              valor: 280,
              descricao: "Quarto confortável para casal",
              icon: <Users className="w-4 h-5 text-gray-500" />,
              capacidade: "5",
            },
          ]}
        />

      </div>
    </main>
  );
};

export default QuartosPage;
