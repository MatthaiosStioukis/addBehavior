//Here I am creating an fiat object
var fiat = {
    make: "Fiat",
    model: "Pundo",
    year: 2016,
    passenger: 4,
    color: "Perl-White",
    mileage: 0,
    started: false,
    fuel: 0,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert("This " + this.make + " " + this.model + " goes Broom Broom....");
                this.fuel = this.fuel -1;
            } else {
                alert("OOh, you are out of fuel.. addFuel.");
                this.stop();
            }
        } else {
            alert("PSSSt! you need to start the engine first ;)");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};



fiat.drive();
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();