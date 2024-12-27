// server.ts
import express from 'express';

const app = express();
const PORT = 5000;

app.get('/api/taches', (req, res) => {
  res.json([{ id: 1, titre: 'Tâche 1' }, { id: 2, titre: 'Tâche 2' }]);
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});