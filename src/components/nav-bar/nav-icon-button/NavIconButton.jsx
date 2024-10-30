import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";

const NavIconButton = ({ to, icon, tooltipText }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={to}>{icon}</Link>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5} className="p-2 text-white bg-black rounded-md shadow-lg">
            <span>{tooltipText}</span>
            <TooltipArrow className="fill-black" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavIconButton;
