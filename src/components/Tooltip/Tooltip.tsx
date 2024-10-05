import { Tooltip as MUITooltip } from '@mui/material';

interface TooltipProps {
  text?: string;
  children: JSX.Element;
}

const Tooltip = ({ text, children } : TooltipProps) => {
  return (
    <MUITooltip title={text} arrow slotProps={{tooltip: {sx: {bgcolor: '#5E0042'}}, arrow: {sx: {color: '#5E0042'}}}}>{children}</MUITooltip> 
  );
};

export default Tooltip;
