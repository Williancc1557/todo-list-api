export interface DeleteRepositoryInput {
  id: string;
  userId: string;
}

export interface DeleteRepository {
  delete: (data: DeleteRepositoryInput) => Promise<void>;
}
