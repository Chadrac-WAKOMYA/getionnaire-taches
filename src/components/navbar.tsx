//components/navbar.tsx
import Link from 'next/link';

const Navbar  = () => {
    return (
        <nav>
            <Link href = "/dashboard">Acceuil</Link>
            <Link href = "../pages/about">A propos</Link>
        </nav>
    );
};
export default Navbar;