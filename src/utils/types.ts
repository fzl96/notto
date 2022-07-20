export interface NoteType {
  id: string,
  title: string
  body: string,
  createdAt: any
}
export interface NotesContextType {
  notes: NoteType[];
}
