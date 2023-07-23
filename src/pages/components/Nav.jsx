import { motion } from 'framer-motion';
import { useState } from "react";
import './Nav.css'
import { useMediaQuery } from "../../util/usemediaQuery";

export default function Nav() {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery("(min-width: 1280px)")

    // Framer Motion specs
    const navMotion = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.15,
            },
        },
        hidden: {
            opacity: 0,
        },
    }

    const itemMotion = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }


    return (

        <nav className="nav-bar">

            {/* Checks if we're on mobile or not */}
            {matches && (
                <div className="nav-links flex gap-10 text-white">
                    <a className='nav-link-text' href="/Gallery">Gallery</a>
                    <a className='nav-link-text' href="/About">About Us</a>
                    <a className='nav-link-text' href="/Contact">Contact</a>
                </div>
            )}


            {/* TOGGLE ICON */}
            {!matches && (
                <div onClick={() => setToggled(prevToggled => !prevToggled)}
                    className="space-y-1.5 cursor-pointer z-50">
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0, width: toggled ? 32 : 24 }}
                        className="block h-0.5 w-6 bg-white"> </motion.span>

                    <motion.span
                        animate={{ width: toggled ? 0 : 24 }}
                        className="block h-0.5 w-6 bg-white"> </motion.span>

                    <motion.span
                        animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 24 }}
                        className="block h-0.5 w-6 bg-white"> </motion.span>
                </div>
            )}

            {toggled && !matches && (
                <motion.div
                    variants={navMotion}
                    initial="hidden"
                    animate="visible"
                    className="fixed flex bg-neutral-500 bottom-0 left-0 w-full h-screen justify-center items-center">

                    <motion.div
                        className="nav-links-toggle flex flex-col gap-20 text-lg items-center justify-center">
                        <motion.a variants={itemMotion} href="./About.astro">About Us</motion.a>
                        <motion.a variants={itemMotion} href="/">Gallery</motion.a>
                        <motion.a variants={itemMotion} href="/Contact">Contact</motion.a>
                    </motion.div>
                </motion.div>

            )}

        </nav>

    )
}