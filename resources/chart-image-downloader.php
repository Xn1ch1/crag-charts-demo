<?php

	http_response_code(500);

	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: POST");
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
	header('Content-Type: application/json; charset=utf-8');


    $img = $_POST['img'];

    $file = base64_to_jpeg($img, "image.png");

    http_response_code(200);
    echo json_encode([$file]);


    function base64_to_jpeg($base64_string, $output_file) {
        // open the output file for writing
        $ifp = fopen( $output_file, 'wb' ); 

        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $data = explode( ',', $base64_string );

        // we could add validation here with ensuring count( $data ) > 1
        fwrite( $ifp, base64_decode( $data[ 1 ] ) );

        // clean up the file resource
        fclose( $ifp ); 

        return $output_file; 
    }