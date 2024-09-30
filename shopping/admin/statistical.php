<?php 

$servername = "localhost";
$username = "root";
$password = "";
$database = "shopping";
// define('DB_SERVER','localhost');
// define('DB_USER','root');
// define('DB_PASS' ,'');
// define('DB_NAME', 'shopping');
// $con = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
// Tạo kết nối
$conn = mysqli_connect($servername, $username, $password, $database);


// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối không thành công: " . mysqli_connect_error());
}

$sql3 = "SELECT COUNT(*) AS so_luong FROM products Where category = 3";
$sql4 = "SELECT COUNT(*) AS so_luong FROM products Where category = 4";
$sql5 = "SELECT COUNT(*) AS so_luong FROM products Where category = 5";
$sql6 = "SELECT COUNT(*) AS so_luong FROM products Where category = 6";
$sql24= "SELECT COUNT(*) AS so_luong FROM products Where category = 24";
$sql25= "SELECT COUNT(*) AS so_luong FROM products Where category = 25";
$sql28= "SELECT COUNT(*) AS so_luong FROM products Where category = 28";
$sql29= "SELECT COUNT(*) AS so_luong FROM products Where category = 29";
$result3= mysqli_query($conn, $sql3);
$result4 = mysqli_query($conn, $sql4);
$result5 = mysqli_query($conn, $sql5);
$result6 = mysqli_query($conn, $sql6);
$result24 = mysqli_query($conn, $sql24);
$result25 = mysqli_query($conn, $sql25);
$result28 = mysqli_query($conn, $sql28);
$result29 = mysqli_query($conn, $sql29);


// Kiểm tra và lấy giá trị đếm
if ($result3) {
    $row3 = mysqli_fetch_assoc($result3);
    $row4 = mysqli_fetch_assoc($result4);
	$row5 = mysqli_fetch_assoc($result5);
	$row6 = mysqli_fetch_assoc($result6);
	$row24 = mysqli_fetch_assoc($result24);
	$row25 = mysqli_fetch_assoc($result25);
	$row28 = mysqli_fetch_assoc($result28);
	$row29 = mysqli_fetch_assoc($result29);
    $dienthoai = $row3['so_luong'];
	$laptops = $row4['so_luong'];
	$maylanh = $row5['so_luong'];
	$camera = $row6['so_luong'];
	$dongho = $row24['so_luong'];
	$tivi = $row25['so_luong'];
	$maygiat = $row28['so_luong'];
	$tulanh = $row29['so_luong'];
    // echo "Số lượng bản ghi trong danh mục là: " . $dienthoai;
	
} else {
    echo "Lỗi truy vấn: " . mysqli_error($conn);
}
// $result =1;
mysqli_close($conn);

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link type="text/css" href="css/theme.css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<style>
	.col-12.mt-5 {
    display: flex;
    justify-content: space-around;
}
</style>
    <title >Thống kê</title>
  </head>

  <body>
    <div class="row mt-5">
		<div class="container" >
			<div >
				<h5 style="    font-size: 2.35rem;">THỐNG KÊ SẢN PHẨM</h5>
				<div class="col-12 mt-5">
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">ĐIỆN THOẠI </h5>
					<p class="card-text">Tổng số điện thoại đang có trên hệ thống: </p>
					<a href="#" class="btn btn-primary"><?php echo $dienthoai; ?> Điện thoại </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body"  style="    background: #00ffde8c;">
					<h5 class="card-title">LAPTOPS</h5>
					<p class="card-text">Tổng số laptops đang có trên hệ thống: </p>
					<a href="#" class="btn btn-primary"><?php echo $laptops; ?> Laptops </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">MÁY LẠNH</h5>
					<p class="card-text">Tổng số máy lạnh đang có trên hệ thống: </p>
					<a href="#" class="btn btn-primary"><?php echo $maylanh; ?> máy lạnh </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">CAMERA</h5>
					<p class="card-text">Tổng số camera đang có trên hệ thống: </p>
					<a href="#" class="btn btn-primary"><?php echo $camera ?> Camera</a>
				</div>
				</div>
				</div>
				<div class="col-12 mt-5">
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">ĐỒNG HỒ</h5>
					<p class="card-text">Tổng số đồng hồ đang có trên hệ thống:</p>
					<a href="#" class="btn btn-primary"><?php echo $dongho ?> Đồng hồ </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">TIVI</h5>
					<p class="card-text">Tổng số tivi đang có trên hệ thống: </p>
					<a href="#" class="btn btn-primary"><?php echo $tivi ?> Tivi </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">MÁY GIẶT</h5>
					<p class="card-text">Tổng số máy giặt đang có trên hệ thống:</p>
					<a href="#" class="btn btn-primary"><?php echo $maygiat ?> Máy giặt </a>
				</div>
				</div>
				<div class="card" style="margin: 5px;">
				<div class="card-body" style="    background: #00ffde8c;">
					<h5 class="card-title">TỦ LẠNH</h5>
					<p class="card-text">Tổng số tủ lạnh đang có trên hệ thống:</p>
					<a href="#" class="btn btn-primary"><?php echo $tulanh ?> Tủ lạnh</a>
				</div>
				</div>
				</div>
				
			</div>
		</div>
	</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>