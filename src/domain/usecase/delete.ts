export interface DeleteInput {
  _id: string;
}

export interface Delete {
  delete: (data: DeleteInput) => Promise<void>;
}
