<?php

function checkSession($user_id, $access_token) {

    require('../script/connect.php');

    $check_session_query = 'SELECT access_token FROM tbl_users WHERE user_id = :user_id';  
    $check_session_set = $pdo->prepare($check_session_query);
    $check_session_set->execute(
        array(
            ':user_id' => $user_id
            )
    );

    $results = $check_session_set->fetchAll(PDO::FETCH_ASSOC);

    if($results[0]['access_token'] != $access_token) {
        return false;
    } else {
        return true;
    }
    
}

$response = checkSession($_POST['user_id'], $_POST['access_token']);

echo $response;

?>