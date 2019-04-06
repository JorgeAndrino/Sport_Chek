<?php

function readIndividualProduct($product_id) {

    include('script/connect.php');

    // fetching individual product

    if (isset($product_id)){
        $get_individual_product = 
        '
        SELECT DISTINCT
            p.product_id,
            p.product_image,
            p.product_name,
            p.product_description,
            p.product_price,
            p.product_available
        FROM
            tbl_products p
        WHERE
            p.product_id = :product_id
        ';

        $get_product_set = $pdo->prepare($get_individual_product);
        $get_product_set->execute(
            array(
                ':product_id' => $product_id
            )
        );    

        $results = $get_product_set->fetchAll(PDO::FETCH_ASSOC);
        $individual_products = json_encode($results);

        return $individual_products;
    }

}

$response = readIndividualProduct($_GET["product_id"]);

echo $response;

?>