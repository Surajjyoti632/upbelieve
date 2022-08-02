import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../style/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <BannerContent>
        <Typography variant="h6">File Your Complain Here</Typography>
        <BannerTitle variant="h2">
          We Are Here For You
        </BannerTitle>

        <BannerDescription variant="subtitle">
          This is customer complaint service.To 
          serve every customer 24*7 service.For best customer experience
          and deliver right product at right time to right person.
        </BannerDescription>

        {/* <BannerShopButton color="primary"></BannerShopButton> */}
      </BannerContent>
    </BannerContainer>
  );
}