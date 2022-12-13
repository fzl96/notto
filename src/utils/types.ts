export interface NoteType {
  id: string,
  title: string
  body: string,
  createdAt: any,
  pinned: boolean
}
type Notes {
  id: string,
  title: string
}
export interface NotesContextType {
  notes: NoteType[];
}