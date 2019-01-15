<?php
/**
 * Created by PhpStorm.
 * User: W7
 * Date: 15.01.2019
 * Time: 7:18
 */
mylog(print_r($_POST,1),'$_POST');
mylog(print_r($_SERVER,1),'$_SERVER');

if (isset($_POST['action'])) {

} else {
	send_restaurant($_POST['data']);
}


function send_restaurant($data){
	$settings = array (
		'from_email'    =>  '',
		'from_name'     =>  'Сайт POWER FOOD',
		'to'            =>  'mail@yandex.ru',
		'subject'       =>  'Замовлення з меню ресторану',
		'headers'       =>  "Content-type: text/html; charset=utf-8 \r\n",
	);
	extract($settings);

	if( 1 == 1 ) {
		$message = '<p>У вас нове замовлення</p>
    					<h3>Деталі замовлення</h3>
				    <ul>
				      <li>Імя клієнта: ' .       $data['name_customer']           .'</li>
				      <li>Адреса доставки: ' .   $data['address_customer']        .'</li>
				      <li>будинок: .' .          $data['house']                   .'</li>
				      <li>квартира: ' .          $data['room']                    . '</li>
				      <li>Телефон: +38 ' .       $data['phone']                   . '</li>
				      <li>Продукт: ' .           $data['name_product']            . '</li>
				      <li>Вибір оплати: ' .      $data['payment']                 . '</li>
			      	  <li>Ціна: ' .              $data['price']                   . ' грн</li>
				    </ul>';

		$headers .= "From: " . $from_name . " <" . $from_email . ">\r\n"; //Наименование и почта отправителя
		mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	}
}

function mylog($content, $key = '', $count = 0) {
	$file = 'log.php';
	$doc = fopen($file, 'a');
	$key .= '   ---   ' . date("Y-m-d H:i:s");
	if ($doc) {
		if (!$count) file_put_contents($file, "{ //\t $key" .PHP_EOL , FILE_APPEND);
		//file_put_contents($file, PHP_EOL .print_r($content, 1), FILE_APPEND);
		file_put_contents($file, PHP_EOL . '====================' . date("H:i:s") . '=====================', FILE_APPEND);
		if (is_array($content)) {
			//mylog('Вывод массива:', $k);
			foreach ($content as $k => $v) {
				mylog('Вывод ключа массива: '.$k, $k, true);
				if (is_array($v)) {
					mylog($v, $k, true);
				} elseif (is_object($v)) {
					mylog($v, $k, true);
				} else {
					file_put_contents($file, PHP_EOL . $k . '=>' . $v, FILE_APPEND);
				}
			}
		} elseif (is_object($content)) {
			mylog('Вывод обьекта:', '', true);
			if (get_object_vars($content)) {
				foreach (get_object_vars($content) as $k => $v) {
					if (is_object($v)) {
						mylog($v, $k, true);
					} elseif (is_array($v)){
						mylog($v, $k, true);
					} else {
						file_put_contents($file, PHP_EOL . $k . '=>' . print_r($v, true), FILE_APPEND);
					}
				}
			}
			else {
				file_put_contents($file, PHP_EOL . 'class methods ' . ' => ' . PHP_EOL . '{' . PHP_EOL . print_r(get_class_methods($content),1) . PHP_EOL . '}'. PHP_EOL , FILE_APPEND);
				/*
				mylog('','Is static object');
				mylog(print_r(get_class_vars($content),1),'get_class_vars');
				mylog(print_r(get_class_methods($content),1),'get_class_methods');
				*/
			}
		} else {
			//mylog('', 'Не масив і не обєкт', true);
			file_put_contents($file, PHP_EOL . $content, FILE_APPEND);
		}
		if (!$count) file_put_contents($file, PHP_EOL . '}' . PHP_EOL , FILE_APPEND);
		fclose($doc);
	}
}