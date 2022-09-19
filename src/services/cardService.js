import { API_MOCKUP_DELAY } from "../config/appConfig";
import CARD_DATA from "../data/pokemon.json";

export const getCards = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CARD_DATA);
    }, API_MOCKUP_DELAY);
  });
};
