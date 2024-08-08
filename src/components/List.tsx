import { MouseEvent } from "react";

//type reemplaza a 'interface'
type Props = {
  data: string[];
};

function List({ data }: Props) {
  let index = 1;
  const handleClick = (e: string) => {
    console.log(e);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          key={elemento}
          onClick={() => handleClick(i)}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
