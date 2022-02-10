import { returnValidShoes } from "../TestData/validData";

export default class APIService {
  constructor() {
    this.baseURL = '';
  }

  async getAllShoes () {
    const allShoes = await returnValidShoes();
    return allShoes;
  }
}
