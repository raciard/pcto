function toggleVote (id, upOrDown)  {
    if(upOrDown === 1){
        $(`#${id}`).children(".fa-arrow-up").toggleClass("fake-social")
        $(`#${id}`).children(".fa-arrow-down").removeClass("text-danger")

    }
    else{
        $(`#${id}`).children(".fa-arrow-down").toggleClass("text-danger")
        $(`#${id}`).children(".fa-arrow-up").removeClass("fake-social")

    }
}