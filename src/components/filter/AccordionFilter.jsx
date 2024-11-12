import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFilter = ({ title, expanded, onToggle, children }) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      sx={{
        borderRadius: "30px",
        boxShadow: "none",
        border: "none",
        "&.MuiAccordion-root:before": { display: "none" },
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{ borderRadius: "30px" }}
      >
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "16px", borderRadius: "30px" }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionFilter;
