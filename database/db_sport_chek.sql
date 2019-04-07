-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 07, 2019 at 05:11 AM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sport_chek`
--

-- --------------------------------------------------------

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
CREATE TABLE IF NOT EXISTS `products_categories` (
  `product_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`product_category_id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products_categories`
--

INSERT INTO `products_categories` (`product_category_id`, `product_id`, `category_id`) VALUES
(1, 1, 1),
(2, 1, 4),
(3, 2, 1),
(4, 2, 4),
(5, 3, 1),
(6, 4, 1),
(7, 5, 1),
(8, 6, 1),
(9, 7, 2),
(10, 7, 4),
(11, 8, 2),
(12, 9, 2),
(13, 10, 2),
(14, 11, 2),
(15, 11, 3),
(16, 13, 3),
(17, 14, 3),
(18, 15, 3),
(19, 17, 3),
(20, 18, 4),
(21, 18, 1),
(22, 19, 4),
(23, 19, 1),
(24, 20, 4),
(25, 20, 2),
(26, 21, 5),
(27, 22, 5),
(28, 23, 5),
(29, 24, 5),
(30, 25, 5),
(31, 26, 6),
(32, 27, 6),
(33, 28, 6),
(34, 29, 6),
(35, 30, 6),
(36, 31, 7),
(37, 32, 7),
(38, 33, 7),
(39, 34, 7),
(40, 35, 7),
(41, 16, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

DROP TABLE IF EXISTS `tbl_categories`;
CREATE TABLE IF NOT EXISTS `tbl_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`category_id`, `category_name`) VALUES
(1, 'Men'),
(2, 'Women'),
(3, 'Kids'),
(4, 'Shoes & Footwear'),
(5, 'Gear'),
(6, 'Electronics'),
(7, 'Jerseys & Fan Wear');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

DROP TABLE IF EXISTS `tbl_products`;
CREATE TABLE IF NOT EXISTS `tbl_products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_image` varchar(55) COLLATE utf8_unicode_ci NOT NULL,
  `product_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `product_description` text COLLATE utf8_unicode_ci NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_available` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`product_id`, `product_image`, `product_name`, `product_description`, `product_price`, `product_available`) VALUES
(1, 'adidas-mens-ultraboost-19-running.png', 'adidas Men\'s Ultraboost 19 Running', 'The adidas Men’s Ultra Boost 19 Running Shoes combine comfort and performance to reinvent your run. They have a seamless adidas Primeknit 360 upper that’s engineered with motion weave technology to stretch and support your foot. Optimised Boost maximises energy return, and a 3D heel frame provides a locked-down fit that allows natural heel movement.', 250, 1),
(2, 'reebok-mens-sole-fury-running.png', 'Reebok Men\'s Sole Fury Running', 'Style at any speed. The Reebok Men\'s Sole Fury Running Shoes have a breathable mesh upper for ventilated comfort with each step. An asymmetrical lacing system gives you a snug fit and a standout look all through your run and beyond.', 130, 1),
(3, 'the-north-face-mens-harway-insulated-jacket.png', 'The North Face Men\'s Harway Insulated Jacket', 'This low profile jacket is lightly insulated to keep you comfortable and warm on cool days on the trail or in the city.', 78, 1),
(4, 'champion-mens-powerblend-fleece-full-zip-hoodie.png', 'Champion Men\'s Powerblend Fleece Full Zip Hoodie', 'With a loose and comfortable fit, the Champion Powerblend Full Zip Hoodie is the staple fleece sweater for your active closet. This classic piece has two hand pockets and a drawstring hood.', 60, 1),
(5, 'puma-mens-iconic-mcs-track-pants.png', 'PUMA Men\'s Iconic MCS Track Pants', 'MCS Track Pants first appeared in 1987 US dance clubs, ready to break it down when the perfect beat struck. It made a name for itself among MCS and hip-hop fans. It dominated the turntables. And today PUMA is bringing it back, because classics - whether they’re styles or songs - only get better with age.', 80, 1),
(6, 'saxx-mens-vibe-boxer-modern-fit.png', 'Saxx Men\'s Vibe Boxer Modern Fit', 'Fuss-Free Layering Is As Easy As Vibe. These Best-Selling Underwear Serve Up A Slim Fit In A Breathable, Moisture-Wicking Fabric That’s So Soft You Won’t Want To Take Them Off. Vibe Has No Fly To Keep Things Simple, And Our Widest Range Of Prints Means You’ll Find A Pair To Suit Whatever Vibe You’re Feeling.', 34, 1),
(7, 'puma-womens-rs-x-toys-trend-shoes.png', 'PUMA Women\'s RS-X Toys Trend Shoes', 'X marks extreme. Exaggerated. Remixed. The new RS-X tells stories of reinven-tion to the extreme. With a design inspired by collectible vinyl toys, RS-X Toys cel-ebrates the reinvention of toys in and beyond sneaker culture.', 150, 1),
(8, 'puma-womens-sg-x-puma-demi-sports-bra.png', 'PUMA Women\'s SG x PUMA Demi Sports Bra', 'The Selena Gomez collection has strength stitched into every piece. It’s inspired by, and designed for, the strong girl. Not strong in the sense of power, but strong in her passions, her expression, and strong in how she wants to leave her mark on the world. She’s compassionate, but uncompromising. Fearless, but approachable. She draws from the legacy of strong women before her to create the future she’s always wanted. You know, the strong women who challenged and questioned and carved out their own space, and who looked damn good while doing it. The PUMA x SG Demi bra is a classic sports bra you love to wear, but with a modern twist of mesh overlay to create a unique look. Pair with the PUMA x SG Tights for a comfortable, sporty look.', 110, 1),
(9, 'under-armour-pure-stretch-thong.png', 'Under Armour Pure Stretch Thong', 'Fitted: Next-to-skin without the squeeze. Super-soft stretch fabric delivers excellent all-day comfort for any activity. Laser cut edges offer a hem-free construction for a smoother, more flattering silhouette', 30, 1),
(10, 'adidas-originals-womens-classic-trefoil-hat.png', 'adidas Originals Women\'s Classic Trefoil Hat', 'With a perfectly pre-curved brim, this baseball cap comes ready to wear. It\'s made of comfortable cotton, with a large embroidered Trefoil front and centre. An adjustable strap in back lets you customise the fit.', 26, 1),
(11, 'nike-pro-womens-tights.png', 'Nike Pro Women\'s Tights', 'An ideal base layer for high-intensity training, the Nike Pro Women’s Tights deliver sweat-wicking power in a tight fitting silhouette that flatters your shape from hip to hem. The wide elastic waistband secures the fit while mesh panels at the lower legs enhance breathability.', 47, NULL),
(12, 'mckinley-boys-phoenix-youth-rain-pants.png', 'McKINLEY Boys\' Phoenix Youth Rain Pants', 'The McKINLEY Phoenix Rain Pant is a great garment for being active in wet weather. Using Aquamax Pro 3.3 technology, the Phoenix is waterproof, breathable and windproof to protect you from changing weather conditions. A wide elasticated waistband offers maximum comfort. When it gets dark, the reflective elements improve safety and visibility in low-light conditions.', 40, 1),
(13, 'dakine-kids-campus-mini-backpack.png', 'Dakine Kids\' Campus Mini Backpack', 'The Dakine Campus Mini offers features of our popular Campus pack scaled down to the elementary basics in a grom-friendly size. This 18L (1,100 cubic inch) kids’ backpack features a roomy main compartment with additional storage in the dual zippered front compartments, including the front cooler pocket for snacks and drinks. The Campus Mini features safety reflective details as well as a sternum strap to balance the load.', 50, 1),
(14, 'timberland-kids-chillberg-rr-wp.png', 'Timberland Kids\' Chillberg RR WP', 'Amply insulated for chilly days but still feather light, the Timberland Kids’ Chillberg RR WP Grade School Winter Boots are perfect for exploring winter wonderlands. The gusseted tongue and waterproof uppers on these grade school kids’ boots keep out snow, and the partially recycled rubber outsole grips icy terrain for safety.', 120, 1),
(15, 'adidas-kids-copa-zone.png', 'adidas Kids\' Copa Zone', 'Get serious over hardcore comfort with these socks. They go 90 minutes strong with allover CLIMALITE® sweat protection, a toe cooling channel and strategic cushioning. They are lightweight and close-fitting, so you don’t feel like there’s a field of cotton between you and the ball.', 7, 1),
(17, 'nike-youth-featherlight-hat.png', 'Nike Youth Featherlight Hat', 'The Nike Youth Featherlight Hat is the perfect accessory for any activity. Made from 100% polyester.', 14, 1),
(18, 'nike-mens-lebron-xvi-equality-basketball-shoes.png', 'Nike Men\'s LeBron XVI \"Equality\" Basketball Shoes', 'The Nike Men’s LeBron XVI \"Equality\" Basketball Shoes delivers a powerful combination of support, impact cushioning and instant responsiveness. The tongue and lacing allow for easy entry and a custom fit, so you can lock in when needed and wear loose when you want.', 245, 1),
(19, 'asics-mens-gel-moya-walking-shoes.png', 'ASICS Men\'s GEL Moya Walking Shoes', 'Get the support and comfort you need and the sleek styling you want with the ASICS Men’s GEL Moya Walking Shoes. Visible GEL® cushioning absorbs shock during impact phase to help protect joints and prevent injury. Its mesh upper and Ortholite® lasting provide exceptional breathability and comfort so you can keep pushing as long as you want.', 54, 1),
(20, 'under-armour-womens-aura-training-shoes.png', 'Under Armour Women\'s Aura Training Shoes', 'The Under Armour Women’s Aura Training Shoes features a breathable, lightweight mesh uppper with structured leather overlays to provide extra support during your training sessions. ', 80, 1),
(21, 'diadora-artico-26-fatbike.png', 'Diadora Artico 26\" Fatbike', 'Go places you’ve never biked before with the Diadora Artico fat bike. The 4.9” wide tires provide exceptional grip and floatation on all surfaces. The all-weather Artico performs great in muddy conditions and sandy soft terain but where it really shines is on your favorite winter snow covered trails. No more putting the bike away for the winter when you ride the versatile Artico.', 1200, 1),
(22, 'capix-villain-20-bmx-bike-2018.png', 'Capix Villain 20 BMX Bike 2018', 'Attack the city, park and local dirt trails on this black-masked whip while keeping it dialed with CAPIX’s new Integrated Gyro and acid wash stem and brake arms. For those hard working days where clean pedal strokes and resilience is required the Villain is mated CAPIXBMXCO.’s 9T Driver, 3pc Cro-Mo Crank, Gusseted top and bottom tube and a 14mm rear end.', 230, 1),
(23, 'easton-sapphire-12-baseball-bat.png', 'Easton Sapphire -12 Baseball Bat', 'Easton’s new Diamond Gem bat collection includes the Sapphire, which is crafted from 7050 aircraft grade aluminum for fast swing speeds and balanced performance. The -12 lightweight design helps players get the bat through the zone for more power on contact. Get ready to dominate with the Diamond Gem Collection.', 100, 1),
(24, 'the-north-face-recon-30l-day-pack.png', 'The North Face Recon 30L Day Pack', 'Stay organized while navigating from point A to B with the ultra-durable, 30-liter Recon daypack that’s had a sharp redesign to feature enhanced compartments and pockets, and improved suspension and materials for all-day comfort. 360 degrees of reflectivity keeps you safe during your commute, and mesh water bottle pockets make it easy to stay hydrated while you’re on the go. Carry your helmet in the stretch-front stash pocket for hands-free convenience at your destination.', 120, 1),
(25, 'mizuno-covert-2-batting-glove.png', 'Mizuno Covert 2 Batting Glove', 'The Mizuno Covert 2 Batting Glove features a Leather palm used for combination of great feel with durability. Mizuno AirMesh™ utilized for maximum flex and breathability. QuikAdjust™ wrist tab molded pull tab for secure fit. 3-D chrome logo applications for rich professional look. Compression molded neoprene wristband with PNP™ (Personalized Number Plate) for player customization option.', 30, NULL),
(26, 'fitbit-versa-lite-smart-watch.png', 'Fitbit Versa Lite Smart Watch', 'Open a world of possibilities with Fitbit Versa™ Lite Edition, the versatile, everyday smartwatch. With all the core fitness and smart features, vibrant colors and an easy one-button design, this watch will inspire you to live boldly and make your goals reality.', 200, 1),
(27, 'gopro-hero7-white-edition-action-camera.png', 'GoPro HERO7 White Edition Action Camera', 'Say hello to New GoPro HERO 7 White, the perfect partner on any adventure. It’s tough, tiny and totally waterproof so it can go wherever you do. An intuitive touch screen makes it simple to get great shots. Just swipe and tap. Use the photo timer to grab a sweet selfie. You can even shoot vertically then add your photos and videos right to your Instagram Story. Your shots move to the GoPro app automatically to share on the spot. From awesome moments to everyday experiences, capture the fun in creative new ways with GoPro HERO 7 White edition.', 270, 1),
(28, 'beats-solo3-wireless-headphones.png', 'Beats Solo3 Wireless Headphones', 'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.', 330, 1),
(29, 'garmin-fenix-5s-gps-watch.png', 'Garmin fēnix 5S GPS Watch', 'For serious athletes and adventurers who want to do more, not wear more – fēnix 5S is the perfect fit. It’s our premium multisport watch that offers full-size performance in a lighter, sleeker, more compact design. So you can beat yesterday with advanced features such as wrist-based heart rate, built-in activity profiles, navigation functions, and performance metrics that measure the effectiveness of your workout. It’s one smart sportwatch you can comfortably wear anywhere – office or outback – to keep pace with your active lifestyle.', 719, 1),
(30, 'apple-watch-series-4-gps-44mm-space-grey.png', 'Apple Watch Series 4 GPS, 44mm Space Grey', 'The New Apple Watch Series 4 is here! Fundamentally redesigned and re-engineered. The largest Apple Watch display yet. Built-in electrical heart sensor. New Digital Crown with haptic feedback. Low and high heart rate notifications. Fall detection and Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. You can use Walkie-Talkie and send messages. Listen to Apple Music1 and Apple Podcasts. And use Siri in all-new ways. Apple Watch Series 4 lets you do it all right from your wrist.', 560, 1),
(31, 'toronto-maple-leafs-rinkside-primary-1-hoodie.png', 'Toronto Maple Leafs Rinkside Primary 1 Hoodie', 'Your young one can support the Maple Leafs in style this season with the Youth Toronto Maple Leafs Rinkside Primary 1 Hoodie. It features awesome Leafs graphics that will make them stand out from the hockey crowd! Officially Licensed by the NHL.', 60, 1),
(32, 'calgary-flames-clear-puck-bank.png', 'Calgary Flames Clear Puck Bank', 'Make sure you’re supporting your Flames and grab this Calgary Flames Clear Puck Bank to complete the look! Perfect for saving up your cash for the next big Flames game. Officially Licensed by the NHL.', 25, 1),
(33, 'barcelona-2016-17-nike-mens-home.png', 'Barcelona 2016/17 Nike Men\'s Home', 'Support your favourite team with pride by wearing this officially licensed Barcelona Home Stadium Jersey', 80, 1),
(34, 'adidas-manchester-united-fc.png', 'adidas Manchester United FC', 'A week of physical and mental preparation on the training ground. A morning of pre-match fine-tuning. Man Utd players are ready. But sometimes it’s those fleeting moments before kick-off that lay the foundations for victory or defeat. This men’s anthem squad hoodie is modelled on the one Red Devils players wear when they line up before games. Made from comfortable cotton-touch fabric, this full-zip hoodie features an embroidered club badge and ribbed cuffs and hem.', 130, 1),
(35, 'toronto-raptors-womens-hoodie.png', 'Toronto Raptors Women\'s Hoodie', 'Elevate your array of inspired Toronto Raptors gear to the next level with this classic Toronto Raptors Women’s Touch Conference Hoodie. You’ll love showcasing your Raptors team spirit all season long in this quality apparel! We The North! Officially Licensed by the NBA.', 85, NULL),
(16, 'under-armour-pure-stretch-sheers-womens-thong.png', 'Under Armour Pure Stretch Sheers Women\'s Thong', 'UA Power In Pink® is donating $10 million to Johns Hopkins Kimmel Cancer centre to benefit breast health, innovation& education.', 14, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `user_email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_fname`, `user_email`, `user_password`) VALUES
(1, 'Jesus', 'admin@email.dog', 'password');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
