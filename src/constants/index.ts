import { bannerImageWatchOne } from "@/assets/banner";

export const navigation = [
    {title: 'Home', href:'/'},
    {title: 'Products', href:'/products'},
    {title: 'Categories', href:'/Categories'},
    {title: 'Offers', href:'/Offers'},
];

export const footerInformation =[
     {title: 'About', href:'/about'},
     {title: 'Contact', href:'/contact'},
     {title: 'Inquiry', href:'/inquiry'},
     {title: 'FAQs', href:'/faqs'},
   

]

export const banner = {
    id: "Banner_001",
    priceText:"Starting at $99.00",
    title:"The best Collections",
    textOne:"Exclusive offer",
    offerPrice:"-40%",
    textTwo:"Of this Month",
    buttonLink:"/products",
    image: bannerImageWatchOne,
}