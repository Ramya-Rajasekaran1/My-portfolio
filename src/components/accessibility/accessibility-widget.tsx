"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Accessibility,
    X,
    Type,
    Contrast,
    ZoomIn,
    ZoomOut,
    Link2,
    AlignLeft,
    RotateCcw,
    ExternalLink,
} from "lucide-react";

type AccessibilitySettings = {
    fontSize: number;
    highContrast: boolean;
    dyslexiaFont: boolean;
    highlightLinks: boolean;
    increaseSpacing: boolean;
};

const defaultSettings: AccessibilitySettings = {
    fontSize: 100,
    highContrast: false,
    dyslexiaFont: false,
    highlightLinks: false,
    increaseSpacing: false,
};

export function AccessibilityWidget() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [settings, setSettings] = React.useState<AccessibilitySettings>(defaultSettings);

    // Load settings from localStorage on mount
    React.useEffect(() => {
        const saved = localStorage.getItem("accessibility-settings");
        if (saved) {
            try {
                setSettings(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load accessibility settings", e);
            }
        }
    }, []);

    // Save settings to localStorage and apply them
    React.useEffect(() => {
        localStorage.setItem("accessibility-settings", JSON.stringify(settings));
        applySettings(settings);
    }, [settings]);

    // Keyboard shortcuts
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Option/Alt + A: Toggle custom accessibility widget
            if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === "A" || e.key === "a")) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Custom event listener for external triggers (like the Navbar)
    React.useEffect(() => {
        const handleExternalToggle = () => setIsOpen(true);
        window.addEventListener("toggle-accessibility", handleExternalToggle);
        return () => window.removeEventListener("toggle-accessibility", handleExternalToggle);
    }, []);

    // Dispatch state changes for other components (like Navbar)
    React.useEffect(() => {
        const eventName = isOpen ? "accessibility-panel-opened" : "accessibility-panel-closed";
        window.dispatchEvent(new Event(eventName));
        
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const applySettings = (settings: AccessibilitySettings) => {
        const root = document.documentElement;

        // Font size
        root.style.fontSize = `${settings.fontSize}%`;

        // High contrast
        if (settings.highContrast) {
            root.classList.add("high-contrast");
        } else {
            root.classList.remove("high-contrast");
        }

        // Dyslexia font
        if (settings.dyslexiaFont) {
            root.classList.add("dyslexia-font");
        } else {
            root.classList.remove("dyslexia-font");
        }

        // Highlight links
        if (settings.highlightLinks) {
            root.classList.add("highlight-links");
        } else {
            root.classList.remove("highlight-links");
        }

        // Increase spacing
        if (settings.increaseSpacing) {
            root.classList.add("increase-spacing");
        } else {
            root.classList.remove("increase-spacing");
        }
    };

    const increaseFontSize = () => {
        setSettings((prev) => ({
            ...prev,
            fontSize: Math.min(prev.fontSize + 10, 150),
        }));
    };

    const decreaseFontSize = () => {
        setSettings((prev) => ({
            ...prev,
            fontSize: Math.max(prev.fontSize - 10, 80),
        }));
    };

    const toggleSetting = (key: keyof Omit<AccessibilitySettings, "fontSize">) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const resetSettings = () => {
        setSettings(defaultSettings);
    };

    return (
        <>
            {/* Floating Button - Desktop Only */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed hidden md:flex left-8 bottom-8 z-50 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/30 cursor-pointer"
                aria-label="Open accessibility settings (Option+A)"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Accessibility className="w-6 h-6" />
            </motion.button>

            {/* Accessibility Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[15000]"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -400, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 bottom-0 w-full sm:w-[400px] max-w-[100vw] sm:max-w-[400px] bg-white dark:bg-neutral-900 shadow-2xl z-[15001] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 flex items-center justify-between z-10">
                                <div className="flex items-center gap-3">
                                    <Accessibility className="w-6 h-6" />
                                    <h2 className="text-xl font-semibold">Accessibility</h2>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                                    aria-label="Close accessibility panel"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Keyboard Shortcut Info */}
                            <div className="px-6 py-4 bg-purple-950 dark:bg-black border-b border-white/10">
                                <p className="text-sm text-white">
                                    <strong>Keyboard Shortcut:</strong> <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20 text-xs font-mono text-white">Option+A</kbd>
                                </p>
                            </div>

                            {/* Settings */}
                            <div className="p-6 space-y-6">
                                {/* Font Size */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                                        <Type className="w-5 h-5" />
                                        <h3 className="font-semibold text-lg">Text Size</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={decreaseFontSize}
                                            disabled={settings.fontSize <= 80}
                                            className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            aria-label="Decrease font size"
                                        >
                                            <ZoomOut className="w-6 h-6" />
                                        </button>
                                        <div className="flex-1 text-center">
                                            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                                {settings.fontSize}%
                                            </span>
                                        </div>
                                        <button
                                            onClick={increaseFontSize}
                                            disabled={settings.fontSize >= 150}
                                            className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            aria-label="Increase font size"
                                        >
                                            <ZoomIn className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                <div className="border-t border-neutral-200 dark:border-neutral-800" />

                                {/* Toggle Options */}
                                <ToggleOption
                                    icon={<Contrast className="w-5 h-5" />}
                                    label="High Contrast"
                                    description="Increase contrast for better visibility"
                                    checked={settings.highContrast}
                                    onChange={() => toggleSetting("highContrast")}
                                />

                                <ToggleOption
                                    icon={<Type className="w-5 h-5" />}
                                    label="Dyslexia-Friendly Font"
                                    description="Use OpenDyslexic font for easier reading"
                                    checked={settings.dyslexiaFont}
                                    onChange={() => toggleSetting("dyslexiaFont")}
                                />

                                <ToggleOption
                                    icon={<Link2 className="w-5 h-5" />}
                                    label="Highlight Links"
                                    description="Make links more visible with underlines"
                                    checked={settings.highlightLinks}
                                    onChange={() => toggleSetting("highlightLinks")}
                                />

                                <ToggleOption
                                    icon={<AlignLeft className="w-5 h-5" />}
                                    label="Increase Spacing"
                                    description="Add more space between lines and letters"
                                    checked={settings.increaseSpacing}
                                    onChange={() => toggleSetting("increaseSpacing")}
                                />

                                <div className="border-t border-neutral-200 dark:border-neutral-800" />

                                {/* Browser Accessibility */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                                        <ExternalLink className="w-5 h-5" />
                                        <h3 className="font-semibold text-lg">Browser Accessibility</h3>
                                    </div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        Access your browser's native accessibility features for additional options like screen readers, voice control, and more.
                                    </p>
                                    <button
                                        onClick={() => {
                                            // Show browser-specific accessibility instructions
                                            const userAgent = navigator.userAgent.toLowerCase();
                                            let message = '';

                                            if (userAgent.includes('chrome') || userAgent.includes('edg')) {
                                                message = '🌐 Chrome/Edge Accessibility Settings:\n\n' +
                                                    '1. Click the menu (⋮) in the top-right\n' +
                                                    '2. Go to Settings\n' +
                                                    '3. Click "Accessibility" in the left sidebar\n\n' +
                                                    'Or type in address bar:\nchrome://settings/accessibility';
                                            } else if (userAgent.includes('safari')) {
                                                message = '🌐 Safari Accessibility:\n\n' +
                                                    '1. Safari Menu > Settings (Cmd+,)\n' +
                                                    '2. Go to Websites tab\n' +
                                                    '3. Select Reader or Page Zoom\n\n' +
                                                    'For macOS Accessibility:\n' +
                                                    'System Settings > Accessibility';
                                            } else if (userAgent.includes('firefox')) {
                                                message = '🌐 Firefox Accessibility:\n\n' +
                                                    '1. Click menu (☰) in top-right\n' +
                                                    '2. Go to Settings\n' +
                                                    '3. Scroll to "Browsing" section\n\n' +
                                                    'Or type in address bar:\nabout:preferences#general';
                                            } else {
                                                message = '🌐 Browser Accessibility:\n\n' +
                                                    'Access your browser\'s accessibility settings:\n' +
                                                    'Menu > Settings > Accessibility';
                                            }

                                            alert(message);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-purple-900 hover:bg-purple-950 rounded-xl transition-all shadow-md text-white font-bold border border-white/10"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Browser Accessibility Guide
                                    </button>
                                </div>

                                <div className="border-t border-neutral-200 dark:border-neutral-800" />

                                {/* Reset Button */}
                                <button
                                    onClick={resetSettings}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors text-neutral-900 dark:text-neutral-100 font-medium"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                    Reset to Default
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function ToggleOption({
    icon,
    label,
    description,
    checked,
    onChange,
}: {
    icon: React.ReactNode;
    label: string;
    description: string;
    checked: boolean;
    onChange: () => void;
}) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                    {icon}
                    <h3 className="font-semibold">{label}</h3>
                </div>
                <button
                    onClick={onChange}
                    role="switch"
                    aria-checked={checked}
                    className={`relative w-12 h-6 rounded-full transition-colors ${checked ? "bg-purple-600" : "bg-neutral-300 dark:bg-neutral-700"
                        }`}
                >
                    <motion.div
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                        animate={{ x: checked ? 28 : 4 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </button>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
        </div>
    );
}
