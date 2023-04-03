<?php
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
  $target_dir = 'uploads/';
  $target_file = $target_dir . basename($_FILES['file']['name']);
  if (move_uploaded_file($_FILES['file']['tmp_name'], $target_file)) {
    // Update the profile picture file path
    $profilePicture = 'assets/profile.jpg';
    if (file_exists($profilePicture)) {
      unlink($profilePicture);
    }
    if (rename($target_file, $profilePicture)) {
      // Successfully uploaded and updated the profile picture
    } else {
      // Error updating the profile picture
    }
  } else {
    // Error uploading file
  }
}
?>
