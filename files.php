<?php
header('Content-Type: application/json');

$dir = 'files/';
$allowed_extensions = array('pdf', 'jpg', 'png');
$files = array_diff(scandir($dir), array('..', '.'));
$filtered_files = array_filter($files, function ($file) use ($allowed_extensions) {
  return in_array(pathinfo($file, PATHINFO_EXTENSION), $allowed_extensions);
});
echo json_encode($filtered_files);
?>
