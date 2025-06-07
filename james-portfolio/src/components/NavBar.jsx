import React, { useState } from "react";
// import tailwindcss from "tailwindcss/tailwind-config";

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
            <nav className="navbar navbar-translucent">
                <div className="navbar-content">
                    <div className="navbar-logo">My Portfolio</div>
                    <div className="navbar-links">
                        {pages.map((page) => (
                            <a
                                key={page.path}
                                href={page.path}
                                className=""
                            >
                                {page.name}
                            </a>
                        ))}
                    </div>
                    <button
                        className="navbar-menu-btn md:hidden"
                        onClick={handleDrawerToggle}
                        aria-label="Open navigation menu"
                    >
                        <div className="navbar-menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </nav>
            {drawerOpen && (
                <>
                    <div
                        className="navbar-backdrop open"
                        onClick={handleDrawerToggle}
                    ></div>
                    <div
                        className={`navbar-drawer open`}
                        style={{
                            transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)'
                        }}
                    >
                        <button
                            className="navbar-drawer-close"
                            onClick={handleDrawerToggle}
                            aria-label="Close navigation menu"
                        >
                            &times;
                        </button>
                        <div className="navbar-drawer-links">
                            {pages.map((page) => (
                                <a
                                    key={page.path}
                                    href={page.path}
                                    className="navbar-drawer-link"
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