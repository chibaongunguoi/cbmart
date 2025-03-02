<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['shop_id', 'cat_id', 'name', 'description', 'thumbnail', 'price', 'discount', 'quantity', 'rating', 'rating_count', 'response_rate'];
}
