<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller
{

    public function index()
    {
        $data = array(
            'page_title' => 'Home'
        );
        $this->load->render('home', $data);
    }

}
