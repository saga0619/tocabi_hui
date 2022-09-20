
function init_joystick() {
    // easal stuff goes hur
    var xCenter = 150;
    var yCenter = 150;
    var stage = new createjs.Stage('joystick');
  
    var psp = new createjs.Shape();
    psp.graphics.beginFill('#333333').drawCircle(xCenter, yCenter, 50);
  
    psp.alpha = 0.25;
  
    var vertical = new createjs.Shape();
    var horizontal = new createjs.Shape();
    vertical.graphics.beginFill('#ff4d4d').drawRect(150, 0, 2, 300);
    horizontal.graphics.beginFill('#ff4d4d').drawRect(0, 150, 300, 2);
  
    stage.addChild(psp);
    stage.addChild(vertical);
    stage.addChild(horizontal);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', stage);
    stage.update();
  
    var myElement = $('#joystick')[0];
  
    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);
  
    mc.on("panstart", function(ev) {
      var pos = $('#joystick').position();
      xCenter = psp.x;
      yCenter = psp.y;
      psp.alpha = 0.5;
      
      stage.update();
    });
    
    // listen to events...
    mc.on("panmove", function(ev) {
      var pos = $('#joystick').position();
  
      var x = (ev.center.x - pos.left - 150);
      var y = (ev.center.y - pos.top - 150);
      
      var coords = calculateCoords(ev.angle, ev.distance);
      
      psp.x = coords.x;
      psp.y = coords.y;
  
      $('#xVal').text('X: ' +coords.x);
      $('#yVal').text('Y: ' + (-1 * coords.y));
      
      psp.alpha = 0.5;
      
      stage.update();
    });
    
    mc.on("panend", function(ev) {
      psp.alpha = 0.25;
      createjs.Tween.get(psp).to({x:xCenter,y:yCenter},750,createjs.Ease.elasticOut);
    });
  }
  
  function calculateCoords(angle, distance) {
    var coords = {};
    distance = Math.min(distance, 100);  
    var rads = (angle * Math.PI) / 180.0;
  
    coords.x = distance * Math.cos(rads);
    coords.y = distance * Math.sin(rads);
    
    return coords;
  }
  
  
  