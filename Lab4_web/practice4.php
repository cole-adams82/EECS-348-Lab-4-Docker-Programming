<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$size = isset($_POST['size']) ? (int)$_POST['size'] : 0;
?>
<!DOCTYPE html>
<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <title>EECS 348 Lab Three Practice Four</title>
	  <style>
		body { font-family: Arial, sans-serif; margin: 24px; }
		table { border-collapse: collapse; margin-top: 16px; }
		th, td { border: 1px solid #333; padding: 6px 10px; text-align: right; }
		th { background: #f0f0f0; }
	  </style>
	</head>
	<body>
	  <h1><span style="color:blue;">EECS</span> <span style="color:red;">348</span> | Lab 3 — Practice 4</h1>

	  <form action="practice4.php" method="post">
		Size of the multiplication table:
		<input type="text" name="size" required>
		<input type="submit" value="Submit Query">
	  </form>

	<?php if ($size > 0): ?>
	  <h2>Multiplication Table (1 to <?php echo $size; ?>)</h2>
	  <table>
		<tr>
		  <th>&times;</th>
		  <?php for ($c=1; $c<=$size; $c++): ?>
			<th><?php echo $c; ?></th>
		  <?php endfor; ?>
		</tr>
		<?php for ($r=1; $r<=$size; $r++): ?>
		  <tr>
			<th><?php echo $r; ?></th>
			<?php for ($c=1; $c<=$size; $c++): ?>
			  <td><?php echo $r*$c; ?></td>
			<?php endfor; ?>
		  </tr>
		<?php endfor; ?>
	  </table>
	<?php endif; ?>
	</body>
</html>