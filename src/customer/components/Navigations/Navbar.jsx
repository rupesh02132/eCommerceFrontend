import { Fragment, useEffect, useState } from "react";

import {
  Dialog,
  Popover,
  Tab,
  Transition,
  TabGroup,
  TabList,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { navigation } from "./NavData";
import { deepPurple } from "@mui/material/colors";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";
import { getUser, logout } from "../../../State/Auth/Action";
import { Disclosure} from "@headlessui/react";
import { getCart } from "../../../State/Cart/Action";


import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const jwt = localStorage.getItem("jwt") || "";
  const auth = useSelector((store) => store.auth);
  const {cart} = useSelector(store=>store);

 
useEffect(() => {
  dispatch(getCart());
}, []);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // Fetch user data when JWT is available
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]); //

  useEffect(() => {
    if (auth.user) {
      handleClose();
      // console.log("auth.user",auth.user)
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   }
  // }, [jwt, auth.jwt]);

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative w-full max-w-xs flex flex-col bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* link */}
                <Disclosure>
                  {({ open, close }) => (
                    <Tab.Group as="div" className="mt-2">
                      <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8 px-4">
                          {navigation.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-900",
                                  "flex-1 border-b-2 px-1 py-4 text-base font-medium"
                                )
                              }
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>

                      <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4 pb-8 pt-10"
                          >
                            <div className="grid grid-cols-2 gap-x-4">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-sm"
                                >
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href={item.href}
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      className="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>

                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flex">
                                      <p
                                        onClick={() =>
                                          handleCategoryClick(
                                            category,
                                            section,
                                            item,
                                            close
                                          )
                                        }
                                        className="cursor-pointer hover:text-gray-800"
                                      >
                                        {item.name}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  )}
                </Disclosure>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹1000
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Your Company</span>
                <a href="/">
                  <img
                    src="src\customer\components\Navigations\logo.png"
                    alt="Shopwithzosh"
                    className="h-14 w-15 mr-2 rounded-full"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Category list */}
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles  */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="flex items-center space-x-4">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="cursor-pointer"
                        onClick={handleUserClick}
                        sx={{ bgcolor: deepPurple[500], color: "white" }}
                        aria-controls={openUserMenu ? "user-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                      >
                        {auth.user.user.firstname[0].toUpperCase()}
                      </Avatar>

                      <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{ "aria-labelledby": "user-avatar" }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account/order")}>
                          My Order
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setOpenAuthModal(true)}
                      className="text-gray-700 hover:text-gray-800"
                    >
                      Sign In
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex items-center lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2" onClick={() => navigate("/cart")}>
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.cart?.cartItems?.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal open={openAuthModal} handleClose={handleClose} />
    </div>
  );
}
