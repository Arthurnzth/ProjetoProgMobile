import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("pratos.db");
db.execSync("CREATE TABLE IF NOT EXISTS storage (key TEXT PRIMARY KEY, value TEXT)");

export const storageGet = (key) => {
    const row = db.getFirstSync("SELECT value FROM storage WHERE key = ?", [key]);
    return row ? row.value : null;
};

export const storageSave = (key, value) => {
    db.runSync("INSERT OR REPLACE INTO storage (key, value) VALUES (?, ?)", [key, value]);
};

export const storageRemove = (key) => {
    db.runSync("DELETE FROM storage WHERE key = ?", [key]);
};
