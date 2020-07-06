$("#filtros-content, #outros-content").hide();
$("[data-content]").click(function(){
    var target = $(this).data("target");
    var content = $(this).data("content");
    if(!$(target).hasClass("show") || $("#"+content).css("display") == "none"){
        $(target).removeClass("collapse").addClass("collapsing");
        setTimeout(function(){
            $(target).removeClass("collapsing").addClass("collapse").addClass("show");
            $("#filtros-content, #outros-content").hide();
            $("#"+content).show();
            if(content == "filtros-content"){
                $("#busca").focus();
            }
        }, 300);
    }else{
        $(target).removeClass("show");
    }
});

$("[data-answer]").click(function(){
    var question = $(this).data("answer");
    $("[data-answer]").addClass("text-muted");
    $(this).removeClass("text-muted");
    $("[data-question]").removeClass("featured-green");
    $("[data-question]").each(function(index, item){
        $(item).html($(item).data("question"));
    });
    $("[data-question='"+question+"']").addClass("featured-green").html("<i class='fa fa-check'></i>");
});