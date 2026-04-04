const fs = require('fs');
const filepath = '/Users/adhi/Desktop/portfolio/src/components/projects/gen-ai-inclusivity.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// 4. Comparative UX Performance move below Data Analysis Post-Design
const perfStartStr = '{/* Comparative UX Performance */}';
const perfMarkerEndStr = '</section>';
const perfStart = content.indexOf(perfStartStr);

if (perfStart > -1) {
  const sectionContentStart = content.lastIndexOf('<section', perfStart);
  let sectionContentEnd = content.indexOf(perfMarkerEndStr, perfStart);
  if (sectionContentEnd > -1) {
    sectionContentEnd += perfMarkerEndStr.length;
    let perfBlock = content.substring(sectionContentStart, sectionContentEnd);
    
    if (perfBlock.includes('Comparative UX Performance')) {
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
console.log('Done moving Comparative UX Performance!');
