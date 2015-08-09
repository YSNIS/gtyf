<?php 

namespace App\Models;

	use Illuminate\Database\Eloquent\Model;

	class Henchmen extends Model 
	{
		protected $table = 'henchmen';
		protected $fillable = ['name', 'group', 'date_hired'];


		public static function getHenchmen() {
			// return Henchmen::all();
			return 'poops';
		}

	}

?>