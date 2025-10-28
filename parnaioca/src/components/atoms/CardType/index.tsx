const CardType = () => {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200">
      <div className="flex gap-2 items-center">
        <div>icon</div>
        <div>
          <div className="mb-2">text</div>
          <div className="mb-2">number</div>
        </div>
      </div>
    </div>
  );
};

export default CardType;
