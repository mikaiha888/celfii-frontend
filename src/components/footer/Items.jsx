import { useNavigate } from "react-router-dom";

const Items = ({ links, title }) => {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    // if (link.isCategory) {
    //   localStorage.setItem("selectedCategory", link.name);
    //   navigate("/productos")
    //   window.location.reload();
    // } else {
    //   const [path, hash] = link.url.split("#");
    //   navigate(path);
    //   setTimeout(() => {
    //     if (hash) {
    //       const element = document.getElementById(hash);
    //       if (element) {
    //         element.scrollIntoView({ behavior: "smooth" });
    //       }
    //     }
    //   }, 100);
    // }
  };

  return (
    <div>
      <h2 className="mb-2 font-semibold text-white">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={handleLinkClick(link)}
              className="text-sm font-medium leading-6 text-gray-400 duration-200 hover:text-red-400"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
