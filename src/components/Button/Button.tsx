import { ButtonProps } from "./Button.interfaces";

export default function Button({icon, handleAction}: ButtonProps) {
  return (
    <button className="btn-icon btn-primary shadow" onClick={() => handleAction?.()}>
      <span className="material-symbols-outlined">{ icon }</span>
    </button>
  );
}
