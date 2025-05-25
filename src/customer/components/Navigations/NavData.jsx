export const navigation={
categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'top', href: "(/women/clothing/dresses" },
            { name: 'Dresses',id: 'women_dress', href: '#' },
            { name: 'Pants', href: '#' },
          
            { name: 'T-Shirts', href: '#' },
          
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
          
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
        
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
          href: '#',
          imageSrc: 'https://themefisher.com/blog/flatastic.webp',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdj9avuaSxQ15p65z9m2mEeTxDRQwmJ5ckrQ&s',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          // items: [
          //   { name: 'Tops', href: '#' },
          //   { name: 'Pants', href: '#' },
          //   { name: 'Sweaters', href: '#' },
          //   { name: 'T-Shirts', href: '#' },
          //   { name: 'Jackets', href: '#' },
          //   { name: 'Activewear', href: '#' },
          //   { name: 'Browse All', href: '#' },
          // ],

          items: [
            { name: 'mens_kurta', id: 'mens_kurta', href: '/men/clothing/kurtas' },
            { name: 'Shirt', id: 'shirt', href:"#"},
            { name: 'Men Jeans', id: 'men_jeans', href:"#" },
            { name: 'Sweaters', id: 'sweater', href:"#" },
            { name: 'T-Shirts', id: 't-shirt', href:'#' },
      
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
         
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ]
}










