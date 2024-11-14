import * as FaIcons from "react-icons/fa";

const SocialIcons = ({ icons }) => {
  return (
    <div>
      {icons.map((icon) => {
        const IconComponent = FaIcons[icon.name];
        return (
          <a
            key={icon.name}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center p-2 mx-2 text-lg duration-200 bg-red-600 rounded-full hover:bg-red-700"
          >
            {IconComponent ? <IconComponent size={24} color="white" /> : null}
          </a>
        );
      })}
    </div>
  );
};
export default SocialIcons;
