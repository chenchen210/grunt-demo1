$(function(){
  var $width=$("#width"),
      $height=$("#height"),
      $calculate=$("#calculate"),
      $perimeter=$("#perimeter"),
      $area=$("#area");
  
  $calculate.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());

    var p=2*(w+h),
        a=w*h;
    $('#perimeter').val(p),
    $('#area').val(a);
  })

})
;function Rectangle(width, height) {
    var w = Number(width),
              h = Number(height);

    this.area = function() {
          return w * h;
            
    };

    this.perimeter = function() {
          return 2 * (w + h);
            
    };

}
