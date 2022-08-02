import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../style/appbar/index";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./action";
import { useUIContext } from "../context";

export default function AppbarDesktop({ matches }) {
  // const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4" style={{ color: "darkblue" }}>
        UpBelieve
      </AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Blogs" />
        <ListItemText primary="Zones" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        {/* <ListItemButton onClick={() => setShowSearchBox(true)}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton> */}
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
