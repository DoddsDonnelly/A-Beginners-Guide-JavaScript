function Computer(type, processor, ram, hd) {
    this.type = type;
    this.processor = processor;
    this.ram = ram;
    this.hd = hd;

}

Computer.prototype.describe = function (){
    document.write("<p>" + this.type + "<br>");
    document.write("Processor: " + this.processor + "<br>");
    document.write("Ram: " + this.ram + "<br>");
    document.write("Hard Disk: " + this.hd + "</p>");
};

var work_computer = new Computer("Work", "2GHZ", "8GB", "1TB");
var home_computer = new Computer("Home", "2GHZ", "4GB", "500GB");
var gaming_computer = new Computer("Gaming", "4GHZ", "16GB", "2TB");

work_computer.describe();
home_computer.describe();
gaming_computer.describe();

