import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExploreIcon from "@mui/icons-material/Explore";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { useHistory } from "react-router";


const NavOptions = [
  { name: "Nav group 1", Icon: AdminPanelSettingsIcon },
  { name: "Nav group 2", Icon: ExploreIcon },
  { name: "Nav group 3", Icon: DonutLargeIcon },
];

export default function Nav() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {NavOptions.map((o: any, i: number) => (
        <NavItem Icon={o.Icon} name={o.name} key={i} />
      ))}
    </List>
  );
} 

const NavItem = ({ name, Icon }: any) => {
  const [open, setOpen] = React.useState(false);

  const { push } = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {["one", "two", "three", "four"].map((e: any, idx: number) => (
            <ListItemButton
              onClick={() => push(`/dashboard/Nav item ${idx + 1}`)}
              key={idx}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={`Nav item ${idx + 1}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
