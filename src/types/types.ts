export interface Verse {
  id: string;
  text: string;
  reference: string;
  lesson: string;
  isApproved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}