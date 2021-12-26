
var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('./img/434164568_fea0ad4013_z.jpeg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/onesharp/9648464288');
    this.nicknames = ko.observableArray(['Tabby','Tiger', 'Tiger', 'Shadow' , 'Sleepy'])
    this.clickCount = ko.observable(0);
    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks < 10) {
            title = 'Newborn';
        } else if(clicks < 50) {
            title = 'Infant';
        } else if(clicks < 100) {
            title = 'Child';
        } else if(clicks <  200) {
            title = 'Teen'
        } else if( click < 500) { 
            title = 'Adult';
        } else {
            title = 'Ninja'
        }
        return title;
    }, this);
}
var viewModel = function() {
    this.currentCat = ko.observable( new Cat() );
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
   
   
}
ko.applyBindings(new viewModel())






