<?php
$json = file_get_contents('http://vsada.new.antiqueplazamesa.com/cms/api/stores');
$stores = json_decode($json);

$fp = fopen('stores.json', 'w');
fwrite($fp, json_encode($stores));
fclose($fp);

echo('Got stores');
