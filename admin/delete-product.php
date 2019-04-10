<?php

function deleteProduct($product_id) {
    
    include('./script/connect.php');

    $delete_product_query = 'DELETE FROM tbl_products WHERE product_id = :product_id';
    $delete_product_set = $pdo->prepare($delete_product_query);
    $delete_product_set->execute(
        array(
            ':product_id' => $product_id
        )
    );

    $delete_category_record_query = 'DELETE FROM products_categories WHERE product_id = :product_id';
    $delete_category_record_set = $pdo->prepare($delete_category_record_query);
    $delete_category_record_set->execute(
        array(
            ':product_id' => $product_id
        )
    );

    echo "Product removed from the database";

}

$response = deleteProduct($_POST["product_id"]);

echo $response;

?>