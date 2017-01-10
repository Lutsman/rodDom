<?
function minify_css($str){
    # remove comments first (simplifies the other regex)
    $re1 = <<<'EOS'
(?sx)
  # quotes
  (
    "(?:[^"\\]++|\\.)*+"
  | '(?:[^'\\]++|\\.)*+'
  )
|
  # comments
  /\* (?> .*? \*/ )
EOS;

    $re2 = <<<'EOS'
(?six)
  # quotes
  (
    "(?:[^"\\]++|\\.)*+"
  | '(?:[^'\\]++|\\.)*+'
  )
|
  # ; before } (and the spaces after it while we're here)
  \s*+ ; \s*+ ( } ) \s*+
|
  # all spaces around meta chars/operators
  \s*+ ( [*$~^|]?+= | [{};,>~+] | !important\b ) \s*+
|
  # spaces right of ( [ :
  ( [[(:] ) \s++
|
  # spaces left of ) ]
  \s++ ( [])] )
|
  # spaces left (and right) of :
  \s++ ( : ) \s*+
  # but not in selectors: not followed by a {
  (?!
    (?>
      [^{}"']++
    | "(?:[^"\\]++|\\.)*+"
    | '(?:[^'\\]++|\\.)*+' 
    )*+
    {
  )
|
  # spaces at beginning/end of string
  ^ \s++ | \s++ \z
|
  # double spaces to single
  (\s)\s+
EOS;

    $str = preg_replace("%$re1%", '$1', $str);
    return preg_replace("%$re2%", '$1$2$3$4$5$6$7', $str);
}


if (isset($_GET['css'])) {

$css_list = array(
	'../css/reset.css',
	'../fancybox/jquery.fancybox.css',
	'../css/owl.carousel.css',	
  '../../css/_fonts.css', 
  '../css/animate.css', 
  '../css/style.css', 
);
$result = '';
foreach ($css_list as $css) {
	$result .= minify_css(preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!','',preg_replace('/ +/',' ',str_replace(array("\r","\n","\t"),'',file_get_contents($css)))));
}
file_put_contents($base.'compile.css', $result);

} elseif (isset($_GET['js'])) {

$js_list = array(
  '../js/jquery-1.9.1.min.js',
  //'../js/device.min.js',
  '../js/forms.js',
  '../js/jquery.maskedinput.min.js',
  '../fancybox/jquery.fancybox.pack.js',
  '../js/jquery.validate.min.js',
  '../js/smooth_scroll.js',
  '../js/owl.carousel.js',
  '../js/wow.js',
  '../js/jquery.cookie.js',
  '../js/js.js',
  '../js/timer.js',
);
$result = '';
foreach ($js_list as $js) {
  $result .=  preg_replace('#^\s*//.+$#m','',file_get_contents($js));
}
file_put_contents('compile.js', $result);

} else {

$css_list = array(
	'../css/reset.css',
	'../fancybox/jquery.fancybox.css',
	'../css/owl.carousel.css',	
  '../../css/_fonts.css', 
  '../css/animate.css', 
  '../css/style.css', 
);
$result = '';
foreach ($css_list as $css) {
	$result .= minify_css(preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!','',preg_replace('/ +/',' ',str_replace(array("\r","\n","\t"),'',file_get_contents($css)))));
}
file_put_contents($base.'compile.css', $result);


$js_list = array(
  '../js/jquery-1.9.1.min.js',
  //'../js/device.min.js',
  '../js/forms.js',
  '../js/jquery.maskedinput.min.js',
  '../fancybox/jquery.fancybox.pack.js',
  '../js/jquery.validate.min.js',
  '../js/smooth_scroll.js',
  '../js/owl.carousel.js',
  '../js/wow.js',
  '../js/jquery.cookie.js',
  '../js/js.js',
  '../js/timer.js',
);
$result = '';
foreach ($js_list as $js) {
  $result .=  preg_replace('#^\s*//.+$#m','',file_get_contents($js));
}
file_put_contents('compile.js', $result);

}
