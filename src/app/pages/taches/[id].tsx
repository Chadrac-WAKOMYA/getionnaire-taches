// pages/taches/[id].tsx
import { useRouter } from 'next/router';

const TacheDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Détails de la tâche {id}</h1>;
};

export default TacheDetail;