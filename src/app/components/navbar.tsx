//components/navbar.tsx
import Link from 'next/link';

const Navbar  = () => {
    return (
        <nav>
            <Link href = "/pages/home">Acceuil</Link>
            <Link href = "/pages/about">A propos</Link>
        </nav>
    );
};
export default Navbar;