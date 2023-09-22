const inp = document.getElementById('val');
const select = document.getElementById('select');

function get() {
   console.log(inp.value);
   console.log(select.value);
   if (select.value === 'en') {
      console.log('all text in english');
   }
   if (select.value === 'uz') {
      console.log('barcha matn uzbek tilida');
   }
   if (select.value === 'ru') {
      console.log('Это все на английском языке');
   }
}