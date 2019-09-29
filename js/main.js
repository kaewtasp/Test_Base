//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);
//plugins
window.onload = function() {
    SceneManager.run(Scene_Boot);
};
