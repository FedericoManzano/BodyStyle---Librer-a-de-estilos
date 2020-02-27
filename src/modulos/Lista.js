(function(){


    var inicializar = () => {
        $(".l-colapso > .lista-item").append("<i class='f-derecha'></i>");
        $(".l-colapso > .lista-item").append("<i class='f-abajo'></i>");
        $(".l-colapso > .lista-item .f-derecha").css("top", 13);
        $(".l-colapso > .lista-item .f-abajo").css("top", 13);
        $(".l-colapso > .lista-item .f-derecha").css("border-left","5px solid #000");
        $(".l-colapso > .lista-item .f-abajo").css("border-top","5px solid #000");
        $(".l-colapso > .lista-item .f-abajo").hide();
        $(".l-colapso > .desplegable").hide();

    }

    var desplegable = () => {
        $(".l-colapso .lista-item").click(function(){
            var desplegable = $($(this).data("target"))
            if($(desplegable).is(":visible")){
                $(this).children(".f-abajo").hide()
                $(this).children(".f-derecha").show()
                $(desplegable).slideUp(300)
            }else {
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                $(desplegable).slideDown(300)
            }
        })
    }


    var activo = () => {
        $(".activo .lista-item").click(function(){
            $(".activo .lista-item").css("background-color", "rgb(255, 255, 255)")
            $(this).css("background-color", "rgb(240, 240, 240)")
        })
    }


    var Lista = {
        iniciar: () => {   
            inicializar()
            desplegable()
            activo()
        }
    }

    window.Lista = Lista

})()

export default Lista