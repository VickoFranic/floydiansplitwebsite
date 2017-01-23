<?php

namespace FloydianSplit;

use Facebook\Facebook;
use Facebook\Exceptions\FacebookResponseException;
use Facebook\Exceptions\FacebookSDKException;
use \Twig_Loader_Filesystem;
use \Twig_Environment;

/**
* App
*/
class App
{
	/**
	 * Facebook
	 * @param Facebook $fb
	 */
	public $fb;

	/**
	 * Twig
	 * @param Twig $twig
	 */
	public $twig;

	public function __construct()
	{
		// $this->fb = new Facebook([
		//   'app_id' => APP_ID,
		//   'app_secret' => APP_SECRET,
		//   'default_graph_version' => 'v2.5',
		// ]);

		// $this->fb->setDefaultAccessToken(ACCESS_TOKEN);

		$this->twig = $this->loadTwig();
	}

	/**
	 * Using Twig as template enginge
	 * @return Twig
	 */
	private function loadTwig() 
	{
		$loader = new Twig_Loader_Filesystem('./public/templates/');
		$twig = new Twig_Environment($loader, array(
		    'cache' => TWIG_CACHE_PROD,
		));

		return $twig;
	}

	/**
	 * Read last event data for Floydian Split from Facebook API
	 * @return GraphNode | last event node
	 */
	public function getLastEventForFloydians()
	{
		try {
		  $response = $this->fb->get('floydiansplit/events?fields=name,start_time,place&limit=1');

		} catch(FacebookResponseException $e) {
			$f = fopen("graph_error.txt", "a");
			fwrite($f, 'Graph returned an error: ' . $e->getMessage() . PHP_EOL);
			fclose($f);
		} catch(FacebookSDKException $e) {
			$f = fopen("fb_sdk_error.txt", "a");
			fwrite($f, 'Facebook SDK returned an error: ' . $e->getMessage() . PHP_EOL);
			fclose($f);
		}

		// Success
		$event = $response->getGraphEdge()->map(function($data) {
			return $data;
		});

		return $event[0];
	}
}