import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AppsIcon from "@mui/icons-material/Apps";
import { drawerWidth } from "../Drawer/Drawer";
import API from "../../requester";

const Sidebar = (props) => {
  const { mobileOpen, onDrawerToggle, window } = props;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  console.log("categories: ", categories);

  const fetchCategories = useCallback(async () => {
    const response = await API.get("categories");
    setCategories(response.data);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const setCategoryIcons = (category) => {
    switch (category) {
      case "Clothes":
        return <CheckroomIcon />;

      case "Electronics":
        return <DevicesOtherIcon />;

      default:
        return <AppsIcon />;
    }
  };

  const handleSelectCategory = (index) => {
    setSelectedCategory(index);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {categories.map((category, index) => (
          <>
            <ListItemButton
              selected={selectedCategory === index}
              onClick={() => handleSelectCategory(index)}
              key={category.id}
            >
              <ListItemIcon>{setCategoryIcons(category.name)}</ListItemIcon>

              <ListItemText primary={category.name} />
            </ListItemButton>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  onDrawerToggle: PropTypes.func,
};

export default Sidebar;
