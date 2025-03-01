<?php

use App\Http\Controllers\APIController;
use Illuminate\Support\Facades\Route;



Route::post('/upload-image', [APIController::class, 'productImgVal']);
