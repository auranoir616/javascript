const A = ['kucing', 'anjing', 'ayam'];
const searchTerm = 'jin';

const searchResult = A.filter((item) => {
  return item.includes(searchTerm);
});

if (searchResult.length > 0) {
  console.log('Hasil pencarian:', searchResult[0]);
} else {
  console.log('Tidak ada hasil yang cocok.');
}
