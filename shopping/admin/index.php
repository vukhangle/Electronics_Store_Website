<?php
session_start();
error_reporting(0);
include("include/config.php");
if(isset($_POST['submit']))
{
	$username=$_POST['username'];
	$password=md5($_POST['password']);
$ret=mysqli_query($con,"SELECT * FROM admin WHERE username='$username' and password='$password'");
$num=mysqli_fetch_array($ret);
if($num>0)
{
$extra="home.php";//
$_SESSION['alogin']=$_POST['username'];
$_SESSION['id']=$num['id'];
$host=$_SERVER['HTTP_HOST'];
$uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
header("location:http://$host$uri/$extra");
exit();
}
else
{
$_SESSION['errmsg']="Invalid username or password";
$extra="index.php";
$host  = $_SERVER['HTTP_HOST'];
$uri  = rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
header("location:http://$host$uri/$extra");
exit();
}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Đăng nhập Admin</title>
	<link type="text/css" href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="css/theme.css" rel="stylesheet">
	<link type="text/css" href="images/icons/css/font-awesome.css" rel="stylesheet">
	<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>
	<!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script> -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>

	<div class="navbar navbar-fixed-top ">
		<div class="navbar-inner" style="width:100%">
			<div class="container">
				 <!-- <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>  -->

			  	<a class="brand" href="index.php">
			  		Đăng nhập Admin
			  	</a>

				<!-- <div class="nav-collapse collapse navbar-inverse-collapse">
				 -->
					<ul class="nav pull-right">

						<li>
							<a href="http://localhost/shopping/index.php">
								Quay lại cổng thông tin
							</a>
						</li>

						

						
					</ul>
				</div><!-- /.nav-collapse -->
			</div>
		</div><!-- /navbar-inner -->
	</div><!-- /navbar -->


<section class="vh-100" style="background-color: #dbdde3;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
			<img src="/admin/images/pexels-btgl-♡-3894157.jpg"
                alt="" class="img-fluid" style="border-radius: 1rem 0 0 1rem; background-color: rgb(35, 106, 199);" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form class="form-vertical" method="post">
						<div class="module-head" style="background-color: #4aa1ff; color:#000000;">
							<h3 >Đăng nhập</h3>
						</div>
						<span style="color:red;" ><?php echo htmlentities($_SESSION['errmsg']); ?><?php echo htmlentities($_SESSION['errmsg']="");?></span>
						<div class="module-body" style="background: #e1e1e1">
							<div class="control-group">
								<div class="controls row-fluid">
									<input class="span12" type="text" id="inputEmail" name="username" placeholder="Tên tài khoản" style="background-color: #f3f5f7;">
								</div>
							</div>
							<div class="control-group">
								<div class="controls row-fluid">
						<input class="span12" type="password" id="inputPassword" name="password" placeholder="Mật khẩu" style="background-color: #f3f5f7;">
								</div>
							</div>
						</div>
						<div  class="module-foot" style="background: #aeaeaf;">
							<div class="control-group">
								<div class="controls clearfix">
									<button type="submit" class="btn btn-primary pull-right" name="submit">Đăng nhập</button>
									
								</div>
							</div>
						</div>
					</form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

	<div class="footer">
		<div class="container">
			 

			<b class="copyright">&copy; 2023 Shop thiết bị điện tử  |</b> Đã đăng ký bản quyền.
		</div>
	</div>
	<script src="scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
</body>