function huruf(karakter){
    if (karakter === 'a' ||
        karakter === 'i' ||
        karakter === 'u' ||
        karakter === 'e' ||
        karakter === 'o'
    ){
        console.log(karakter, 'merupakan huruf vokal')
    }
    else{
        console.log(karakter, 'merupakan huruf konsonan' )
    }

}

huruf('o')