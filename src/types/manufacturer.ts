import Product from "./product";
import SalesRep from "./sales-rep";

export default interface manufacturer {
  items: Product[];
  ManufacturerID: number;
  EmailAddress: string;
  CompanyName: string;
  ProductName?: string | null;
  PriceLevel?: number;
  IncludePricing: boolean;
  ShowBranding: boolean;
  Message: string;
  priceKey: string;
  priceLevelName: string;
  SalesRep: SalesRep;
}
