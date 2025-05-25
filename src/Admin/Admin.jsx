import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListItemButton, ListItem, ListItemIcon, ListItemText, List, Box, Toolbar, Drawer, CssBaseline } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard';
import ProductTable from './component/ProductTable';
import CreateProductsForm from './component/CreateProductsForm';
import OrderTable from './component/OrderTable';
import CustomerTable from './component/CustomerTable';






const menu = [
  {name:"Dashboard",path:"/admin" ,icon:<DashboardCustomizeIcon/>},
  {name:"Products",path:"/admin/products",icon:<ProductionQuantityLimitsIcon/>},
  {name:"Orders",path:"/admin/orders",icon:<BookmarkBorderIcon/>},
  {name:"Customers",path:"/admin/customers",icon:<SupportAgentIcon/>},
  {name:"AddProduct",path:"/admin/product/create",icon:<AddShoppingCartIcon/>},
]
const Admin = () => {
  const theme=useTheme();
  const isLargeScreen=useMediaQuery(theme.breakpoints.up('md'));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate=useNavigate();


  const drawer=(
    <Box sx={{
      overflow:"auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      height:"100%"
    }}>
{/* {isLargeScreen && <Toolbar/>} */}
      <List>
        {menu.map((item,index)=>(
          <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
            {/* <ListItemIcon>{index%2===0?<InboxIcon/>:<EmailIcon/>}</ListItemIcon> */}
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        
          <ListItem  disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText>Account</ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  )
  return (
    <div>
      <div className='flex h-[100vh] '>
        <CssBaseline/>
      <div className='w-[15%] border border-gray-300 h-full fixed top-0'>
          {drawer}
          </div>
         
         <div className='w-[85%] ml-[15%]  h-full'>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/products' element={<ProductTable/>}></Route>
            <Route path='orders' element={<OrderTable/>}></Route>
            <Route path='customers' element={<CustomerTable/>}></Route>
            <Route path='product/create' element={<CreateProductsForm/>}></Route>


          </Routes>
         </div>
        </div>
    </div>
  )
}

export default Admin
