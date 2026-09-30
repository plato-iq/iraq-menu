import { getRestaurantBySlug } from "./restaurants";
import { getMenuBySlug } from "./menuData";

export function getRestaurant(slug) {
  return getRestaurantBySlug(slug);
}

export function getRestaurantMenu(slug) {
  return getMenuBySlug(slug);
}

export function getRestaurantData(slug) {
  const restaurant = getRestaurant(slug);
  const menu = getRestaurantMenu(slug);

  if (!restaurant) {
    return null;
  }

  return {
    restaurant,
    menu,
  };
}