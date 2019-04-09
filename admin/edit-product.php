<?php 

function editProduct($product_id, $product_image, $product_name, $product_price, $product_available, $product_description, $category_id) {

    try {
        include('./script/connect.php');

        if($product_image) {

            $file_type = pathinfo($product_image['name'], PATHINFO_EXTENSION);
            $accepted_types = array('gif', 'png', 'jpg', 'jpeg');
            if(!in_array($file_type, $accepted_types)){
                throw new Exception('Wrong file type!');
            }

            $target_path = '../images/products/' . $product_image['name'];
            if(!move_uploaded_file($product_image['tmp_name'], $target_path)) {
                throw new Exception('Failed to move the uploaded file');
            }

            $update_product_query = 'UPDATE tbl_products SET product_image = :product_image, product_name = :product_name, product_price = :product_price, product_available = :product_available, product_description = :product_description WHERE product_id = :product_id';
            $update_product_set = $pdo->prepare($update_product_query);
            $update_product_set->execute(
                array(
                    ':product_image' => $product_image['name'],
                    ':product_name' => $product_name,
                    ':product_price' => $product_price,
                    ':product_available' => $product_available,
                    ':product_description' => $product_description,
                    ':product_id' => $product_id
                )
            );

        } else {

            $update_product_query = 'UPDATE tbl_products SET product_name = :product_name, product_price = :product_price, product_available = :product_available, product_description = :product_description WHERE product_id = :product_id';
            $update_product_set = $pdo->prepare($update_product_query);
            $update_product_set->execute(
                array(
                    ':product_name' => $product_name,
                    ':product_price' => $product_price,
                    ':product_available' => $product_available,
                    ':product_description' => $product_description,
                    ':product_id' => $product_id
                )
            );

        }

        if($category_id) {
            $assign_category_query = 'UPDATE products_categories SET product_id = :product_id, category_id = :category_id WHERE product_id = :product_id';
            $assign_category_set = $pdo->prepare($assign_category_query);
            $assign_category_set->execute(
                array(
                    ':product_id' => $product_id,
                    ':category_id' => $category_id
                )
            );
        }
    } catch (Exception $e){
        $error = $e->getMessage();
        return $error;
    }

    return "Product updated!";
}

$product_image = array_key_exists("product_image", $_FILES) ? $_FILES["product_image"] : null;
$category_id = array_key_exists("category_id", $_POST) ? $_POST["category_id"] : null;

$response = editProduct($_POST["product_id"], $product_image, $_POST["product_name"], $_POST["product_price"], $_POST["product_available"], $_POST["product_description"], $category_id);

echo $response;

?>