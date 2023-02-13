<?php
if (isset($_FILES['document'])) {
  $errors = [];
  $file_name = $_FILES['document']['name'];
  $file_size = $_FILES['document']['size'];
  $file_tmp = $_FILES['document']['tmp_name'];
  $file_type = $_FILES['document']['type'];
  $file_ext = strtolower(end(explode('.', $file_name)));

  $extensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"];

  if (!in_array($file_ext, $extensions)) {
    $errors[] = "This file extension is not allowed. Please choose a PDF, DOC, XLS, or PPT file.";
  }

  if ($file_size > 2097152) {
    $errors[] = 'File size must be less than 2 MB';
  }

  if (empty($errors)) {
    move_uploaded_file($file_tmp, "uploads/" . $file_name);
    echo "<embed src='uploads/" . $file_name . "' width='100%' height='800px'>";
  } else {
    foreach ($errors as $error) {
      echo $error . "<br>";
    }
  }
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document Upload and View</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Document Upload and View</h1>
    <form action="" method="post" enctype="multipart/form-data">
      <input type="file" name="document">
      <input type="submit" value="Upload">
    </form>
    <hr>
    <h2>Document Preview:</h2>
    <div id="preview">
      <?php
      if (!empty($file_name)) {
        echo "<embed src='uploads/" . $file_name . "' width='100%' height='800px'>";
      }
      ?>
    </div>
  </body>
</html>
