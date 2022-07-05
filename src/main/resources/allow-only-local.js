var context = $evaluation.getContext();
var contextAttributes = context.getAttributes();

if (
  contextAttributes.containsValue("kc.client.network.ip_address", "127.0.0.1")
) {
  $evaluation.grant();
}
