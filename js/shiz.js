$scope.aceLoaded = function(_editor) {
    console.log("_editor ",_editor);
    var _session = _editor.getSession();
    var _renderer = _editor.renderer;

    console.log("_session ", _session);
    console.log("_renderer", _renderer);

    _editor.setReadOnly(false);
    _session.setUndoManager(new ace.UndoManager());
    _renderer.setShowGutter(true);

    // Events
    _editor.on("changeSession", function(){
        console.log("changingSession");
    });
    _session.on("change", function(e){
        console.log("changing", e);
    });

    _editor.on("copy", function(e) {
        console.log("copy", e);
    })

};

$scope.aceChanged = function(e) {
   console.log("from acce changed",e);
};

$scope.aceModel = '<!-- HTML code in here. -->\n' ;

$scope.resetText = function() {
    $scope.aceModel = '<!-- HTML code in here. -->\n' ;
}
