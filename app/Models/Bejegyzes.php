<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bejegyzes extends Model
{
    use HasFactory;
    public function tevekenyseg(){
        return $this->hasOne(Tevekenyseg::class, "tevekenyseg_id", "tevekenyseg_id");
    }
}
