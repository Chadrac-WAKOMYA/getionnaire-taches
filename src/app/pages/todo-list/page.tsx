// components/TodoList.tsx
import React from 'react';

interface Tache {
  id: number;
  titre: string;
}

const TodoList: React.FC<{ taches: Tache[] }> = ({ taches }) => {
  return (
    <ul>
      {taches.map((tache) => (
        <li key={tache.id}>{tache.titre}</li>
      ))}
    </ul>
  );
};

export default TodoList;