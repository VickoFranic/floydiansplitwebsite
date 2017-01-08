<?php 

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/variables.php';

use FloydianSplit\App;

$app = new App();

$event = $app->getLastEventForFloydians();

$template = $app->twig->load('index.twig.html');

echo $template->render(array( 'event' => $event->asJson() ));