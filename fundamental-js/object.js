const person = { //<< OBJECT
    nama: 'yanto',                /// properti
    umur: 25,                     /// properti
    email: 'yanto@example.com',   /// properti
    alamat: 'malang',             /// properti
    goldarah: ['A','B','O','AB'],  /// properti dengan array

    sayHello: function() {
      console.log('halo!');       /// properti
    }
  };
  console.log(person)    //akses semua properti objek
  console.log(person.nama);  // akses properti tertentu dari sebuah objek
  console.log(person['umur']); // selain . juga bisa dengan []
  console.log(person.goldarah[3]) // diakses dengan memasukkan urutan indeks yang diinginkan

  const propertyName = 'sayHello';
  console.log(person[propertyName]); // akses dengan variabel