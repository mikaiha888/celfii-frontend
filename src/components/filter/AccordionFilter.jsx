import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFilter = ({ title, expanded, onToggle, children, filter }) => {
  return (
    <div className="w-full">
      <Accordion
        expanded={expanded}
        onChange={onToggle}
        sx={{
          boxShadow: "none",
          border: "none",
          "&.MuiAccordion-root:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{ px: 0 }}
        >
          <div className="flex items-center gap-3">
            {filter && typeof filter !== "object" ? (
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            ) : filter && (filter.min || filter.max) ? (
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            ) : (
              ""
            )}
            <h4 className="font-semibold text-gray-800">{title}</h4>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionFilter;
