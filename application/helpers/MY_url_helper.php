<?php

defined('BASEPATH') OR exit('No direct script access allowed');

function base_url($uri = '', $protocol = NULL)
{
    $cached = true;
    // ignore external link
    if (preg_match('/^https?:\/\//', $uri)) {
        $cached = false;
    }
    // ignore ext except .js and .css
    if (preg_match('/(?<!\.js)(?<!\.css)$/', $uri)) {
        $cached = false;
    }
    // add query param
    if ($cached) {
        if (file_exists($uri)) {
            $uri .= (preg_match('/\?/', $uri) ? '&' : '?') . "_v=" . md5_file($uri);
        }
    }
    return get_instance()->config->base_url($uri, $protocol);
}
