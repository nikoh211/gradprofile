const fs = require('fs').promises;
const path = require('path');

const STORAGE_FILE = path.join(__dirname, '../data/waitlist.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  const dir = path.dirname(STORAGE_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
};

// Initialize storage file if it doesn't exist
const initStorage = async () => {
  try {
    await fs.access(STORAGE_FILE);
  } catch {
    await fs.writeFile(STORAGE_FILE, JSON.stringify([]));
  }
};

const storage = {
  async getAll() {
    await ensureDataDir();
    await initStorage();
    const data = await fs.readFile(STORAGE_FILE, 'utf8');
    return JSON.parse(data);
  },

  async add(entry) {
    const entries = await this.getAll();
    const exists = entries.some(e => e.email === entry.email);
    if (exists) {
      throw new Error('Email already registered');
    }
    
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    entries.push(newEntry);
    await fs.writeFile(STORAGE_FILE, JSON.stringify(entries, null, 2));
    return newEntry;
  },

  async deleteEntry(id) {
    const entries = await this.getAll();
    const filteredEntries = entries.filter(entry => entry.id !== id);
    await fs.writeFile(STORAGE_FILE, JSON.stringify(filteredEntries, null, 2));
    return true;
  },

  async deleteAll() {
    await fs.writeFile(STORAGE_FILE, JSON.stringify([], null, 2));
    return true;
  }
};

module.exports = storage; 