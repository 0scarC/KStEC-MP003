window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            if (player.velocity.y === 0) player.velocity.y = -20
            break
        case 'a':
        case 'ArrowLeft':
            keys.a.pressed = true
            break
        case 'd':
        case 'ArrowRight':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'a':
        case 'ArrowLeft':
            keys.a.pressed = false
            break
        case 'd':
        case 'ArrowRight':
            keys.d.pressed = false
            break
    }
})