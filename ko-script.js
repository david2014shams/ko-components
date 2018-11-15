var viewModel = function(){
    this.fname = ko.observable('David');
    this.lname = ko.observable('Shams');
}
ko.applyBindings(new viewModel())