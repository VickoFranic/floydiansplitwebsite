<?php

namespace FloydianSplit;

use \Twig_Loader_Filesystem;
use \Twig_Environment;

/**
* App
*/
class App
{
	/**
	 * Twig
	 * @param Twig $twig
	 */
	public $twig;

	public function __construct()
	{
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
		    'cache' => './cache',
		    'auto_reload' => true
		));

		return $twig;
	}
}