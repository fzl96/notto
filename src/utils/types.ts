export interface NoteType {
  id: string,
  title: string
  body: string,
  createdAt: any,
  pinned: boolean
}
export interface NotesContextType {
  notes: NoteType[];
}