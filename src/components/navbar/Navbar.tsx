"use client"
import Link from "next/link"
import { menuItems } from "@/data/menuItems"
import "./Navbar.css"

const Navbar = () => {
    const logout = () => {
        console.log("logged out !")
    }
    return (
        <div>
            <Link href="/">NextFolio</Link>
            <div>
                {menuItems.map(item => (
                    <Link key={item.id} href={item.url}>{item.title}</Link>
                ))}
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar