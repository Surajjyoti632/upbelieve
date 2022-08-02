import { AppbarContainer, AppbarHeader } from "../../style/appbar";
import MenuIcon from "@mui/icons-material/Menu";
//import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../homepage/context"

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen } = useUIContext;
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      {/* <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton> */}
      <Actions matches={matches} />
    </AppbarContainer>
  );
}