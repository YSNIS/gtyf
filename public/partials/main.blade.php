<div>
	<p ng-repeat="henchmen in henchmen">[[henchmen.name]] <span ng-click="delete(henchmen.id)">x</span></p>
	<form class="form-inline" ng-submit="createHenchmen()">
		<div class="form-group">
			<label for="henchmenName">Henchmen Name</label>
			<input type="text" class="form-control" id="henchmenName" placeholder="Henchmen Name" ng-model="henchmenName" required>
		</div>
		<button type="submit" class="btn btn-default">Create Henchmen</button>
	</form>
	
</div>