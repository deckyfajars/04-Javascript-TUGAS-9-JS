function objek(){
  var berita = {
    kota : "Bandung",
    status : "Waspada",
    wilayah : "kabupaten",
  }
  for (var x in berita){
    console.log(berita[x]);
  }
}

objek();
