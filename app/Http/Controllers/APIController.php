<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class APIController extends Controller
{
    function productImgVal(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|dimensions:max_width=1080,max_height=1080|max:2048', //tính theo KB
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ]);
        };
        return response()->json([
            'success' => true,
        ]);
    }
}
