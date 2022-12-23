import { ButtonProps } from "./Button.interfaces";

export default function Button({icon, handleAction, shadow=true, type="btn-primary"}: ButtonProps) {
  return (
    <button className={`btn-icon ${type} ${shadow ? "shadow" : "" }`} onClick={() => handleAction?.()}>
      <span className="material-symbols-outlined">{ icon }</span>
    </button>
  );
}
