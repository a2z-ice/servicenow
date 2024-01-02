//Scripted RestAPI will give you full controll over the api. It is on code's responsibility to create response. It work same as Import Set but more control then Import set. By scripted api you will be creating you own APIs in servicenow.

//Better to use Import Set for create/update. It work with POST not other method are available. The API user must have import_transformer and staging table access roles.

//Workflow -> Operations -> Workflow Operations Dashboard
//Workflow -> Live Workflow -> All Context
//Workflow -> Workflow Editor
//System Security ->  Users and Groups -> User or Groups or Roles
// reports -> View/Run
//To see the logs go to System Logs -> all (search with you source i.e. log_view_test)

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
	//To see server side log with source 'log_view_test' any string
	gs.log('Here is the log you need to view', 'log_view_test');

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