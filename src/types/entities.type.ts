export type User = {
  id?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  cards?: Card[];
  coin?: string;
  diamond?: string;
};

type Card = {
  id: string;
  imageUrl?: string;
  love?: boolean;
};
