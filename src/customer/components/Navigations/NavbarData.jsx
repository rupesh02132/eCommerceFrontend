export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        // {
        //   name: 'New Arrivals',
        //   href: '/women/new-arrivals',
        //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        //   imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        // },
        // {
        //   name: 'Basic Tees',
        //   href: '/women/basic-tees',
        //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        //   imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        // },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {name:"Top",id:"top",href:"#" },
            { name: 'Dresses', id: 'women_dress', href: '/women/clothing/dresses' },
            { name: 'Women Jeans', id: 'women_jeans', href: '/women/clothing/jeans' },
            { name: 'Lengha Choli', id: 'lengha_choli', href: '/women/clothing/lengha-choli' },
            { name: 'Sweaters', id: 'sweater', href: '/women/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirt', href: '/women/clothing/t-shirts' },
            { name: 'Jackets', id: 'jacket', href: '/women/clothing/jackets' },
            { name: 'Gouns', id: 'gouns', href: '/women/clothing/gouns' },
            { name: 'Sarees', id: 'saree', href: '/women/clothing/sarees' },
            { name: 'Kurtas', id: 'kurtas', href: '/women/clothing/kurtas' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: '/women/accessories/watches' },
            { name: 'Wallets', id: 'wallet', href: '/women/accessories/wallets' },
            { name: 'Bags', id: 'bag', href: '/women/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasse', href: '/women/accessories/sunglasses' },
            { name: 'Hats', id: 'hat', href: '/women/accessories/hats' },
            { name: 'Belts', id: 'belt', href: '/women/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: 'full-nelson', href: '/women/brands/full-nelson' },
            { name: 'My Way', id: 'my-way', href: '/women/brands/my-way' },
            { name: 'Re-Arranged', id: 're-arranged', href: '/women/brands/re-arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: '/women/brands/counterfeit' },
            { name: 'Significant Other', id: 'significant-other', href: '/women/brands/significant-other' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '/men/new-arrivals',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '/men/artwork-tees',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta', href: '/men/clothing/kurtas' },
            { name: 'Shirt', id: 'shirt', href: '/men/clothing/shirts' },
            { name: 'Men Jeans', id: 'men_jeans', href: '/men/clothing/jeans' },
            { name: 'Sweaters', id: 'sweater', href: '/men/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirt', href: '/men/clothing/t-shirts' },
            { name: 'Jackets', id: 'jacket', href: '/men/clothing/jackets' },
            { name: 'Activewear', id: 'activewear', href: '/men/clothing/activewear' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: '/men/accessories/watches' },
            { name: 'Wallets', id: 'wallet', href: '/men/accessories/wallets' },
            { name: 'Bags', id: 'bag', href: '/men/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasse', href: '/men/accessories/sunglasses' },
            { name: 'Hats', id: 'hat', href: '/men/accessories/hats' },
            { name: 'Belts', id: 'belt', href: '/men/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: 're-arranged', href: '/men/brands/re-arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: '/men/brands/counterfeit' },
            { name: 'Full Nelson', id: 'full-nelson', href: '/men/brands/full-nelson' },
            { name: 'My Way', id: 'my-way', href: '/men/brands/my-way' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/company' },
    { name: 'Stores', href: '/stores' },
  ],
};