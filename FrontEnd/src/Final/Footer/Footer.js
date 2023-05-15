import React from "react";
import "../../css/Footer.css";

import Box from "@mui/material/Box";
function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <footer>
        <div className="inner">
          <div className="copy">
            <p>
              Designed by Sence
              <br />ⓒ Sence Corp.
            </p>
          </div>
        </div>
      </footer>
    </Box>
  );
}
export default Footer;
