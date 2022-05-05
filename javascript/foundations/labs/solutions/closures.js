function makeTrafficLight(name) {
    let _name = name;
    let _state = 'red';
    let light = {
        next: function () {
            switch (_state) {
                case 'red':
                    _state = 'green';
                    break;
                case 'green':
                    _state = 'yellow';
                    break;
                case 'yellow':
                    _state = 'red';
                    break;
                default:
                    throw new Error('why is the state = ', _state);
            }
        },
        toString: function () {
            return `${_name} is ${_state}`;
        }
    };
    return light;
}

try {
    let mainAndFirst = makeTrafficLight('Main Street and First Ave.');

    console.log(mainAndFirst.toString());   // red
    mainAndFirst.next();
    console.log(mainAndFirst.toString());   // green

    mainAndFirst.state = 'purple';          // now this is harmless
    console.log(mainAndFirst.toString());   // green
    mainAndFirst.next();                    // no longer and error
    console.log(mainAndFirst.toString());   // yellow
    mainAndFirst.next();
    console.log(mainAndFirst.toString());   // red
} catch (error) {
    console.log('ERROR:', error.message);
}
