import ListIterator from "./ListIterator";

const NavList = () => {
  const nav_items = ["home", "about", "contact", "career","help"]; 
  return (
    <ul className="flex gap-8 text-black text-lg cursor-pointer justify-center mt-[40px]">
      <ListIterator list={nav_items} />
    </ul>
  );
};

export default NavList;
