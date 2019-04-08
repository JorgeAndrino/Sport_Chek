<?php 

function addProduct($product_image, $product_name, $product_price, $product_available, $product_description, $category_id) {

    try {
        include('./script/connect.php');
        
        $file_type = pathinfo($product_image['name'], PATHINFO_EXTENSION);
        $accepted_types = array('gif', 'png', 'jpg', 'jpeg');
        if(!in_array($file_type, $accepted_types)){
            throw new Exception('Wrong file type!');
        }

        $target_path = '../images/products/' . $product_image['name'];
        if(!move_uploaded_file($product_image['tmp_name'], $target_path)) {
            throw new Exception('Failed to move the uploaded file');
        }

        $create_product_query = 'INSERT INTO `tbl_products` (`product_image`, `product_name`, `product_description`, `product_price`, `product_available`)';
        $create_product_query .= ' VALUES (:product_image, :product_name, :product_description, :product_price, :product_available)';
        $create_product_set = $pdo->prepare($create_product_query);
        $create_product_set->execute(
            array(
                ':product_image' => $product_image['name'],
                ':product_name' => $product_name,
                ':product_price' => $product_price,
                ':product_available' => $product_available,
                ':product_description' => $product_description
            )
        );

        $product_id = $pdo->lastInsertId();
        $assign_category_query = 'INSERT INTO `products_categories` (`product_id`, `category_id`) VALUES ("' . $product_id . '", :category_id)';
        $assign_category_set = $pdo->prepare($assign_category_query);
        $assign_category_set->execute(
            array(
                ':category_id' => $category_id
            )
        );
    } catch (Exception $e){
        $error = $e->getMessage();
        return $error;
    }

    return "Product created!";
}

$response = addProduct($_FILES["product_image"], $_POST["product_name"], $_POST["product_price"], $_POST["product_available"], $_POST["product_description"], $_POST["category_id"]);

echo $response;

?>