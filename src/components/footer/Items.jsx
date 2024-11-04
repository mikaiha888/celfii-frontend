import { Link } from "react-router-dom";

const Items = ({ links, title }) => {
  return (
    <div>
      <h2 className="mb-2 font-semibold text-white">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            {link.isExternal ? (
              <a
                className="text-sm leading-6 text-gray-400 duration-200 hover:text-red-400"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <Link
                className="text-sm font-medium leading-6 text-gray-400 duration-200 hover:text-red-400"
                to={link.url}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
