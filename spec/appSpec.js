import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// modify this line to point to your jasmine.json
jasmine.loadConfigFile('./jasmine.json');
jasmine.execute();