<?php

function logout($user_id, $access_token) {

    require('../script/connect.php');

    $revoke_token_query = 'UPDATE tbl_users SET access_token = NULL WHERE user_id = :user_id';  
    $revoke_token_set = $pdo->prepare($revoke_token_query);
    $revoke_token_set->execute(
        array(
            ':user_id' => $user_id
            )
    );

    return true;
}

$response = logout($_POST['user_id'], $_POST['access_token']);

echo $response;

?>