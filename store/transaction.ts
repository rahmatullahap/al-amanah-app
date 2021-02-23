export interface TransactionState {
  list: Transaction[];
}

export interface Transaction {
  id: string;
  createdAt: Date;
  done: boolean;
  title: string;
  description: string;
}

export interface TransactionData {
  id?: string;
  title?: string;
  description?: string;
}

export function state(): TransactionState {
  return {
    list: []
  };
}
