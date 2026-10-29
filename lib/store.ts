import fs from "node:fs";
import path from "node:path";

const FILE = path.join(__dirname, "..", "..", "notes.json");

export interface Note {
  id: number;
  text: string;
}

interface NoteStore {
  nextId: number;
  notes: Note[];
}

function load(): NoteStore {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8")) as NoteStore;
  } catch {
    return { nextId: 1, notes: [] };
  }
}

function save(data: NoteStore): void {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function all(): Note[] {
  return load().notes;
}

export function add(text: string): Note {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

export function remove(id: number): boolean {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}
