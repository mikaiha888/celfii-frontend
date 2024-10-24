import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

const Cart = () => {
  return (
    <TooltipProvider delayDuration={200}>
      {" "}
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to='/favourites'>
          <button className="relative inline-flex items-center p-2 text-gray-600 hover:text-red-500 focus:outline-none">
            <Heart className="w-6 h-6" />
          </button>
          </Link>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5} className="p-2 text-white bg-black rounded-md shadow-lg">
            <span>Mi carrito</span>
            <TooltipArrow className="fill-black" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Cart;