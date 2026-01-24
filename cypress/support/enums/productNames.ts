export const ProductName = {
  BACKPACK: 'sauce-labs-backpack', 
  FLEECE_JACKET: 'sauce-labs-fleece-jacket', 
  ONESIE_IMG: 'sauce-labs-onesie-img',
} as const;

export type ProductKeyType = typeof ProductName[keyof typeof ProductName];
