import { ListProps } from "./List.interface";

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
          </div>
        );
      })}
    </div>
  );
}

export default List;
