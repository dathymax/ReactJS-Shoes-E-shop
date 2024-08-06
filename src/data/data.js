import shoe1 from "../assets/shoes/best-selling/shoe-1.png"
import shoe2 from "../assets/shoes/best-selling/shoe-2.png"
import shoe3 from "../assets/shoes/best-selling/shoe-3.png"
import shoe4 from "../assets/shoes/best-selling/shoe-4.png"
import category1 from "../assets/categories/nike.png"
import category2 from "../assets/categories/adidas.png"
import category3 from "../assets/categories/converse.png"
import category4 from "../assets/categories/puma.png"
import category5 from "../assets/categories/reebook.png"
import category6 from "../assets/categories/asics.png"
import news1 from "../assets/news/news-1.svg"
import news2 from "../assets/news/news-2.svg"
import news3 from "../assets/news/news-3.svg"
import service1 from "../assets/services/service-1.svg"
import service2 from "../assets/services/service-2.svg"
import service3 from "../assets/services/service-3.svg"
import service4 from "../assets/services/service-4.svg"
import product1 from "../assets/shoes/in-cart/no-discount-1.png"
import product2 from "../assets/shoes/in-cart/no-discount-2.png"
import product3 from "../assets/shoes/in-cart/no-discount-3.png"

export const shoes = [
    { id: 1, shoeName: "Nike Zoom Kd Iii", price: 120, isNew: true, isFavorite: false, isSoldOut: false, img: shoe1 },
    { id: 2, shoeName: "Converse X Rick Owens", price: 220, isNew: false, isFavorite: true, isSoldOut: false, img: shoe2 },
    { id: 3, shoeName: "Converse Chuck 70 Fall Tone", price: 320, isNew: false, isFavorite: false, isSoldOut: true, img: shoe3 },
    { id: 4, shoeName: "Puma X Nanamica Clyde Gtx", price: 420, isNew: true, isFavorite: false, isSoldOut: false, img: shoe4 },
];

export const categories = [
    { id: 1, categoryName: "Nike", shoeCount: 1280, img: category1 },
    { id: 2, categoryName: "Adidas", shoeCount: 1280, img: category2 },
    { id: 3, categoryName: "Converse", shoeCount: 1280, img: category3 },
    { id: 4, categoryName: "Puma", shoeCount: 1280, img: category4 },
    { id: 5, categoryName: "Reebook", shoeCount: 1280, img: category5 },
    { id: 6, categoryName: "ASICS", shoeCount: 1280, img: category6 },
];
export const news = [
    { id: 1, date: new Date(), title: "Where to hunt number 23: Noah x PUMA Pro Star 'White and Green'", img: news1 },
    { id: 2, date: new Date(), title: "Information leaked about the GmbH x ASICS Gel-Kayano Legacy 'Cilantro' & 'White Black' collection", img: news2 },
    { id: 3, date: new Date(), title: "25% off on Friends & Family Sale at PUMA", img: news3 },
];
export const services = [
    { id: 1, img: service1, title: "Best Quality Guarantee", content: "Product that arrived at your door already passed our Quality Control procedure." },
    { id: 2, img: service2, title: "Easy Payment Choice", content: "Various payment choice will give an ease every time you purchase our product" },
    { id: 3, img: service3, title: "On-Time Delivery", content: "We will make sure that all product that you purchased will arrived at your address" },
    { id: 4, img: service4, title: "Free Return", content: "100% refund when there is a product quality problem" },
];

export const productCart = [
    { id: 1, img: product1, category: "Nike Collection", shoeName: "Nike Template", price: 400, quantity: 3, originalPrice: 900, colorHex: "#171415", colorName: "Black", size: 43 },
    { id: 2, img: product2, category: "Nike Collection", shoeName: "Converse Booya", price: 400, quantity: 3, colorHex: "#91A3A8", colorName: "Light green", size: 43 },
    { id: 3, img: product3, category: "Nike Collection", shoeName: "Mcde ijue", price: 400, quantity: 3, colorHex: "#171415", colorName: "Black", size: 43 },
];