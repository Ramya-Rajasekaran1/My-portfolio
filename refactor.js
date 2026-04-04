const fs = require('fs');
const filepath = '/Users/adhi/Desktop/portfolio/src/components/projects/gen-ai-inclusivity.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// 1. in RESEARCH ARTIFACTS add on the side the Platform-by-platform Feature Matrix section
const matrixStartStr = '{/* Feature Analysis */}';
const matrixEndStr = '{/* Heuristic Insights & Findings */}';
const p1Start = content.indexOf(matrixStartStr);
const p1End = content.indexOf(matrixEndStr);

if (p1Start > -1 && p1End > -1) {
  let matrixContent = content.substring(p1Start, p1End);
  // remove it from original location
  content = content.substring(0, p1Start) + content.substring(p1End);
  
  // replace the research artifacts grid layout
  const gridOldStart = '<div className="grid grid-cols-1 md:grid-cols-12 gap-6">';
  const artifactsIdx = content.indexOf(gridOldStart);
  if (artifactsIdx > -1) {
     const endArtifactsStr = '</div>\n                    </div>\n\n                    {/* Heuristic Insights & Findings */}';
     const endArtifactsIdx = content.indexOf(endArtifactsStr, artifactsIdx);
     if (endArtifactsIdx > -1) {
        let artifactsBlock = content.substring(artifactsIdx + gridOldStart.length, endArtifactsIdx).trim();
        artifactsBlock = artifactsBlock.replace(/md:col-span-8/g, 'xl:col-span-12');
        artifactsBlock = artifactsBlock.replace(/md:col-span-4/g, 'xl:col-span-12');

        const newGrid = `
<div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
    <div className="xl:col-span-5 space-y-6 flex flex-col">
        ${artifactsBlock}
    </div>
    <div className="xl:col-span-7">
        ${matrixContent}
    </div>
</div>
`;
        content = content.substring(0, artifactsIdx) + newGrid + content.substring(endArtifactsIdx);
     }
  }
}

// 2. HEURISTIC INSIGHTS update colors for these numbers 01 - 06
// Currently text-[#F4E5E9]/5 mb-6 group-hover:text-[#CC6D96]/10
content = content.replace(/className=\"text-6xl font-sans font-light tracking-tight  text-\[\#F4E5E9\]\/5 mb-6 group-hover:text-\[\#CC6D96\]\/10 transition-colors\"/g, 
  'className="text-6xl font-sans font-light tracking-tight text-[#CC6D96] mb-6 transition-colors"');

// 3. UX RESEARCH · ACCESSIBILITY · FLOW ANALYSIS - Text styling & formatting
content = content.replace(/<div className=\"flex items-center gap-2 text-\[12px\] font-mono uppercase tracking-widest text-\[\#A1979B\]\">\s*<div className=\"w-2 h-2 rounded-full bg-\[\#ff6b6b\]\" \/> Before — current experience\s*<\/div>/g, 
'<div className=\"flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.25em] text-[#A1979B]\"><div className=\"w-2 h-2 rounded-full bg-[#ff6b6b]\" /> BEFORE — CURRENT EXPERIENCE</div>');

content = content.replace(/<div className=\"flex items-center gap-2 text-\[12px\] font-mono uppercase tracking-widest text-\[\#A1979B\]\">\s*<div className=\"w-2 h-2 rounded-full bg-\[\#6bffb8\]\" \/> After — redesigned for accessibility\s*<\/div>/g, 
'<div className=\"flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.25em] text-[#A1979B]\"><div className=\"w-2 h-2 rounded-full bg-[#6bffb8]\" /> AFTER — REDESIGNED FOR ACCESSIBILITY</div>');

content = content.replace(/<h2 className=\"text-4xl md:text-6xl font-sans font-light tracking-tight font-extrabold text-\[\#F4E5E9\] tracking-tight leading-none bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent\">Before & After<\/h2>/g,
'<h2 className=\"text-4xl md:text-5xl font-sans font-light tracking-tight text-[#F4E5E9] leading-tight\">Before & After</h2>');

content = content.replace(/<p className=\"text-\[\#C4BFC1\] mt-6 max-w-2xl font-mono text-xs leading-relaxed tracking-wider\">/g, 
'<p className=\"text-lg md:text-xl font-sans font-light leading-relaxed text-[#C4BFC1] max-w-2xl mt-6\">');

// 4. Comparative UX Performance move below Data Analysis Post-Design
// Find the UX Performance Table block
const perfStartStr = '{/* UX Performance Table */}';
const perfMarkerEndStr = '</section>';
const perfStart = content.indexOf(perfStartStr);

if (perfStart > -1) {
  // we want to extract until the next </section> after the next div wrapper... wait, it is wrapped in an entire section or not?
  // Let's grab it more safely.
  const sectionContentStart = content.lastIndexOf('<section', perfStart);
  let sectionContentEnd = content.indexOf(perfMarkerEndStr, perfStart);
  if (sectionContentEnd > -1) {
    sectionContentEnd += perfMarkerEndStr.length;
    let perfBlock = content.substring(sectionContentStart, sectionContentEnd);
    
    // Check if it's the right section
    if (perfBlock.includes('UX Performance')) {
      content = content.substring(0, sectionContentStart) + content.substring(sectionContentEnd);
      
      const targetStr = '{/* Data Analysis after Design Update */}';
      const targetStart = content.indexOf(targetStr);
      if (targetStart > -1) {
         let targetEnd = content.indexOf('</section>', targetStart);
         if (targetEnd > -1) {
             targetEnd += '</section>'.length;
             content = content.substring(0, targetEnd) + '\n\n' + perfBlock + '\n' + content.substring(targetEnd);
         }
      }
    }
  }
}

// 5. THE FINAL TAKEAWAY
// Look for 
// {/* Methodology Extracted */} or the end boundary
const targetFooter = content.indexOf('{/* End Case Study */}');
if (targetFooter === -1) {
    // try to find the last tag of main
    const mainEnd = content.lastIndexOf('</main>');
    if (mainEnd > -1) {
        const finalTakeaway = `
                {/* FINAL TAKEAWAY */}
                <section className="space-y-10 pt-16 mt-16 border-t border-neutral-800/50 mb-32 bg-[#13151A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC6D96]/10 blur-[120px] pointer-events-none" />
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
                        <h2 className="text-[12px] font-mono uppercase tracking-[0.4em] text-[#CC6D96] mb-8">The Final Takeaway</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-sans font-light tracking-tight text-[#F4E5E9] leading-tight mb-8">
                            Accessibility is no longer a constraint—it is the defining competitive advantage of Generative AI.
                        </h3>
                        <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-[#C4BFC1]">
                            This case study positions accessibility not as compliance—but as the core operating system of human-centered AI.
                        </p>
                    </div>
                </section>
`;
        content = content.substring(0, mainEnd) + finalTakeaway + content.substring(mainEnd);
    }
}

fs.writeFileSync(filepath, content);
console.log('Refactor complete!');
