<?php

function filterByCategory($categories){

    include('script/connect.php');

    // fetching products filtered by category

    if (isset($categories)){
        $get_filtered_products = 
        '
        SELECT DISTINCT
            p.product_id,
            p.product_image,
            p.product_name,
            p.product_price,
            pc.category_id
        FROM
            tbl_products p
        JOIN products_categories pc ON p.product_id = pc.product_id
        WHERE
            p.product_id = pc.product_id AND pc.category_id = :category0';
        
        // in case user selects multiple categories
        // warning: for loop counter starts with $i = 1, not $i = 0!!!

        for($i = 1; $i < sizeof($categories); $i++) {
            $get_filtered_products .= ' OR pc.category_id = :category' . $i;
        }

        //echo $get_filtered_products; die();

        $get_products_set = $pdo->prepare($get_filtered_products);

        // dynamically binding parameters
        for($i = 0; $i < sizeof($categories); $i++) {
            $get_products_set->bindParam(':category'.$i, $categories[$i]); 
        }  
        $get_products_set->execute();
        

        $results = $get_products_set->fetchAll(PDO::FETCH_ASSOC);
        $filtered_products = json_encode($results);

        return $filtered_products;
    }

}

$response = filterByCategory($_GET["categories"]);

echo $response;

?>