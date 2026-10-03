const restaurants = [
   {
    slug: "chef-bashar",
    name: "Chef Bashar",
    description: "مطعم يقدم اشهى الاطباق العربية والغربية ",
    phone: "9647722248374",
    location: "https://maps.app.goo.gl/mxJWrzvZRNE1VjkU6",
    logo: "CH",
    logoImage: "/logos/1.jpg",
    branchesEnabled: true,

  branches: [
    {
    id: "chef-bashar-1",
    name: "الفرع الرئيسي - شارع الطابو",
     phone: "9647722248374",
  location: "https://maps.app.goo.gl/UBaXso4jnComYST58",
  },
    
   
  {
    id: "chef-bashar-2",
    name: "الفرع الثاني - التحرير",
    phone: "9647722248374",
    location: "https://maps.app.goo.gl/E22C2G2T7Q5Y4i5o9",
  },
  
  {
    id: "chef-bashar-1",
    name: "الفرع الثالث - تقاطع القدس",
     phone: "9647722248374",
  location: "https://maps.app.goo.gl/UBaXso4jnComYST58",
  },],

    theme: {
  primary: "#7c3aed",
  dark: "#171717",
},
    currency: "د.ع",
    orderEnabled: true,
  },
];

export function getRestaurantBySlug(slug) {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export function getAllRestaurants() {
  return restaurants;
}

export default restaurants;