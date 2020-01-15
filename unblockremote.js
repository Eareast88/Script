var body = $response.body;
body = '\/*\n@supported \n*\/\n' + body;

$done(body);
