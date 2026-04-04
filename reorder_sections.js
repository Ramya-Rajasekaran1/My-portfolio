const fs = require('fs');
const filePath = '/Users/adhi/Desktop/portfolio/src/components/projects/safehome.tsx';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Find SafeHomeProject component start
const compStart = lines.findIndex(l => l.includes('export function SafeHomeProject'));

function find(pattern, after = compStart) {
  for (let i = after; i < lines.length; i++) {
    if (lines[i].includes(pattern)) return i;
  }
  throw new Error('Not found: ' + pattern);
}

// Section marker line indices (0-indexed)
const HERO = find('── HERO ──');
const OBJ = find('── OBJECTIVES STRIP ──');
const PROB = find('── THE PROBLEM ──');
const ROLE = find('── MY ROLE ──');
const UX_INT = find('── DESIGN DECISIONS ──');
const PAIN = find('── UX PAIN POINTS ──');
const FLOW = find('── USER FLOW ──');
const BUILT = find('── BUILT FROM ZERO');
const FOUND = find('── WORKSHOP & DESIGN SYSTEM ──');
const VIS = find('── VISION ──');
const CNST = find('── CONSTRAINTS ──');
const REFL = find('── REFLECTION ──');
const WHAT = find('── EXPANDABLE: WHAT I LED ──');
const FOOT = find('── FOOTER ──');

// Find </main> after footer
let mainClose = -1;
for (let i = FOOT; i < lines.length; i++) {
  if (lines[i].includes('</main>')) { mainClose = i; break; }
}

console.log('Markers found:', { HERO, OBJ, PROB, ROLE, UX_INT, PAIN, FLOW, BUILT, FOUND, VIS, CNST, REFL, WHAT, FOOT, mainClose });

// All section starts in current file order
const allStarts = [HERO, OBJ, PROB, ROLE, UX_INT, PAIN, FLOW, BUILT, FOUND, VIS, CNST, REFL, WHAT, FOOT].sort((a,b) => a-b);

// Extract section: from its marker to just before the next marker, trimming trailing blanks
function section(start) {
  const idx = allStarts.indexOf(start);
  const nextStart = idx < allStarts.length - 1 ? allStarts[idx + 1] : mainClose;
  let sec = lines.slice(start, nextStart);
  while (sec.length > 0 && sec[sec.length - 1].trim() === '') sec.pop();
  return sec;
}

// Also need to capture: between HERO end and first section after hero
// There's a comment "MOVED: BUILT FROM ZERO..." between OBJ and PROB — skip it

const preamble = lines.slice(0, HERO); // everything before hero marker
const heroSec = section(HERO);
const objSec = section(OBJ);
const probSec = section(PROB);
const roleSec = section(ROLE);
const uxIntSec = section(UX_INT);
const painSec = section(PAIN);
const flowSec = section(FLOW);
const builtSec = section(BUILT);
const foundSec = section(FOUND);
const visSec = section(VIS);
const cnstSec = section(CNST);
const reflSec = section(REFL);
const whatSec = section(WHAT);
const footSec = section(FOOT);
const postamble = lines.slice(mainClose); // </main> to end

// --- Apply label modifications ---

// Helper: replace text in a section's lines
function modify(sec, findStr, replaceStr) {
  return sec.map(l => l.includes(findStr) ? l.replace(findStr, replaceStr) : l);
}

// 1. Problem: keep "01 THE PROBLEM" — no change
const modProb = [...probSec];

// 2. Pain Points: add "02 UX PAIN POINTS" label before the h3
let modPain = [...painSec];
// Remove the divider that was before this section (it's captured at the start)
if (modPain[0] && modPain[0].includes('height: 1')) {
  modPain.shift(); // remove divider line
}
// Find the <div> after the comment and the <section> start, insert label
const painSectionIdx = modPain.findIndex(l => l.includes('<section'));
if (painSectionIdx !== -1) {
  // Find position after the opening grid div to insert label before the image column
  const painGridIdx = modPain.findIndex(l => l.includes('gridTemplateColumns: "1.2fr'));
  if (painGridIdx !== -1) {
    // Insert label span before the grid div
    modPain.splice(painGridIdx, 0,
      '        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>02 UX PAIN POINTS</span>'
    );
  }
}

// 3. Built from Zero: add "03 BUILT FROM ZERO" label
let modBuilt = [...builtSec];
const builtH2Idx = modBuilt.findIndex(l => l.includes('Built UX from zero'));
if (builtH2Idx !== -1) {
  modBuilt.splice(builtH2Idx, 0,
    '            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>03 BUILT FROM ZERO</span>'
  );
}

// 4. Role & Impact: change "02" to "04"
let modRole = modify([...roleSec], '02 ROLE & IMPACT', '04 ROLE & IMPACT');

// 5. Objectives: remove the individual obj nums' labels to just show titles, add "05 OBJECTIVES" header
let modObj = [...objSec];
// Remove the old "MOVED:" comment if it's included
modObj = modObj.filter(l => !l.includes('MOVED: BUILT FROM ZERO'));
// Change the comment marker
modObj = modify(modObj, '── OBJECTIVES STRIP ──', '── 05 OBJECTIVES ──');
// Change individual "OBJECTIVE {o.num}" to "OBJECTIVE {o.num}" — keep as is, they're sub-labels

// 6. UX Intervention: change "05" to "06"
let modUxInt = modify([...uxIntSec], '05 UX INTERVENTION', '06 UX INTERVENTION');

// 7+8. User Journey: update label to "07 USER JOURNEY & IA"
// The section header label says "USER JOURNEY & IA"
// Add "07" prefix — find the header-label text
let modFlow = [...flowSec];
const flowLabelIdx = modFlow.findIndex(l => l.includes('>USER JOURNEY &amp; IA<'));
if (flowLabelIdx !== -1) {
  modFlow[flowLabelIdx] = modFlow[flowLabelIdx].replace('>USER JOURNEY &amp; IA<', '>07 USER JOURNEY &amp; IA<');
}
// For section 08: the IAFlowDiagram is called inside this section, and it contains the Transformation section
// Add a "08" label before the IAFlowDiagram call
const iaCallIdx = modFlow.findIndex(l => l.includes('<IAFlowDiagram'));
if (iaCallIdx !== -1) {
  // Find the div that wraps the IAFlowDiagram (the one with marginTop: 100px)
  const iaWrapperIdx = modFlow.findIndex(l => l.includes('marginTop: "100px"'));
  if (iaWrapperIdx !== -1) {
    modFlow.splice(iaWrapperIdx, 0,
      '',
      '          <div style={{ marginBottom: 40 }}>',
      '            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>08 INTERACTIVE IA &amp; TRANSFORMATION</span>',
      '          </div>'
    );
  }
}

// 9. Constraints: change "10" to "09"
let modCnst = modify([...cnstSec], '10 CONSTRAINTS', '09 CONSTRAINTS');

// 10. Vision: change "09 THE VISION" to "10 THE VISION"
let modVis = modify([...visSec], '09 THE VISION', '10 THE VISION');

// 11. Reflection: keep "11 REFLECTION" — no change
const modRefl = [...reflSec];

// --- Removed sections ---
// Foundation (foundSec) — REMOVED
// What I Led (whatSec) — REMOVED

// --- Assemble in new order ---
const divider = ['', '      <div style={{ height: 1, background: "#272727" }} />', ''];

const newFile = [
  ...preamble,
  ...heroSec,
  '',
  // 01 THE PROBLEM
  ...modProb,
  ...divider,
  // 02 UX PAIN POINTS
  ...modPain,
  ...divider,
  // 03 BUILT FROM ZERO
  ...modBuilt,
  ...divider,
  // 04 ROLE & IMPACT
  ...modRole,
  ...divider,
  // 05 OBJECTIVES
  ...modObj,
  ...divider,
  // 06 UX INTERVENTION
  ...modUxInt,
  ...divider,
  // 07 USER JOURNEY & IA + 08 Interactive IA & Transformation
  ...modFlow,
  ...divider,
  // 09 CONSTRAINTS
  ...modCnst,
  ...divider,
  // 10 THE VISION
  ...modVis,
  ...divider,
  // 11 REFLECTION
  ...modRefl,
  '',
  // FOOTER
  ...footSec,
  ...postamble,
].join('\n');

fs.writeFileSync(filePath, newFile);
console.log('✅ Sections reordered successfully!');
console.log('New file length:', newFile.split('\n').length, 'lines');
