const TileWithIcon = ({ text, icon }) => {
  return (
    <div className="border flex flex-row justify-center items-center gap-2 w-40 h-12 bg-secondary-500">
      <span>{icon}</span> <p>{text}</p>
    </div>
  );
};

export default TileWithIcon;
