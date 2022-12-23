import { ListProps } from "./List.interface";

function List({ keywords, handleNewFlag, handleDelete }: ListProps) {
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

            <button
              className="btn-icon btn-warn"
              onClick={() => handleDelete(keyword.id)}
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
