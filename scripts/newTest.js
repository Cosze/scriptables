let result;

try {
  // evaluate whether we can receive information from phone clipboard
  let code = Pasteboard.pasteString();
  if (!code) throw new EvalError('code empty');
  result = { type: 'result', value: code };
} catch (e) {
  result = { type: e.name, value: e.message };
}
// return a modified value from phone clipboard to see if phone can receive info from scriptable
Pasteboard.copyString(JSON.stringify(result));
Script.complete();