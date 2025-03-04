function createXmasTree(height, ornament) {
    let tree = [];
   for(let line = 0; line < height; line++) {
          const leaves = ornament.repeat(line * 2 + 1);
          const spaces = '_'.repeat(height - line - 1);
          tree.push(spaces+leaves+spaces)
      }
      let trunkSpaces = "_".repeat(height-1);
      let trunkLine = trunkSpaces + "#" + trunkSpaces
      tree.push(trunkLine)
      tree.push(trunkLine)
    return tree.join('\n')
  }

  const tree2 = createXmasTree(3, '+')