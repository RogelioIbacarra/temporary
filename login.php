<?php
    include("config.php");
    $user = isset($_POST['user']) ? $_POST['user'] : 'Invalid username.';
    $pass = isset($_POST['pass']) ? $_POST['pass'] : 'No password';

    //echo $user . " ".$pass."\n";

    if (empty($user)){
        echo $pass . 'Invalid username.';
    } elseif (empty($pass)){
        echo $user . ': Password is empty';
    } elseif ($user != "" && $pass != ""){
        // echo "huehue";
        $con;
        if ($mysqli -> connect_errno) {
            echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
            exit();
        } else{
            $sql = "SELECT COUNT * FROM staff_users WHERE username =".$user.", password=".$pass;
            $result = $mysqli_query($con, $sql);
            
            if ($result ==1) {
                header("Location:View.php");
                exit();
            } else{
                echo "Invalid username or password.";
            }
        }
    } else{
        echo "lol mali";
    }
?>