const Btn = ({ src, name }) => {
  return (
    <div
      className="group relative flex h-12 w-12 p-2 m-auto rounded-full shadow-md border justify-center items-center cursor-pointer"
      role="button"
      tabIndex={0}
    >
      {/* Image */}
      <img
        className="w-full h-full rounded-lg object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={src}
        alt={name}
      />

      {/* Name Tooltip */}
      <h1 className="absolute -top-4 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 ease-in-out bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap capitalize z-10">
        {name}
      </h1>
    </div>
  );
};

export default Btn;
