const restaurants = [
   {
    slug: "chef-bashar",
    name: "Chef Bashar",
    description: "مطعم يقدم اشهى الاطباق العربية والغربية ",
    phone: "9647722248374",
    location: "https://maps.app.goo.gl/mxJWrzvZRNE1VjkU6",
    logo: "CH",
    logoImage: "/logos/chef-bashar.png",
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