import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useMemo } from "react";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Mens_Shirt } from "../../../Data/Mens_Shirt";
import ProductCard from "./ProductCard";
import { filters, singleFilter } from "./FilterData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {findProducts} from "../../../State/product/Action"
import { useEffect } from "react";
import { Pagination } from "@mui/material";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const {productS}=useSelector(store=>store)

  const searchParams = new URLSearchParams(location.search);
  const colorValue = searchParams.get("color");

  const sizeValue = searchParams.get("size");
const sizeVa = sizeValue ? sizeValue.toUpperCase() : null;


const [minPrice, maxPrice] = searchParams.get("price")
? searchParams.get("price").split("-").map(Number)
: [0, 10000]; // default range

const [minDiscount] = searchParams.get("discount")
  ? searchParams.get("discount").split("-").map(Number)
  : [0];

console.log("minDiscount",minDiscount);
 
  const stock = searchParams.get("stock");
  const sortValue = searchParams.get("sort");

  const pageNumber = Number(searchParams.get("page"))
  

  

  const  handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let filterValue = searchParams.getAll(sectionId);
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item != value);

      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
      console.log("includes",value,sectionId,filterValue);
    } else {
      filterValue.push(value);
    }
    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
  
const handleRadioFilter = (e, sectionId) => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(sectionId, e.target.value);
  searchParams.set("page", 1); // Optional: reset to page 1 on filter
  const query = searchParams.toString();
  navigate({ search: `?${query}` });
};

useEffect(() => {
  // Prepare the data object
  const data = {
    Category: param.lavelTwo,
    color: colorValue,            
    sizes: sizeVa,            
    minPrice,
    maxPrice,
    minDiscount,
  
    sort: sortValue,
    pageNumber: pageNumber || 1,
    pageSize:15,
    stock,                     
  };

  // Dispatch the action
  dispatch(findProducts(data));
}, [
  param.lavelTwo,               
  colorValue,                   
  sizeValue,                   
  minPrice,                
  maxPrice,                  
  minDiscount,    
            
  sortValue,                  
  pageNumber,                   
  stock,                        
]);


  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        {/* Mobile filter dialog */}
<Dialog
  open={mobileFiltersOpen}
  onClose={setMobileFiltersOpen}
  className="relative z-40 lg:hidden"
>
  <DialogBackdrop
    transition
    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
  />

  <div className="fixed inset-0 z-40 flex">
    <DialogPanel
      transition
      className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
    >
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>
      </div>

      {/* Filters */}
      <form className="mt-4 border-t border-gray-200">
        {/* Multi-select filters (color, size) */}
        {filters.map((section) => (
          <Disclosure
            key={section.id}
            as="div"
            className="border-t border-gray-200 px-4 py-6"
          >
            <h3 className="-mx-2 -my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">
                  {section.name}
                </span>
                <span className="ml-6 flex items-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="size-5 group-data-open:hidden"
                  />
                  <MinusIcon
                    aria-hidden="true"
                    className="size-5 group-not-data-open:hidden"
                  />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-6">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center gap-3">
                    <input
                      onChange={() => handleFilter(option.value, section.id)}
                      id={`filter-mobile-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      type="checkbox"
                      checked={
                        searchParams.getAll(section.id).length > 0 &&
                        searchParams.getAll(section.id)[0].split(',').includes(option.value)
                      }
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                      className="min-w-0 flex-1 text-gray-500"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        ))}

        {/* Single-select filters (price, discount, availability) */}
        {singleFilter.map((section) => (
          <Disclosure
            key={section.id}
            as="div"
            className="border-t border-gray-200 px-4 py-6"
          >
            <h3 className="-mx-2 -my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">
                  {section.name}
                </span>
                <span className="ml-6 flex items-center">
                  <PlusIcon
                    aria-hidden="true"
                    className="size-5 group-data-open:hidden"
                  />
                  <MinusIcon
                    aria-hidden="true"
                    className="size-5 group-not-data-open:hidden"
                  />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-6">
                <FormControl component="fieldset">
                  <RadioGroup
                    name={`radio-group-${section.id}`}
                    value={searchParams.get(section.id) || ''}
                    onChange={(e) => handleRadioFilter(e, section.id)}
                  >
                    {section.options.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio size="small" />}
                        label={
                          <span className="text-sm text-gray-600">
                            {option.label}
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </form>
    </DialogPanel>
  </div>
</Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-20">
          {" "}
          {/*change there*/}
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-lg opacity-50 font-bold">Filter</h1>
                  <FilterListIcon />
                </div>

                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="size-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="size-5 hidden group-data-[open]:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <label
                              key={option.value}
                              className="flex items-center gap-3 cursor-pointer"
                            >
                              {/* Hidden Checkbox Input */}
                              <input
                                onChange={() =>
                                  handleFilter(option.value, section.id)
                                }
                                type="checkbox"
                                defaultChecked={option.checked}
                                value={option.value}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                className="peer hidden"
                              />
                              {/* Custom Checkbox Styling */}
                              <div className="size-5 flex items-center justify-center rounded border border-gray-400 peer-checked:border-indigo-600 peer-checked:bg-indigo-600 transition">
                                <svg
                                  className="size-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              {/* Label Text */}
                              <span className="text-sm text-gray-600">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  {singleFilter.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="size-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="size-5 hidden group-data-[open]:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <FormControl>
                          <RadioGroup name={`radio-group-${section.id}`}>
                            {section.options.map((option) => (
                              <FormControlLabel
                              onChange={(e)=>handleRadioFilter(e,section.id)}
                                key={option.value}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </div>
              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5">
                  {productS.products && productS.products?.content?.map((item) => (
                    <ProductCard product={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px=[3.6rem]">
            <div className="px-4 py-5 flex justify-center">
<Pagination count={productS.products?.totalPages} color="primary"  onChange={handlePaginationChange}/>
{/* <Pagination count={Mens_Shirt.length} color="primary"  onChange={handlePaginationChange}/> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
