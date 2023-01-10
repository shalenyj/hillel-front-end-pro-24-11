const form = document['user-register'];

function getMultiselectValue(select){
  const childrenAsArray =  Array.from(select.children);
  const selected = childrenAsArray.filter(el => el.selected).map(el => el.value)
  console.log(selected)
}

form.cities.addEventListener('change', event => getMultiselectValue(event.target) )