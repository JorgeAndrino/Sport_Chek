<?php

function readAll(){

    include('script/connect.php');

    // fetching all categories

    $get_all_categories = 'SELECT * FROM tbl_categories';
    $get_categories_set = $pdo->prepare($get_all_categories);
    $get_categories_set->execute();    

    $results = $get_categories_set->fetchAll(PDO::FETCH_ASSOC);
    $all_categories = json_encode($results);

    // fetching all products

    $get_all_products = 'SELECT product_id, product_image, product_name, product_price FROM tbl_products';
    $get_products_set = $pdo->prepare($get_all_products);
    $get_products_set->execute();    

    $results = $get_products_set->fetchAll(PDO::FETCH_ASSOC);
    $all_products = json_encode($results);

    return [$all_categories, $all_products];

}

$response = json_encode(readAll());

echo $response;

?>