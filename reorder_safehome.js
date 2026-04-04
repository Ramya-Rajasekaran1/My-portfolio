const fs = require('fs');
const filepath = '/Users/adhi/Desktop/portfolio/src/components/projects/safehome.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Identify sections
const builtUXStart = content.indexOf('{/* ── BUILT FROM ZERO STRIP ── Moved here under flow diagram */}');
const builtUXEnd = content.indexOf('</section>', builtUXStart) + 10; // wait, builtUX is a div, actually. Let's see. 
// At line 1336 it is `{/* ── BUILT FROM ZERO STRIP ── Moved here under flow diagram */}` followed by a `<div style={{ background: "#0f0f0f"...`
// Ends at `</div>` before `{/* ── AWARDS / RELEASES ── */}`? Let's check where it ends.
const nextSectionBuiltUX = content.indexOf('{/* ──', builtUXStart + 10);
let builtUX = content.substring(builtUXStart, nextSectionBuiltUX);
content = content.substring(0, builtUXStart) + content.substring(nextSectionBuiltUX);

const problemStart = content.indexOf('{/* ── THE PROBLEM ── */}');
const problemEnd = content.indexOf('</section>', problemStart) + 10;
let problem = content.substring(problemStart, problemEnd);
content = content.substring(0, problemStart) + content.substring(problemEnd);

const painPointsStart = content.indexOf('{/* ── UX PAIN POINTS ── */}');
const painPointsEnd = content.indexOf('</section>', painPointsStart) + 10;
let painPoints = content.substring(painPointsStart, painPointsEnd);
content = content.substring(0, painPointsStart) + content.substring(painPointsEnd);

const objectivesStart = content.indexOf('{/* ── OBJECTIVES STRIP ── */}');
const nextSectionObj = content.indexOf('{/* ──', objectivesStart + 10);
let objectives = content.substring(objectivesStart, nextSectionObj);
content = content.substring(0, objectivesStart) + content.substring(nextSectionObj);

// Removes Visual Analysis
const visualStart = content.indexOf('<div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, alignItems: "center", marginBottom: 80 }}>');
if (visualStart > -1 && content.substring(visualStart, visualStart + 200).includes('Visual Analysis')) {
   const visualEnd = content.indexOf('</div>\n          <div style={{ position: "relative" }}>', visualStart);
   // wait, the grid div closes after the second child. 
   // It ends after `<span ...>Ref 01: FEMA Overlay Patterns</span></div></div></div>`
   // Basically, `</div>` three times.
}
// Using regex for Visual Analysis container:
content = content.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "1fr 1\.5fr", gap: 40, alignItems: "center", marginBottom: 80 \}\}>[\s\S]*?<img src="\/images\/safehome\/visual-analysis\.jpg"[\s\S]*?<\/div>[\s]*<\/div>[\s]*<\/div>/g, '');
// Let's also remove the `<h3>Visual Analysis</h3>` in case it didn't match perfectly. Actually it's inside that block.

// Remove USER JOURNEY & IA section
const userJourneyStart = content.indexOf('{/* ── USER FLOW ── */}');
const userJourneyEnd = content.indexOf('</section>', userJourneyStart) + 10;
if (userJourneyStart > -1) {
  content = content.substring(0, userJourneyStart) + content.substring(userJourneyEnd);
}

// 02 ROLE & IMPACT
// Actually, do I need to move it? It's currently at line 908. It's `{/* ── MY ROLE & IMPACT COMBINED ── */}`
const roleStart = content.indexOf('{/* ── MY ROLE & IMPACT COMBINED ── */}');
const roleEnd = content.indexOf('</section>', roleStart) + 10;
let role = content.substring(roleStart, roleEnd);
content = content.substring(0, roleStart) + content.substring(roleEnd);

// Find insertion point right after header
const headerEnd = content.indexOf('</header>') + 9;

// Insert everything in order:
// 1. Built UX (builtUX)
// 2. The Problem (problem)
// 3. UX Pain Points (painPoints)
// 4. Objectives (objectives)
// 5. Role & Impact (role)

const orderedContent = `\n
      ${builtUX}
      ${problem}
      ${painPoints}
      ${objectives}
      ${role}
`;

content = content.substring(0, headerEnd) + orderedContent + content.substring(headerEnd);

fs.writeFileSync(filepath, content);
console.log('Reordered SafeHome sections successfully!');
