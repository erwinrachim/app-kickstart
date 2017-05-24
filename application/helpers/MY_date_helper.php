<?php

defined('BASEPATH') OR exit('No direct script access allowed');

$timezone = config_item('default_timezone');
if ($timezone) {
    date_default_timezone_set($timezone);
}
