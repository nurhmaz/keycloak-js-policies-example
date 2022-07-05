var context = $evaluation.getContext();
//reading attribute of user
var identity = context.getIdentity();
var attributes = identity.getAttributes();
var minimumAmount = "";
if (attributes.getValue("minimum-amount") !== null) {
  minimumAmount = attributes.getValue("minimum-amount").asString(0);
}
//reading attribute defined in resource
var permission = $evaluation.getPermission();
var resource = permission.getResource();
var permissionAttributes = resource.getAttributes();
var salaryStatus = "";
if (permissionAttributes["salary-status"]) {
  salaryStatus = permissionAttributes["salary-status"][0];
}

if (minimumAmount === "5000" && salaryStatus === "draft") {
  $evaluation.grant();
}
