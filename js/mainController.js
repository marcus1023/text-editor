angular.module('texteditor').controller('MyController', [ '$scope', function($scope) {

  $scope.aceLoaded = function(_editor) {
    console.log("_editor ",_editor);

    _editor.on("copy", function(e) {
        console.log("copy", e);
    });

    _editor.on("paste", function(f){
      console.log("pasted!")
    });


    _editor.setReadOnly(false);
  };


  $scope.aceChanged = function(e) {



  };

}]);
