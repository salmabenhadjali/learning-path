import Link from "next/link"
import { menuItems } from "@/data/menuItems"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <Link href="/">NextFolio</Link>
            <div>
                {menuItems.map(item => (
                    <Link key={item.id} href={item.url}>{item.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar