<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = ['name', 'description'];
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:Y-m-d H:i:s',
        ];
    }
    public function Permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'role_permission');
    }
}
