import React from "react";
import { Box } from "@mui/system";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box sx={{ margin: "100px 200px" }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="grey"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Box>
  );
};

export default Loading;
