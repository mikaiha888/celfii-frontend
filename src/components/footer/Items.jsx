import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage, saveToLocalStorage } from "../../helpers";

const Items = ({ links, title }) => {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    if (link.isCategory)
      saveToLocalStorage("filters", {
        page: 1,
        perPage: 54,
        name: "",
        category: link.name,
        sort: "newest",
        price: { min: "", max: "" },
        ...loadFromLocalStorage("filters"),
      });
    else {
      const [path, hash] = link.url.split("#");
      navigate(path);
      setTimeout(() => {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div>
      <h2 className="mb-2 font-semibold text-white">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            {link.isCategory ? (
              <a
                href={`/productos/${link.name.toLowerCase()}?page=1`}
                onClick={() => handleLinkClick(link)}
                className="text-sm font-medium leading-6 text-gray-400 duration-200 hover:text-red-400"
              >
                {link.name}
              </a>
            ) : (
              <button
                onClick={() => handleLinkClick(link)}
                className="text-sm font-medium leading-6 text-gray-400 duration-200 hover:text-red-400"
              >
                {link.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
