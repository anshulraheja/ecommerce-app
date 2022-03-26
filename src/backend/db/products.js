import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Nike Air Force 1 '07",
    price: "5000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-WrLlWX.png",
    categoryName: "Men",
    subCategory: "Shoes",
    rating: "1"
  },
  {
    _id: uuid(),
    title: "Nike Air Max 90 SE",
    price: "3000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/40b1143a-a58d-4887-825b-3d4ceea10f7f/sportswear-tech-fleece-hoodie-bxk5v8.png",
    categoryName: "Men",
    subCategory: "Clothing",
    rating: "2"
  },
  {
    _id: uuid(),
    title: "Nike3",
    price: "1000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4e9fa387-77b4-4f0b-a9aa-95b703e1b046/air-zoom-tempo-next-road-running-shoes-cjJSXN.png",
    categoryName: "Women",
    subCategory: "Shoes",
    rating: "3"
  },
  {
    _id: uuid(),
    title: "Nike Air Force 1 '07",
    price: "5000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/58e6ba49-6035-4cac-9907-32e7de72df83/dri-fit-one-mid-rise-leggings-9ct6Z3.png",
    categoryName: "Women",
    subCategory: "Clothing",
    rating: "4"
  },
  {
    _id: uuid(),
    title: "Nike Air Max 90 SE",
    price: "3000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4c629df2-9840-4982-aa92-918f63d51a8b/flex-advance-younger-shoes-rXcKzS.png",
    categoryName: "Kids",
    subCategory: "Shoes",
    rating: "5"
  },
  {
    _id: uuid(),
    title: "Nike3",
    price: "1000",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3e797e14-9abe-44b7-85c7-d25f5751a2d3/pro-older-short-sleeve-training-top-1z0zqt.png",
    categoryName: "Kids",
    subCategory: "Clothing",
    rating: "5"
  },

];
