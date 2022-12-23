import { ListProps } from "./List.interface";
import Button from '../Button/Button';

function List({ keywords, handleNewFlag }: ListProps) {

  return (
    <div className="list-keywords">
      {keywords.map((keyword) => {
        return (
          <div className="keyword" key={keyword.id}>
            <label htmlFor={keyword.id}>{keyword.name}</label>
            <input
              id={keyword.id}
              type="checkbox"
              checked={keyword.flag}
              onChange={() => handleNewFlag(keyword.id)}
            />
            <Button icon="remove" type="btn-warn" shadow={false}/>
          </div>
        );
      })}
    </div>
  );
}

export default List;
