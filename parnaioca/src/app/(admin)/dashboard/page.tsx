'use client';

import CardTotal from '@/components/atoms/CardTotal';
import CardInfo from '@/components/molecules/CardInfo';
import { useMenuContext } from '@/context/MenuContext';
import { Bed, BedSingle, UserCheck, Users } from 'lucide-react';
import { useEffect } from 'react';

const DashboardPage = () => {

   const { setTitulo } = useMenuContext();

    useEffect(() => {
    setTitulo("Dashboard"); // define o título ao abrir a página
  }, [setTitulo]);
   
  return (
    <main>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardTotal text='Quartos Disponíveis' icon={<Bed className="w-5 h-5 text-gray-500" />} qtdeClassName='text-green-600' qtde={0} placeholder='Quartos livres para reserva' />
        <CardTotal text='Quartos Reservados' icon={<BedSingle className="w-5 h-5 text-gray-500" />} qtdeClassName='text-blue-600' qtde={2} placeholder='Quartos ocupados atualmente' />
        <CardTotal text='Hóspedes Hospedados' icon={<UserCheck className="w-5 h-5 text-gray-500" />} qtdeClassName='text-orange-600' qtde={0} placeholder='Hóspedes atualmente na pousada' />
        <CardTotal text='Total de Usuários' icon={<Users className="w-5 h-5 text-gray-500" />} qtdeClassName='text-purple-600' qtde={0} placeholder='Funcionários cadastrados' />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CardInfo
          titulo="Reservas Recentes"
          itens={[
            {
              nome: "Rômulo",
              valor: 250,
              acomodacao: "Suíte Luxo",
              data: "2025-10-09",
            },
            {
              nome: "Maria",
              valor: "R$ 300,00",
              acomodacao: "Quarto Standard",
              data: new Date(),
            },
          ]}
        />
        <CardInfo
          titulo="Check-outs Hoje"
          itens={[
            {
              nome: "Ana Costa",            
              acomodacao: "Suíte Luxo",
              data: "2025-10-09 14:25",
            },
            {
              nome: "Maria",            
              acomodacao: "Quarto Standard",
              data: new Date(),
            },
          ]}
        />
      </div>
    </main>
  );
};

export default DashboardPage;
