const Tooltip = () => {
  return (
    <div className="relative group inline-block">
      <button className="bg-gray-800 text-white px-4 py-2 rounded">Hover me</button>
      <span className="absolute hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded -top-10 left-1/2 transform -translate-x-1/2">
        I’m a helpful tooltip!
      </span>
    </div>
  );
}

export default Tooltip;
