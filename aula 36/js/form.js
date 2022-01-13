class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("j é um bom nome");
        title.position(130,0);
        var input = createInput("Nome");
        input.position(130,160);
        
        var button = createButton('Entrar');
        button.position(150,200);

        var msg = createElement('h4');
        msg.position(130,160);

        button.mousePressed(function() {
            input.hide();
            button.hide();

            var name = input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            msg.html("bom dia, o sol ja nasceu la na fazendinha! "+name)
        })
    }
}