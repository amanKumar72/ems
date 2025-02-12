const Header = () => {
  return (
    <div className="flex-col justify-between p-3 md:p-5 ">
      <h3 className="text-lg md:text-2xl ">Hello</h3>
      <div className="flex justify-between gap-2 ">
        <h2 className="text-xl md:text-3xl font-semibold">Username 👋</h2>
        <button className=" bg-red-600 px-4 py-1 md:px-6 md:py-2 rounded-lg font-semibold text-lg md:text-xl">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
