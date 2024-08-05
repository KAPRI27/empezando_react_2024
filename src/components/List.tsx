import { MouseEvent } from "react";

//type reemplaza a 'interface'
type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} onClick={handleClick} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
