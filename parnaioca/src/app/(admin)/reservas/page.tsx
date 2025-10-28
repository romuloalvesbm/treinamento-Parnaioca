import ButtonCreate from '@/components/atoms/ButtonCreate';
import CardType from '@/components/atoms/CardType';

const ReservasPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <div>Total de 8 reservas registradas</div>
        <ButtonCreate />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <CardType />
        <CardType />
        <CardType />
        <CardType />
      </div>
    </main>
  );
};

export default ReservasPage;
