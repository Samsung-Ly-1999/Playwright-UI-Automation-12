import { Product } from "../types/saucedemo/product.types";

export class GeneralUtils {
  constructor() {}
  static async convertJsonToObject(jsonString: string): Promise<any> {
    return await JSON.parse(jsonString);
  }
}
