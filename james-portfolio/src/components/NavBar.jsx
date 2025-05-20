import React, { useState } from "react";

const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Other Interests", path: "/other-interests" },
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((open) => !open);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 h-16 bg-[--color-secondary] text-white z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
                    <div className="font-bold text-xl text-[--color-primary]">My Portfolio</div>
                    <div className="hidden md:flex space-x-6">
                        {pages.map((page) => (
                            <a
                                key={page.path}
                                href={page.path}
                                className="text-[--color-accent] hover:text-[--color-primary] transition-colors"
                            >
                                {page.name}
                            </a>
                        ))}
                    </div>
                    <button
                        className="md:hidden bg-[--color-primary] text-white p-2 rounded-lg"
                        onClick={handleDrawerToggle}
                        aria-label="Open navigation menu"
                    >
                        <div className="space-y-1">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    </button>
                </div>
            </nav>
            {drawerOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={handleDrawerToggle}
                    ></div>
                    <div
                        className={`fixed top-0 right-0 h-full bg-[--color-secondary] w-64 transform transition-transform z-50 ${
                            drawerOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={handleDrawerToggle}
                            aria-label="Close navigation menu"
                        >
                            &times;
                        </button>
                        <div className="mt-16 space-y-4 px-6">
                            {pages.map((page) => (
                                <a
                                    key={page.path}
                                    href={page.path}
                                    className="block text-[--color-accent] hover:text-[--color-primary] transition-colors"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    {page.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;