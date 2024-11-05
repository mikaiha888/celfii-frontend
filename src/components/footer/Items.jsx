import { useNavigate } from "react-router-dom";

const Items = ({ links, title }) => {
  const navigate = useNavigate();

  // Función para manejar el clic y desplazarse a la sección correspondiente
  const handleLinkClick = (url) => {
    const [path, hash] = url.split("#"); // Divide la URL en path y hash
    navigate(path); // Navega a la ruta (sin el fragmento)

    // Usamos setTimeout para asegurarnos que la navegación ocurra antes de desplazarse
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash); // Busca el elemento con el ID del hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        }
      }
    }, 100); // Retraso de 100ms para asegurar que la navegación suceda primero
  };

  return (
    <div>
      <h2 className="mb-2 font-semibold text-white">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            {link.isExternal ? (
              // Enlace externo
              <a
                className="text-sm leading-6 text-gray-400 duration-200 hover:text-red-400"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              // Enlace interno con desplazamiento suave
              <button
                className="text-sm font-medium leading-6 text-gray-400 duration-200 hover:text-red-400"
                onClick={() => handleLinkClick(link.url)} // Usamos un botón para manejar el clic
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
