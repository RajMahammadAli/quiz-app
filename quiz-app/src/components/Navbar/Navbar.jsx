const Navbar = () => {
  return (
    <>
      <navbar className="flex justify-items-center items-center justify-between p-4 text-white mb-4">
        <div>Logo</div>
        <div>
          <label className="p-1">Email:</label>
          <input type="text" alt="" className="rounded" />
          <label className="p-1">Password:</label>
          <input type="password" alt="" className="rounded" />
          <button className="px-2 ml-2 border rounded">Sign In</button>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
