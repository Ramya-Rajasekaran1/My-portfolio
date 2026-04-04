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

// 4. Comparative UX Performance move below Data Analysis Post-Design
const perfStartStr = '{/* UX Performance Table */}';
const perfMarkerEndStr = '</section>';
const perfStart = content.indexOf(perfStartStr);

if (perfStart > -1) {
  const sectionContentStart = content.lastIndexOf('<section', perfStart);
  let sectionContentEnd = content.indexOf(perfMarkerEndStr, perfStart);
  if (sectionContentEnd > -1) {
    sectionContentEnd += perfMarkerEndStr.length;
    let perfBlock = content.substring(sectionContentStart, sectionContentEnd);
    
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

fs.writeFileSync(filepath, content);
console.log('Done!');
