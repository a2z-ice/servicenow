//Workflow -> Operations -> Workflow Operations Dashboard
//Workflow -> Live Workflow -> All Context
//Workflow -> Workflow Editor
//System Security ->  Users and Groups -> User or Groups or Roles
// reports -> View/Run

//--UI Action--

function addSelf(){
	g_form.setValue('reviewer', g_user.getUserID());
}

//Business Rule: Set Released Field

(function executeRule(current, previous /*null when async*/) {

	var date = new GlideDateTime(current.release_date);
	var now = new GlideDateTime();
	if(date <= now){
		current.setValue('released', true);
	}

})(current, previous);

// UI Action: Add Self

function addSelf(){
	g_form.setValue('reviewer', g_user.getUserID());
}

//System Definition -> Relationships
// Relationships: Game Review

(function refineQuery(current, parent) {

	// Add your code here, such as current.addQuery(field, value);
	current.addQuery('game', parent.sys_id);
	current.addQuery('status','Approved');

})(current, parent);