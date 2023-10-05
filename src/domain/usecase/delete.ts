export interface DeleteInput {
  _id: string;
  userId: string;
}

export interface Delete {
  delete: (data: DeleteInput) => Promise<void>;
}
