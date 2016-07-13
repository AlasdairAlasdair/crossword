define(['knockout'], function (ko) {
    
    var gridViewModel = function() {
        
        var self = this;
		
        self.cells = ko.observableArray([
            { 
                letter: 'A' , 
                shaded: false,
                number: 1
            },
            { 
                letter: '' ,
                shaded: true,
                number: 2
            },
            { 
                letter: '' ,
                shaded: false
            },
            { 
                letter: 'B' ,
                shaded: false,
                number: 3
            }
        ]);
 
 
    };

    return gridViewModel;
});