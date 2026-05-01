const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const BASE_PATH_VAR = 'process.env.NEXT_PUBLIC_BASE_PATH';

const pathsToPrefix = [
    '/images/',
    '/work/',
    '/about/',
    '/contact/',
    '/portfolio/',
    '/branding/',
    '/brand/',
    '/Home/',
    '/safehome/',
    '/tracking-quality-dashboard/',
    '/gen-ai/',
    '/leadership/',
    '/content-verify/'
];

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // 1. Handle string literals in quotes: "/images/..." or '/images/...'
            pathsToPrefix.forEach(p => {
                const escapedP = p.replace(/\//g, '\\/');
                
                // Double quotes
                const dqRegex = new RegExp(`(?<!\$\{${BASE_PATH_VAR} || ""\})"(${escapedP}[^"]*)"`, 'g');
                content = content.replace(dqRegex, (match, p1) => {
                    modified = true;
                    return `{\`\${${BASE_PATH_VAR} || ""}${p1}\`}`;
                });

                // Single quotes
                const sqRegex = new RegExp(`(?<!\$\{${BASE_PATH_VAR} || ""\})'(${escapedP}[^']*)'`, 'g');
                content = content.replace(sqRegex, (match, p1) => {
                    modified = true;
                    return `{\`\${${BASE_PATH_VAR} || ""}${p1}\`}`;
                });
                
                // Object properties or direct strings (no curly braces needed sometimes)
                // But in TSX, if it's an attribute, it needs {}. If it's a variable value, it doesn't.
                // This is tricky. Let's try to detect if we are inside a property assignment.
                const propRegex = new RegExp(`:\\s*["'](${escapedP}[^"']*)["']`, 'g');
                content = content.replace(propRegex, (match, p1) => {
                    modified = true;
                    return `: \`\${${BASE_PATH_VAR} || ""}${p1}\``;
                });
            });

            // 2. Handle template literals: `/work/${item.slug}`
            // Match `/work/ and prefix it
            const tlRegex = /`\/work\//g;
            if (content.match(tlRegex)) {
                content = content.replace(tlRegex, `\`\${${BASE_PATH_VAR} || ""}/work/`);
                modified = true;
            }
            
            // Special case for root "/"
            // Only replace if it's href="/" or src="/" or similar
            content = content.replace(/(href|src)=["']\/["']/g, (match, p1) => {
                modified = true;
                return `${p1}={\`\${${BASE_PATH_VAR} || ""}/\`}`;
            });

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
        }
    });
}

walk(srcDir);
console.log('Done updating paths.');
