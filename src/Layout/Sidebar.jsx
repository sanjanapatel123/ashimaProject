const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const menus = {
    admin: ["Dashboard", "Users", "Reports"],
    student: ["My Courses", "Results", "Support"],
    instructor: ["Classes", "Tasks", "Payments"],
  };

  return (
    <div className="w-60 bg-gray-200 h-screen p-4">
      <h3 className="mb-4 font-bold capitalize">{user.role} Menu</h3>
      <ul>
        {menus[user.role].map((item, i) => (
          <li key={i} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
