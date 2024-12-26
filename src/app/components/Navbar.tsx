//components/navbar.tsx
import Link from 'next/link';

const Navbar : React.FC = () => {
    return (
        <nav>
            <Link href = "/">Acceuil</Link>
            <Link href = "/about">A propos</Link>
        </nav>
    );
};
export default Navbar;