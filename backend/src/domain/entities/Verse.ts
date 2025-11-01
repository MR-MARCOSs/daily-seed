export interface Verse {
  id: string;
  text: string;
  reference: string;
  lesson: string;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateVerseData {
  text: string;
  reference: string;
  lesson: string;
}