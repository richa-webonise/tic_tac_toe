$(document).ready(function(){
   $("body").css({"background":"../images/background.jpg","background-repeat":"no-repeat","background-position":"center"});
   $("button").css({"position":"relative","top":"2px"}) ;
   $("table").css({"width":"200px","height":"200px","position":"relative","top":"20px"});
   $("table").hide();
   
   $("button").click(function(){
       $("table").hide();
       $("td").text("");
       $("table").show(1000);
        var flag=false;
        $("div").data("won_x","Congratulations..!! Player 1.. You Won... :)");
        $("div").data("won_o","Congratulations..!! Player 2.. You Won... :)");
        
        $("td").click(function(){
            var id=$(this).attr("id");            
                        if($(this).text()=="") 
                            {
                                if(flag==false)
                                  {
                                      $(this).text("X");
                                      flag=true;
                                      if((($("#cell1").text()==$("#cell2").text()) && ($("#cell1").text()==$("#cell3").text()) && ($("#cell1").text()!="")) || (($("#cell1").text()==$("#cell4").text()) && ($("#cell1").text()==$("#cell7").text()) && ($("#cell1").text()!="")) || (($("#cell1").text()==$("#cell5").text()) && ($("#cell1").text()==$("#cell9").text()) && ($("#cell1").text()!="")) || (($("#cell2").text()==$("#cell5").text()) && ($("#cell2").text()==$("#cell8").text()) && ($("#cell2").text()!="")) || (($("#cell3").text()==$("#cell6").text()) && ($("#cell3").text()==$("#cell9").text()) && ($("#cell3").text()!="")) || (($("#cell3").text()==$("#cell5").text()) && ($("#cell3").text()==$("#cell7").text()) && ($("#cell3").text()!="")) || (($("#cell4").text()==$("#cell5").text()) && ($("#cell4").text()==$("#cell6").text()) && ($("#cell4").text()!="")) || (($("#cell7").text()==$("#cell8").text()) && ($("#cell7").text()==$("#cell9").text()) && ($("#cell7").text()!="")))
                                      {
                                        alert($("div").data("won_x"));
                                        $("td").text("");
                                      }
                                  }
                                else
                                {
                                    $(this).text("O");
                                    flag=false;
                                    if((($("#cell1").text()==$("#cell2").text()) && ($("#cell1").text()==$("#cell3").text()) && ($("#cell1").text()!="")) || (($("#cell1").text()==$("#cell4").text()) && ($("#cell1").text()==$("#cell7").text()) && ($("#cell1").text()!="")) || (($("#cell1").text()==$("#cell5").text()) && ($("#cell1").text()==$("#cell9").text()) && ($("#cell1").text()!="")) || (($("#cell2").text()==$("#cell5").text()) && ($("#cell2").text()==$("#cell8").text()) && ($("#cell2").text()!="")) || (($("#cell3").text()==$("#cell6").text()) && ($("#cell3").text()==$("#cell9").text()) && ($("#cell3").text()!="")) || (($("#cell3").text()==$("#cell5").text()) && ($("#cell3").text()==$("#cell7").text()) && ($("#cell3").text()!="")) || (($("#cell4").text()==$("#cell5").text()) && ($("#cell4").text()==$("#cell6").text()) && ($("#cell4").text()!="")) || (($("#cell7").text()==$("#cell8").text()) && ($("#cell7").text()==$("#cell9").text()) && ($("#cell7").text()!="")))
                                    {
                                      alert($("div").data("won_o"));
                                      $("td").text("");
                                    }
                                }                                    
                                }                                                        
           });                           
       });
   });
