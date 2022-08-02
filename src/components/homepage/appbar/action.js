import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../style/appbar";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { Colors } from "../../style/theme";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <PersonIcon />
            </Link>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
