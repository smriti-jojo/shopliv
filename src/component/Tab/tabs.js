import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ tabValue }) {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   console.log("tabvalue", tabValue);
  //   if (window.innerWidth > 648) {
  //     setWidth(true);
  //   }
  // }, []);

  useLayoutEffect(() => {
    console.log("tabvalue", tabValue);
    if (window.outerWidth > 648) {
      setWidth(true);
    }
  }, [window.outerWidth]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        padding: 5,
        height: "70%",
        marginTop: window.outerWidth < 648 ? "30%" : "2px",
      }}
    >
      <Tabs
        orientation={"vertical"}
        variant="scrollable"
        TabIndicatorProps={{ style: { background: "#FFA500" } }}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          ".Mui-selected": {
            color: `#FFA500`,
            padding: "1rem",
          },
        }}
      >
        {tabValue.map((item, index) => (
          <Tab
            label={<img src={item.title} width={"20%"} />}
            {...a11yProps(item.index)}
            sx={{ margin: "5px" }}
            // sx={
            //   value === item.index ? { color: "#808080" } : { color: "#FFA500" }
            // }
          />
        ))}
      </Tabs>
      {tabValue.map((item, index) => (
        <TabPanel value={value} index={item.index} width={"100%"}>
          <img src={item.component} width={"80%"} />
        </TabPanel>
      ))}
    </Box>
  );
}
