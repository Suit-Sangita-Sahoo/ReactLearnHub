import { Link } from "react-router-dom";

const ListIterator = ({ list }) => {
  return (
    <>
      {list.map((ele, index) => (
        <li key={index} className="mx-[20px] hover:text-blue-950 ">
          <Link to={ele}>{ele}</Link>
        </li>
      ))}
    </>
  );
};

export default ListIterator;
