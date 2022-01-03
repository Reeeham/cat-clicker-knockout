var initialCats = [
    {
        clickCount: 0,
        name : 'Tabby',
        imgSrc : './img/434164568_fea0ad4013_z.jpeg',
        imgAttribution :'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames :['Tabby','Tiger', 'Tiger', 'Shadow' , 'Sleepy']
    },
    {
        clickCount: 0,
        name : 'Tiger',
        imgSrc : './img/22252709_010df3379e_z.jpeg',
        imgAttribution :'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames :['Tiger']
    },
    {
        clickCount: 0,
        name : 'Scaredy',
        imgSrc : './img/1413379559_412a540d29_z.jpeg',
        imgAttribution :'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames :['Casper']
    },
    {
        clickCount: 0,
        name : 'Shadow',
        imgSrc : './img/4154543904_6e2428c421_z.jpeg',
        imgAttribution :'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames :['Shoopy']
    },
    {
        clickCount: 0,
        name : 'Rere',
        imgSrc : './img/9648464288_2516b35537_z.jpeg',
        imgAttribution :'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames :['Zzzzz']
    },
]

var Cat = function(data) { //model
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames)
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
    var self = this; //refer to this view model
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem))
    })
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function() {
        //this.currentCat
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
   this.setCurrentCat = function(clickedCat) { 
       self.currentCat(clickedCat);
   };
   
}
ko.applyBindings(new viewModel())






