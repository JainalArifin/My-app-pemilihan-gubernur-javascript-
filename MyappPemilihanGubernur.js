// WEEKLY PROJECT - Simple JavaScript App
// Create Your Own JavaScript App
// Jainal Arifin
// ------ Voting dan polling --------//

/* Menggunakan
1.) Kondisional (if-else)
2.) Looping (for/while)
3.) Tipe data Array
4.) Function
5.) Tipe data Object
*/

console.log('---- Pemilihan Gubernur Dan wakil Gubernur jateng -----------')
// menggunakan Object JSON
var gubernur = [{
// menggunakan ARRAY
    'NomorUrut' : '1',
    'ketua'     : 'jainal',
    'wakil'     : 'arif',
    'jabatan'   : 'CaGub - nomor urut 1',
 },
 {
    'NomorUrut' : '2',
    'ketua'     : 'ariel',
    'wakil'     : 'pasha',
    'jabatan'   : 'CaGub - nomor urut 2',
 },
 {
    'NomorUrut' : '3',
    'ketua'     : 'naga',
    'wakil'     : 'bonar',
    'jabatan'   : 'CaGub - nomor urut 3',
}];
  // menggunakan FOR
for(var i = 0; i < gubernur.length; i++){
  console.log('Nomor urut : '+gubernur[i].NomorUrut);
  console.log('Ketua      : '+gubernur[i].ketua);
  console.log('Wakil      : '+gubernur[i].wakil);
  console.log('Jabatan    : '+gubernur[i].jabatan);
  console.log('---------------------------------');
}
console.log('--- Penghitungan sementara yang masuk semua baru 60% ---');

console.log('Nomor urut 1 pasangan jainal arif : 30% ');
console.log('Nomor urut 2 pasangan ariel pasha : 50% ');
console.log('Nomor urut 2 pasangan Naga bonar  : 20% ');

console.log('--- Penghitungan suara 100% ---');

// Menggunakan Function
function perhitungan(point){
// Menggunakan kondisi if-else
  if(point === 40){
    console.log('Nomor urut: -1 menang dengan keunggulan 70%');
    console.log('Nomor urut: -2 20%');
    console.log('Nomor urut: -3 10%');
  }
  else if(point === 30){
    console.log('Nomor urut: -2 menang dengan keunggulan 80%');
    console.log('Nomor urut: -3 15%');
    console.log('Nomor urut: -1 5%');
  }
  else if(point === 50){
    console.log('Nomor urut: -3 menang dengan keunggulan 70%');
    console.log('Nomor urut: -1 20%');
    console.log('Nomor urut: -2 10%');
  }
  else{
    console.log('Pemilihan Gubernur seri dan di ulangi kembali');
  }
 
}

// PERHATIAN: isilah di point di bawah ini dengan pilihan angka : 40, 30, dan 50.
var point = 40;
perhitungan(point);

