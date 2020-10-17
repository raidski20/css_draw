function start_move() {
    var lights_parent = document.getElementsByClassName('lights-handler')[0]
    var fst_child = lights_parent.children[0]
    var scnd_child = lights_parent.children[1]
    var thrd_child = lights_parent.children[2]

    setTimeout(function () {
        fst_child.style.opacity = 1
        scnd_child.style.opacity = 0.1
    }, 2000)

    setTimeout(function () {
        fst_child.style.opacity = 0.1
        thrd_child.style.opacity = 1
        document.querySelector(".road .car").setAttribute("style", "animation: car_move 8s linear forwards; -webkit-animation: car_move 8s linear forwards;")
    }, 3000)
}