"use client";

import * as React from "react";

export function ReaderView() {
    // Keyboard shortcut: Cmd+Option+R (Mac) / Ctrl+Alt+R (Windows/Linux)
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Check for Cmd/Ctrl + Option/Alt + R
            if ((e.metaKey || e.ctrlKey) && e.altKey && (e.key === "R" || e.key === "r")) {
                e.preventDefault();
                console.log("Reader view shortcut triggered");

                const userAgent = navigator.userAgent.toLowerCase();
                let message = '';

                if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
                    message = '📖 Safari Reader View & Voice:\n\n' +
                        'READER VIEW:\n' +
                        '• Click Reader icon (📄) in address bar\n' +
                        '• Or: View > Enter Reader (Cmd+Shift+R)\n\n' +
                        'TEXT-TO-SPEECH:\n' +
                        '• Edit > Speech > Start Speaking\n' +
                        '• Or right-click text > Speech > Start Speaking\n' +
                        '• System: Settings > Accessibility > Spoken Content\n\n' +
                        'VOICEOVER (Screen Reader):\n' +
                        '• Press Cmd+F5 to enable\n' +
                        '• Full screen reader with navigation';
                } else if (userAgent.includes('firefox')) {
                    message = '📖 Firefox Reader View & Voice:\n\n' +
                        'READER VIEW:\n' +
                        '• Click Reader icon (📄) in address bar\n' +
                        '• Or press F9\n' +
                        '• Includes text-to-speech in reader mode\n\n' +
                        'TEXT-TO-SPEECH:\n' +
                        '• In Reader View, click headphone icon\n' +
                        '• Narrate button reads content aloud\n' +
                        '• Adjust speed and voice in settings\n\n' +
                        'EXTENSIONS:\n' +
                        '• "Read Aloud" extension for full TTS';
                } else if (userAgent.includes('edg')) {
                    message = '📖 Edge Immersive Reader & Voice:\n\n' +
                        'IMMERSIVE READER:\n' +
                        '• Press F9 or Ctrl+Shift+U\n' +
                        '• Click book icon in address bar\n\n' +
                        'TEXT-TO-SPEECH (Built-in):\n' +
                        '• In Immersive Reader, click Play button\n' +
                        '• Adjust voice, speed, and reading preferences\n' +
                        '• Highlight text as it reads\n\n' +
                        'READ ALOUD:\n' +
                        '• Right-click page > Read aloud\n' +
                        '• Or: Settings > Read aloud (Ctrl+Shift+U)';
                } else if (userAgent.includes('chrome')) {
                    message = '📖 Chrome Reading & Voice Options:\n\n' +
                        'READER MODE:\n' +
                        '• Install "Reader Mode" extension\n' +
                        '• Or use accessibility widget (Option+A)\n\n' +
                        'TEXT-TO-SPEECH:\n' +
                        '• Install "Read Aloud" extension\n' +
                        '• Or "Natural Reader" for TTS\n' +
                        '• Select text > right-click > Read aloud\n\n' +
                        'CHROMEVOX (Screen Reader):\n' +
                        '• Settings > Accessibility > ChromeVox\n' +
                        '• Full screen reader for Chrome';
                } else {
                    message = '📖 Browser Reader View & Voice:\n\n' +
                        'READER VIEW:\n' +
                        '• Look for Reader icon (📄) in address bar\n' +
                        '• Removes distractions, improves readability\n\n' +
                        'TEXT-TO-SPEECH:\n' +
                        '• Check browser settings for read aloud\n' +
                        '• Look for accessibility or reading options\n' +
                        '• Consider browser extensions for TTS\n\n' +
                        'SCREEN READERS:\n' +
                        '• Most browsers support system screen readers\n' +
                        '• Check accessibility settings';
                }

                alert(message);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return null;
}
