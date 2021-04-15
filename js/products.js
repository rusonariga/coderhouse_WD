function productsDisplay(param) {
    if (window.location.href.indexOf(param)!=-1){
        $(`.${param}`)
            .siblings(".product__category").toggle().end()
            .next().toggle();
        if(param.indexOf("jam")!=-1){
            $(".seasons").toggle();
        }
    }
    
}

$(document).ready(function(){
    if(location.hash!=""){
        productsDisplay(location.hash.slice(1));
    }

    $(".product__category").on({
        click: function(){
            $(this).siblings(".product__category").toggle().end()
            .next().toggle();
            if ($(this).is(".jam")){
                if ( $(".seasons").css('display') == 'none' || $(".seasons").css("visibility") == "hidden"){
                    if($("#summerSelector").children().is(".active")){
                        $("#summer").show();
                    }
                    if($("#autumnSelector").children().is(".active")){
                        $("#autumn").show();
                    }
                    if($("#winterSelector").children().is(".active")){
                        $("#winter").show();
                    }
                    if($("#springSelector").children().is(".active")){
                        $("#spring").show();
                    }
                    $(".jam__display").show(500);
                }
                else {
                    $(".jam__display").hide(500);
                }
                $(".seasons").toggle();

            }
            if ($(this).is(".bakery")){
                $(".bakery__display").toggle(500);
            }
            if ($(this).is(".deli")){
                $(".deli__display").toggle(500);
            }
        },    

    
    });
    $(".quantity__more").click(function(){
        if(parseInt($(this).siblings(".quantity__number").text())==9){return;}
        else{
            var x=parseInt($(this).siblings(".quantity__number").text())+1;
            $(this).siblings(".quantity__number").text(x);

        };

    })

    $(".quantity__less").click(function(){
        if(parseInt($(this).siblings(".quantity__number").text())==1){return;}
        else{
            var x=parseInt($(this).siblings(".quantity__number").text())-1;
            $(this).siblings(".quantity__number").text(x);

        };

    })

    $(".quantity__add").click(function(){
        alert($(this).siblings(".quantity__number").text()+" unidades de "+$(this).parent().siblings(".card-body").children(".card-title").text()+" agregadas al carrito.")

    })

    var triggerTabList = [].slice.call(document.querySelectorAll('.seasonsTabs span'))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)
    
      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    });



    $(".summerSelector").click(function(){
        $("#autumn, #winter, #spring").hide(100).end().removeClass("seasonSelected");
        $("#summer").toggle(500).end().addClass("seasonSelected");

    });

    $(".autumnSelector").click(function(){
        $("#summer, #winter, #spring").hide(100).end().removeClass("seasonSelected");
        $("#autumn").toggle(500).end().addClass("seasonSelected");;

    });

    $(".winterSelector").click(function(){
        $("#autumn, #summer, #spring").hide(100).end().removeClass("seasonSelected");
        $("#winter").toggle(500).end().addClass("seasonSelected");;

    });

    $(".springSelector").click(function(){
        $("#autumn, #winter, #summer").hide(100).end().removeClass("seasonSelected");
        $("#spring").toggle(500).end().addClass("seasonSelected");;

    });
  
  });