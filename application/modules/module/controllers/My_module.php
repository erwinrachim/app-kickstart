<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class My_module extends CI_Controller
{

    public function index()
    {
        $this->load->render('my_module');
    }

}
