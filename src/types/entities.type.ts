export type User = {
  id?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  cards?: Card[];
};

type Card = {
  id: string;
  imageUrl?: string;
  love?: boolean;
};
