// server.ts
import express from 'express';

const app = express();
const PORT = 5000;

//Recupération de tâches
app.get('/api/taches', (req, res) => {
  res.json([{ id: 1, titre: 'Tâche 1' }, { id: 2, titre: 'Tâche 2' }]);
});

//Ajout tache
app.post('/api/taches', (req, res) => {
    const nouvelleTache = req.body; // Assurez-vous d'utiliser body-parser
    // Ajoutez la logique pour sauvegarder la tâche
    res.status(201).json(nouvelleTache);
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});