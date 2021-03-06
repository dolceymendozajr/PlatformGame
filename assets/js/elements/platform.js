function Platforms() {
    //Crear grupo de plataformas (Superior e inferior) y le asignamos la propiedad de que sea un cuerpo
    platforms = game.add.group();
    platforms.enableBody = true;

    // Creamos el piso y lo escalamos para que tome el ancho completo, además le asignamos la propiedad de que sea inamovible
    ground = platforms.create(0, game.world.height - 64, "ground");
    ground.body.immovable = true;

    // Creamos la plataforma principal para Donkey Kong
    mainPlatform = platforms.create(280, 100, "ground");
    mainPlatform.scale.setTo(0.3, 0.5);
    mainPlatform.body.immovable = true;
}

function marioWon(){
    if(mario.body.touching.down && score == "10"){
        donkey.kill();
        game.state.start("finish");
    }
}