<?php

function login($user_email, $user_password){

    require('../script/connect.php');

    $check_exist_query = 'SELECT COUNT(*) FROM tbl_users WHERE user_email = :user_email';  
    $check_user_set = $pdo->prepare($check_exist_query);
    $check_user_set->execute(
        array(
            ':user_email' => $user_email
            )
    );

    if(($check_user_set->fetchColumn())>0) {

        $get_user_query = 'SELECT * FROM tbl_users WHERE user_email = :user_email AND user_password = :user_password';
        $get_user_set = $pdo->prepare($get_user_query);
        
        $get_user_set->execute(
            array(
                ':user_email' => $user_email,
                ':user_password' => $user_password
            )
        );

        while($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
            $id = $found_user['user_id'];
            $_SESSION['current_user'] = $found_user;
            $message = "Welcome!";
        }

        if(empty($id)) {
            $message = "Login Failed!";
            return json_encode($message);
        } 

    } else {
        $message = 'Login Failed!';
        return json_encode($message);
    }

    function generateAccessToken($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?';
        $charactersLength = strlen($characters);
        $accessToken = '';
        for ($i = 0; $i < $length; $i++) {
            $accessToken .= $characters[rand(0, $charactersLength - 1)];
        }
        return $accessToken;
    }

    $accessToken = generateAccessToken();
    $pdo->exec('UPDATE tbl_users SET access_token = "' . $accessToken . '" WHERE user_id = ' . $_SESSION['current_user']['user_id']);

    return json_encode([$message, $_SESSION['current_user']['user_id'], $_SESSION['current_user']['user_fname'], $accessToken]);
}

$response = login($_POST["user_email"], $_POST["user_password"]);

echo $response; 

?>