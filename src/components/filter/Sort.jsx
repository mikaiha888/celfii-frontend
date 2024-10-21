import { ArrowUpDown } from "lucide-react";

const Sort = ({ onSortChange }) => {
  return (
    <div>
      <div>
        <ArrowUpDown size={16} strokeWidth={3} />
        <span className="fw-bold">Ordenar por</span>
      </div>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <button className="dropdown-item" onClick={() => onSortChange("most popular")}>
            Más popular
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onSortChange("highest price")}>
            Mayor precio
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onSortChange("lowest price")}>
            Menor precio
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onSortChange("newest")}>
            Más reciente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
