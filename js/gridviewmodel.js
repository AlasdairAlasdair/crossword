define(['knockout'], function (ko) {
    
    var gridViewModel = function() {
        
        var self = this;
		
        self.cells = ko.observableArray([
            { letter: 'A' , shaded: false},
            { letter: '' , shaded: true},
            { letter: 'B' , shaded: false}
        ]);
 
 
    };

    return gridViewModel;
});