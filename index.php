<?
ob_start();

$links["my resume"] = "resume";
$links["my blog"] = "blog";
$links["my android apps"] = "android";
$links["my portfolio"] = "portfolio";
//$links["contact me"] = "blog/contact";


$colors["yellow"] = "ffb515";
	$color_strings[] = 'yellow';
$colors["orange"] = "ff5c00";
	$color_strings[] = 'orange';
$colors["magenta"] = "a9014b";
	$color_strings[] = 'magenta';
$colors["red"] = "e33100";
	$color_strings[] = 'red';
$colors["blue"] = "2daebf";
	$color_strings[] = 'blue';
$colors["green"] = "91bd09";
	$color_strings[] = 'green';

$colorsArray = array();
foreach ($colors as $thisColor => $hex){
	$colorsArray[] = $thisColor;
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
  "http://www.w3.org/TR/html4/loose.dtd">

<html>
	<head>
		<meta name="author" content="Nathan Radebaugh">
		<link href='http://fonts.googleapis.com/css?family=Molengo' rel='stylesheet' type='text/css'>
		<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js' type='text/javascript'></script>
		<title>Nate Radebaugh</title>
		<style type="text/css">
			* {
				padding: 0px;
				margin: 0px;
				white-space: nowrap;
			}
			body {
				background-color: #191919;
				color: #FFFFFF;
				font-family: 'Molengo', arial, serif;
			}
			center {
				padding: 0px;
				margin: 0px;
			}
			#name {
				padding-top: 5px;
				border-top: 3px solid #F2F2F2;
				font-size: 100px;
				line-height: 60px;
				border-bottom: 15px solid #F2F2F2;
				width: 800px;
			}
			a {
				border-bottom: 5px solid #F2F2F2;
				color: #FFFFFF;
				text-decoration: none;
				font-size: 30px;
				margin: 5px;
				padding: 3px;
			}
			a:hover {
				border-bottom: 11px solid #F2F2F2;
			}
			#links,
			#links li {
				text-align: center;
				list-style: none;
				display: inline;
				padding: 0px;
				margin: 0px;
			}

			<?
			foreach ($color_strings as $color)
			{
			?>.bg-<?=$color?> {
				background-color: #<?=$colors[$color]?>;
			}
			.fg-<?=$color?> {
				color: #<?=$colors[$color]?>;
			}
			<?
			}
			?>

			#header {
				margin-bottom: 1px;
			}
			#header div {
				display: inline-block;
				vertical-align: bottom;
			}
			#header > div:nth-child(4n+1){
				height: 50px;
				width: 30px;
			}
			#header > div:nth-child(4n){
				background-color: #FFFFFF;
				height: 75px;
				width: 40px;
			}
			#header > div:nth-child(4n+2){
				background-color: #F2F2F2;
				height: 25px;
				width: 20px;
			}
			#header > div:nth-child(4n+3){
				background-color: #8C8C8B;
				height: 150px;
				width: 50px;
			}

			#footer {
				margin-top: 1px;
			}
			#footer div {
				display: inline-block;
			}
			#footer > div:nth-child(4n+1){
				background-color: #403F3D;
				height: 100px;
				width: 30px;
			}
			#footer > div:nth-child(4n){
				background-color: #FFFFFF;
				height: 150px;
				width: 40px;
			}
			#footer > div:nth-child(4n+2){
				background-color: #F2F2F2;
				height: 50px;
				width: 20px;
			}
			#footer > div:nth-child(4n+3){
				height: 300px;
				width: 50px;
			}
			
			#watermark {
				position: absolute;
				right: 10px;
				bottom: 10px;
				color: #8C8C8B;
			}
		</style>
	</head>
	<body>
		<center>
		<div id="header">
<?
			for ($i = 0; $i < 15; $i++)
			{
				echo "\t\t\t<div>&nbsp;</div>\n";
			}
		?>
		</div>
		<div id="name">
			<center>Hi, I'm Nate.</center>
			<ul id="links">
<?
				foreach ($links as $name => $destination)
				{
					echo "\t\t\t\t<li><a href='$destination'>$name</a></li>\n";
				}
				?>
			</ul>
		</div>
		<div id="footer">
<?
			for ($i = 0; $i < 15; $i++)
			{
				echo "\t\t\t<div>&nbsp;</div>\n";
			}
		?>
		</div>	
		</center>
		<div id="watermark">
			<small>Created lovingly by <span class="color">Nathan Radebaugh</span>.</small>
		</div>

		<script type="text/javascript">
			var colors = new Array();
<?
			$i=0;
			foreach ($color_strings as $color)
			{
				echo "\t\t\t".'colors['.$i++.'] = "'.$color.'";'."\n";
			}
			?>

			var color = colors[Math.floor(Math.random()*<?=count($colors)?>)];

			$('#header > div:nth-child(4n+1)').addClass('bg-'+color);
			$('#footer > div:nth-child(4n+3)').addClass('bg-'+color);

			$('a').hover(function(){
				$(this).addClass('fg-'+color);
			});
			$('a').mouseout(function(){
				$(this).removeClass();
			});
		</script>
	</body>
</html>

<?
$page_contents = ob_get_contents();
ob_end_flush();

$fh = fopen('index.html', 'w') or die('can\'t open index.html for writing');
fwrite($fh, $page_contents);
fclose($fh);
