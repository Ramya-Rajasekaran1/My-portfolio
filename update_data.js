const fs = require('fs');
let data = fs.readFileSync('src/data/projects/gen-ai-inclusivity.ts', 'utf8');

// Replace all bullet asterisks with hyphens
data = data.replace(/^\s*\*\s/gm, '                - ');
data = data.replace(/"\*\s/g, '"- ');

// Specifically for Key Findings numbers, use tags << >>
data = data.replace(/\*\*92\.1% task completion\*\*/g, '<<92.1% task completion>>');
data = data.replace(/\*\*72\.4%\*\*/g, '<<72.4%>>');
data = data.replace(/\*\*1 in 5 users\*\*/g, '<<1 in 5 users>>');
data = data.replace(/\*\*40\.8%\*\*/g, '<<40.8%>>');
data = data.replace(/\*\*18\.4%\*\*/g, '<<18.4%>>');
data = data.replace(/\*\*Gemini – 2\.02 min\*\*/g, '<<Gemini – 2.02 min>>');
data = data.replace(/\*\*ChatGPT – 40\.8%\*\*/g, '<<ChatGPT – 40.8%>>');
data = data.replace(/\*\*Copilot – 30\.3%\*\*/g, '<<Copilot – 30.3%>>');
data = data.replace(/\*\*ChatGPT – 92\.1%\*\*/g, '<<ChatGPT – 92.1%>>');
data = data.replace(/\*\*ChatGPT – 7\.9%\*\*/g, '<<ChatGPT – 7.9%>>');
data = data.replace(/\*\*Gemini – 27\.6%\*\*/g, '<<Gemini – 27.6%>>');
data = data.replace(/\*\*Gemini – 2\.09 min\*\*/g, '<<Gemini – 2.09 min>>');

// Replace remaining bold asterisks with [[ ]]
data = data.replace(/\*\*(.*?)\*\*/g, '[[$1]]');

// Remove any lingering * symbols anywhere
data = data.replace(/\*/g, '');

fs.writeFileSync('src/data/projects/gen-ai-inclusivity.ts', data);
