// .map() digunakan untuk melakukan perulangan sambil mengecek/melakukan operasi terhadap setiap elemen array, lalu memberikan nilai balik berupa array baru tanpa mengubah nilai pada array yang lama.  MIRIP DENGEN FOR.EACH

// arr.map((value, index, array) => {
//   // kode program
// });

{
  let input = [100, 50, 60, 10];

  let output = input.map((item) => {
    return item / 10;
  });
  // let output = input.map(item => item/10); //di sederhanakan

  console.log(output);
  // Output [10, 5, 6, 1]

  console.log(input);
  // Output [100, 50, 60, 10] --> Nilai array pertama tidak berubah
}

{
  let makanan = ["Nasi", "Ayam", "Pisang"];

  // Buat kode kamu di bawah ini
  let gorengMakanan = makanan.map((item) => {
    return item + " Goreng";
  });
  console.log(gorengMakanan);
}
