const inventory=[
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ];
  
  function organizeInventory(inventory) {
    // Code here111
    const inventorySet = new Map();
    inventory.forEach(({name, category, quantity}) => {
      if(!inventorySet.has(category)) {
        // console.log("category",category)
        // const quantitySumed = inventorySet.get(category)[name] ;
        inventorySet.set(category, new Map([[name, quantity]]));
      } else {
        const categoryMap = inventorySet.get(category);

        categoryMap.set(name,  (categoryMap.get(name) || 0) + quantity);
      }
    })
    
    const result = {};
    inventorySet.forEach((categoryMap, category) => {
      result[category] = Object.fromEntries(categoryMap);
    })
    return result
  }
  
  console.log(organizeInventory(inventory));
  const resultado  = organizeInventory(inventory)
  // resultado.forEach(item => console.log("item",item))