import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardHeader,
  Grid,
  Icon,
  Typography,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";

const saleData = [
  {
    stats: "245k",
    title: "Sales",
    icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
    color: "primary.main",
  },
  {
    stats: "246k",
    title: "Customers",
    icon: <AccountBoxIcon sx={{ fontSize: "1.75rem" }} />,
    color: "success.main",
  },
  {
    stats: "244k",
    title: "Products",
    icon: <AppSettingsAltIcon sx={{ fontSize: "1.75rem" }} />,
    color: "warning.main",
  },
  {
    stats: "248k",
    title: "Revenue",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
    color: "info.main",
  },
];

const renderStats = () => {
  return saleData.map((item, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            bgcolor: item.color,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{ height: "100%" , backgroundColor: "#2B2B52", color: "white" }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small" sx={{ color: "white" }}>
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ pr: 2, color: "white" }}>
              Total 45.9% growth
            </Box>
            last month
          </Typography>
        }
        titleTypographyProps={{
          sx: { letterSpacing: ".15px !important" },
          mb: 2.5,
          lineHeight: "2rem !important",
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={5} sx={{ justifyContent: "space-between", mt:1}}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
