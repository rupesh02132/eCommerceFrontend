import React, { useEffect } from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../State/product/Action';

function HomePage() {
  const dispatch = useDispatch();

  const { productS } = useSelector(store => store);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Safely get product array
  const allProducts = productS?.products?.content || [];

  // Filter products by category
  const womensKurta = allProducts.filter(
    (item) => item.category?.name?.toLowerCase() === "women's kurta"
  );

  const mensKurta = allProducts.filter(
    (item) => item.category?.name?.toLowerCase() === "men's kurta"
  );

  const mensShirt = allProducts.filter(
    (item) => item.category?.name?.toLowerCase() === "men's shirt"
  );

  const mensShoes = allProducts.filter(
    (item) => item.category?.name?.toLowerCase() === "men's shoes"
  );

  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel Data={womensKurta} sectionName={"Women's Kurta"} />
        <HomeSectionCarousel Data={mensKurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel Data={mensShirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel Data={mensShoes} sectionName={"Men's Shoes"} />
      </div>
    </div>
  );
}

export default HomePage;
