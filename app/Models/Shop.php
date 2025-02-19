<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shop extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id', 'name', 'product_count', 'follower_count', 'rating', 'rating_count', 'response_rate'];
}
