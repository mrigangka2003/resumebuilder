import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({children}:{children:ReactNode}){
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar/>
            {children}
        </div>
    )
}