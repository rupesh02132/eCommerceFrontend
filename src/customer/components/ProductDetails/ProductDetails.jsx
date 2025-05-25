import { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Grid, LinearProgress, Box } from "@mui/material";

import { Radio, RadioGroup } from "@headlessui/react";

import ReviewCard from "./ReviewCard";

import { useNavigate, useParams } from "react-router-dom";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import { useDispatch } from "react-redux";
import { findProductById } from "../../../State/product/Action";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { addItemToCart } from "../../../State/Cart/Action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],

  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const { productS, selectedProduct } = useSelector((store) => store);

  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  // const {productS}=useSelector(store=>store);

  console.log("params", params.productId);

  const handleAddToCart = async () => {
    if (!selectedSize?.name) {
      console.log("Size not selected");
      return;
    }

    const data = {
      productId: params.productId,
      size: selectedSize.name,
      quantity: 1,
    };

    console.log("Sending to backend:", data);

    try {
      await dispatch(addItemToCart(data));
      navigate("/Cart");
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    if (params.productId) {
      dispatch(findProductById({ productId: params.productId }));
    }
  }, [params.productId]);

  const similarProducts = productS?.products?.content?.filter((product) => {
    return (
      product._id !== params.productId ||
      product.color?.some((color) => selectedProduct?.color?.includes(color))
    );
  });

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={productS.product?.imageUrl}
                src={productS.product?.imageUrl}
                className="hidden size-full rounded-lg object-cover lg:block"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 apspect-w-3 rounded-lg overflow-hidden max-w-[5rem] max-h-[5rem]">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="aspect-3/2 w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                {productS.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl  text-gray-900 opacity-60 pt-1">
                {productS.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-3">
                <p className="font-semibold">₹{productS.product?.price}</p>{" "}
                <p className="line-through opacity-60">
                  ₹{productS.product?.discountedPrice}
                </p>{" "}
                <p className="text-green-600">
                  {productS.product?.discountPresent}% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="text-sm opacity-40">65656 Rating</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    400 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Add to card
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rating and review */}

        <section>
          <h1 className="text-lg font-semibold pb-4">Recent Review & Rating</h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <ReviewCard />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="text-xl pb-1 font-semibold">Product Rating</h1>
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={0.5} readOnly />
                  <p className="text-sm opacity-40"> 5000 Rating</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          height: 7,
                        }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          height: 7,
                        }}
                        variant="determinate"
                        value={30}
                        color=""
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          height: 7,
                        }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          height: 7,
                        }}
                        variant="determinate"
                        value={10}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={2}>
                    <Grid item xs={2}>
                      <p>Bad</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          height: 7,
                        }}
                        variant="determinate"
                        value={5}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className="mt-10 pt-10">
          <h1 className="py-4 text-lg font-semibold">Similer Product</h1>
          <div className="flex flex-wrap space-y-5">
            {similarProducts.map((item) => (
              <HomeSectionCard key={item._id} prop={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
