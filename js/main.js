requirejs(["requireconfiguration"], function(requireConfig) {

	require.config(requireConfig);

	requirejs(["gridviewmodel", "knockout"], function(gridviewmodel, ko) {
      
        var viewModel = new gridviewmodel();
	    ko.applyBindings(viewModel);
	});

});
