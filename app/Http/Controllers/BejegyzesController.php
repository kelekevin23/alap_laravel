<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bejegyzes;

class BejegyzesController extends Controller
{
    public function index(Request $keres){
        $ujbejegyzes = new Bejegyzes();
        $ujbejegyzes->tevekenyseg_id = $keres->tevekenysegId;
        $ujbejegyzes->osztalyok_id = $keres->osztalyId;
        $ujbejegyzes->allapot = 0; 
        $ujbejegyzes->save();
        
    }
    public function index2(){
        $bejegyzes = response()->json(Bejegyzes::with("tevekenyseg")->get());
        return $bejegyzes;
    }

    public function index3($id){
        $bejegyzes = response()->json(Bejegyzes::with("tevekenyseg")->where("osztalyok_id", $id)->get());
        return $bejegyzes;
    }
}
