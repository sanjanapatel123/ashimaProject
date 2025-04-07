const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <div>{user?.role.toUpperCase()} Panel</div>
      <div>{user?.name}</div>
    </div>
  );
};

export default Navbar;
