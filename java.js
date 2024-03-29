$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");
    if ($("#messageState").is(":checked")) {
      $(".message")
        .removeClass("closed")
        .removeClass("no-anim")
        .addClass("openNor");
      $(".heart")
        .removeClass("closeHer")
        .removeClass("openedHer")
        .addClass("openHer");
      $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
      console.log("Abrindo");
    } else {
      $(".message").removeClass("no-anim").addClass("closeNor");
      $(".heart")
        .removeClass("openHer")
        .removeClass("openedHer")
        .addClass("closeHer");
      $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 2000);
      console.log("fechando");
    }
  });
  
  $(".message").on(
    "webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function (e) {
      console.log("Animation End");
      if ($(".message").hasClass("closeNor")) $(".message").addClass("closed");
      $(".message")
        .removeClass("openNor")
        .removeClass("closeNor")
        .addClass("no-anim");
    }
  );
  
  $(".heart").on(
    "webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function (e) {
      console.log("Animation End");
      if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
      else $(".heart").addClass("no-anim").removeClass("beating");
      $(".heart").removeClass("openHer").removeClass("closeHer");
    }
  );
  let randomise = () => {
  
    $("#hue1").val( Math.floor(Math.random() * 360) );
    $("#sat1").val( Math.floor(Math.random() * 360) );
    $("#hue2").val( Math.floor(Math.random() * 70) + 15 );
    $("#sat2").val( Math.floor(Math.random() * 70) + 15 );
    $("#grad").val( Math.floor(Math.random() * 10) + 20 );
    $("#gradoff").val( Math.floor(Math.random() * 20) + 40 );
    
    $(".custom").css({
      "--hue":  $("#hue1").val() + "deg",
      "--sat":  $("#sat1").val() + "%",
      "--hue2": $("#hue2").val() + "deg",
      "--sat2": $("#sat2").val() + "%",
      "--gradgap": $("#grad").val() + "%",
      "--gradoffset": $("#gradoff").val() + "%"
    });
  }
  
  setTimeout( () => {
    $("input[type=range]").on("change", (e) => {
      $(".custom").css({
        "--hue":  $("#hue1").val() + "deg",
        "--sat":  $("#sat1").val() + "%",
        "--hue2": $("#hue2").val() + "deg",
        "--sat2": $("#sat2").val() + "%",
        "--gradgap": $("#grad").val() + "%",
        "--gradoffset": $("#gradoff").val() + "%"
      });
      $("#app").css({
        "--blur": $("#blur").val() + "px"
      });
    });
  }, 1000 );
  
  $(".custom button").on("click", randomise);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function HexToHSL(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
  
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
  
      if(max == min){
          h = s = 0; // achromatic
      } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          
          h /= 6;
      }
  
      s = s*100;
      s = Math.round(s);
      l = l*100;
      l = Math.round(l);
      h = Math.round(360*h);
  
      return {h, s, l};
  }