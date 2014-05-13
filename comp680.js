//Multimedia using HTML5 - Web Audio and Canvas Demonstration
//Comp680 Group Project - Spring 2014
//Group 6: Raymond Luc, Pedrum Parto, Padmashree Seshadri, Paleny Topjian

//Javascript functions


// Namespace function from http://elegantcode.com/2011/01/26/basic-javascript-part-8-namespaces/
function namespace(namespaceString) {
    var i = 0,
    parts = namespaceString.split('.'),
    parent = window,
    currentPart = '';

    for (i = 0; i < parts.length; i += 1) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    return parent;
}

var Comp680 = namespace('Comp680');

Comp680.NoteFrequency = {
    "C0": 16.35,
    "C#0": 17.32,
    "Db0": 17.32,
    "D0": 18.35,
    "D#0": 19.45,
    "Eb0": 19.45,
    "E0": 20.60,
    "F0": 21.83,
    "F#0": 23.12,
    "Gb0": 23.12,
    "G0": 24.50,
    "G#0": 25.96,
    "Ab0": 25.96,
    "A0": 27.50,
    "A#0": 29.14,
    "Bb0": 29.14,
    "B0": 30.87,
    "C1": 32.70,
    "C#1": 34.65,
    "Db1": 34.65,
    "D1": 36.71,
    "D#1": 38.89,
    "Eb1": 38.89,
    "E1": 41.20,
    "F1": 43.65,
    "F#1": 46.25,
    "Gb1": 46.25,
    "G1": 49.00,
    "G#1": 51.91,
    "Ab1": 51.91,
    "A1": 55.00,
    "A#1": 58.27,
    "Bb1": 58.27,
    "B1": 61.74,
    "C2": 65.41,
    "C#2": 69.30,
    "Db2": 69.30,
    "D2": 73.42,
    "D#2": 77.78,
    "Eb2": 77.78,
    "E2": 82.41,
    "F2": 87.31,
    "F#2": 92.50,
    "Gb2": 92.50,
    "G2": 98.00,
    "G#2": 103.83,
    "Ab2": 103.83,
    "A2": 110.00,
    "A#2": 116.54,
    "Bb2": 116.54,
    "B2": 123.47,
    "C3": 130.81,
    "C#3": 138.59,
    "Db3": 138.59,
    "D3": 146.83,
    "D#3": 155.56,
    "Eb3": 155.56,
    "E3": 164.81,
    "F3": 174.61,
    "F#3": 185.00,
    "Gb3": 185.00,
    "G3": 196.00,
    "G#3": 207.65,
    "Ab3": 207.65,
    "A3": 220.00,
    "A#3": 233.08,
    "Bb3": 233.08,
    "B3": 246.94,
    "C4": 261.63,
    "C#4": 277.18,
    "Db4": 277.18,
    "D4": 293.66,
    "D#4": 311.13,
    "Eb4": 311.13,
    "E4": 329.63,
    "F4": 349.23,
    "F#4": 369.99,
    "Gb4": 369.99,
    "G4": 392.00,
    "G#4": 415.30,
    "Ab4": 415.30,
    "A4": 440.00,
    "A#4": 466.16,
    "Bb4": 466.16,
    "B4": 493.88,
    "C5": 523.25,
    "C#5": 554.37,
    "Db5": 554.37,
    "D5": 587.33,
    "D#5": 622.25,
    "Eb5": 622.25,
    "E5": 659.26,
    "F5": 698.46,
    "F#5": 739.99,
    "Gb5": 739.99,
    "G5": 783.99,
    "G#5": 830.61,
    "Ab5": 830.61,
    "A5": 880.00,
    "A#5": 932.33,
    "Bb5": 932.33,
    "B5": 987.77,
    "C6": 1046.50,
    "C#6": 1108.73,
    "Db6": 1108.73,
    "D6": 1174.66,
    "D#6": 1244.51,
    "Eb6": 1244.51,
    "E6": 1318.51,
    "F6": 1396.91,
    "F#6": 1479.98,
    "Gb6": 1479.98,
    "G6": 1567.98,
    "G#6": 1661.22,
    "Ab6": 1661.22,
    "A6": 1760.00,
    "A#6": 1864.66,
    "Bb6": 1864.66,
    "B6": 1975.53,
    "C7": 2093.00,
    "C#7": 2217.46,
    "Db7": 2217.46,
    "D7": 2349.32,
    "D#7": 2489.02,
    "Eb7": 2489.02,
    "E7": 2637.02,
    "F7": 2793.83,
    "F#7": 2959.96,
    "Gb7": 2959.96,
    "G7": 3135.96,
    "G#7": 3322.44,
    "Ab7": 3322.44,
    "A7": 3520.00,
    "A#7": 3729.31,
    "Bb7": 3729.31,
    "B7": 3951.07,
    "C8": 4186.01,
    "C#8": 4434.92,
    "Db8": 4434.92,
    "D8": 4698.64,
    "D#8": 4978.03,
    "Eb8": 4978.03
}

Comp680.Notes = ['C7', 'A6', 'G6', 'F6', 'D6', 'C6', 'A5', 'G5', 'F5', 'D5', 'C5', 'A4', 'G4', 'F4', 'D4', 'C4'];Comp680.Rect = function (x, y, w, h) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 0;
    this.h = h || 0;
};

Comp680.Surface = function (canvas) {
    if (typeof canvas === 'object' && canvas.nodeName.toUpperCase() === 'CANVAS') {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    this.w = this.canvas.width;
    this.h = this.canvas.height;
};

Comp680.Surface.prototype.clear = function (color) {
    this.context.fillStyle = color || 'black';
    this.context.fillRect(0, 0, this.w, this.h);
    ////this.context.clearRect(0, 0, this.w, this.h);
};

Comp680.Surface.prototype.drawRect = function (rect, color) {
    this.context.fillStyle = color || 'black';
    this.context.fillRect(rect.x, rect.y, rect.w, rect.h);
}

Comp680.Model = function () {
    this.gridRows = 19;
    this.gridColumns = 16;
    this.grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ,0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    this.gridSize = 20;
    this.gridPadding = 5;
};

Comp680.Controller = function (canvas) {
    //Properties
    this.model = new Comp680.Model();
    this.surface = new Comp680.Surface(canvas);
    this.audioContext = new webkitAudioContext();
    this.tick = 0;
    this.beat = 0;
    this.fps = 30;
    this.drumSamples = []; //Drum sample raw data
    this.drumsLoaded = 0;  //Should be 3
    this.analyser = null;
    var that = this;

    //Setup click listener
    var clickListener = function (event) {
        var x, y;
        if (event.offsetX) {
            x = event.offsetX;
            y = event.offsetY;
        }
        else if (event.layerX) {
            x = event.layerX;
            y = event.layerY;
        }
        that.click(x, y);
    };
    canvas.addEventListener('click', clickListener, false);

    //Load drum samples
    var drumSources = ['kick.wav', 'snare.wav', 'hihat.wav']; //URL of drum samples
    drumSources.forEach(function (src, i) {
        var request = new XMLHttpRequest();
        request.open("GET", src, true);
        request.responseType = "arraybuffer"; // Read as Binary Data
        request.onload = function () {
            that.drumSamples[i] = request.response;
            that.drumsLoaded++;
            console.log(that.drumsLoaded);
        };
        request.send();
    });

}

Comp680.Controller.prototype.click = function (x, y) {
    //Detect if click is on a square
    if (y >= 0 && y <= (this.model.gridRows * (this.model.gridSize + this.model.gridPadding)) &&
        x >= 0 && x <= (this.model.gridColumns * (this.model.gridSize + this.model.gridPadding))) {
        var column = Math.floor(x / 25);
        var row = Math.floor(y / 25);

        this.model.grid[row][column]++;
        this.model.grid[row][column] %= 3;
        console.log(this.tick + ': (' + x + ', ' + y + ') = (' + row + 'x' + column + ') = ' + this.model.grid[row][column]);
    }
};

Comp680.Controller.prototype.draw = function () {
    //this.surface.drawRect(new Comp680.Rect(0, 0, this.surface.w, this.surface.h), 'black');    
    
    var model = this.model;
    var r, c;  //Row and column index
    var x = model.gridPadding, y = model.gridPadding;  //cursor position

    for (c = 0; c < model.gridColumns; c++) {
        var color = '#999999'
        if (c === this.beat)
            color = 'white';

        for (r = 0; r < model.gridRows; r++) {
            if (model.grid[r][c] === 1)
                this.surface.drawRect(new Comp680.Rect(x, y, model.gridSize, model.gridSize), color);
            else
                this.surface.drawRect(new Comp680.Rect(x, y, model.gridSize, model.gridSize), '#333333');
            y += model.gridSize + model.gridPadding;
        }

        y = model.gridPadding;
        x += model.gridSize + model.gridPadding;
    }

    if (this.analyser !== null) {
        this.visualize();
    }
};

Comp680.Controller.prototype.visualize = function () {
    var freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(freqDomain);
    for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
        var value = freqDomain[i];
        var percent = value / 256;
        var height = 200 * percent;
        var offset = 500 - height - 1;
        var barWidth = 500/ this.analyser.frequencyBinCount;
        var hue = i / this.analyser.frequencyBinCount * 360;
        //drawContext.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        this.surface.drawRect(new Comp680.Rect(500+i * barWidth, offset,500, 500), 'black');
        this.surface.drawRect(new Comp680.Rect(500+i * barWidth, offset, barWidth, height), 'hsl(' + hue + ', 100%, 50%)');
        //drawContext.fillRect(i * barWidth, offset, barWidth, height);
    }

    var timeDomain = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(timeDomain);
    for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
      var value = timeDomain[i];
      var percent = value / 256;
      var height = 500 * percent;
      var offset = 500 - height - 1;
      var barWidth = 500/this.analyser.frequencyBinCount;
      this.surface.drawRect(new Comp680.Rect(500+i * barWidth, 500+offset, 1, 1), 'red');
    }

    
};

Comp680.Controller.prototype.play = function () {
    var audioContext = this.audioContext;
    var notes = [];
    var start;
    var length = .25;
    var adsr = adsr || { a: .01, d: 0.4, s: 0.6, st: 0.0, r: 0.4 };
    var r; //Row index
    var that = this;
    this.analyser = audioContext.createAnalyser();
    this.analyser.connect(audioContext.destination);

    var adsrEnvelope = audioContext.createGain(),
        echoGain1 = audioContext.createGain(),
        echoGain2 = audioContext.createGain(),
        echoDelay1 = audioContext.createDelay(),
        echoDelay2 = audioContext.createDelay();

    var oscillators = [];

    adsrEnvelope.connect(this.analyser);
    echoGain1.connect(this.analyser);
    echoGain2.connect(this.analyser);

    adsrEnvelope.connect(echoDelay1);
    adsrEnvelope.connect(echoDelay2);
    echoDelay1.connect(echoGain1);
    echoDelay2.connect(echoGain2);

    adsrEnvelope.gain.value = 0;
    echoGain1.gain.value = .1;
    echoGain2.gain.value = .05;
    echoDelay1.delayTime.value = .5;
    echoDelay2.delayTime.value = 1;

    for (r = 0; r < this.model.gridRows - 3; r++) {
        if (this.model.grid[r][this.beat] === 1) {
            notes.push(Comp680.Notes[r]);
        }
    }

    notes.forEach(function (note, i) {
        var oscillator = that.audioContext.createOscillator();
        oscillator.type = 2;
        oscillator.frequency.value = Comp680.NoteFrequency[note];
        oscillator.connect(adsrEnvelope);
        oscillators.push(oscillator);
    });

    var start = this.audioContext.currentTime;
    oscillators.forEach(function (o) {
        o.start(start);
        o.stop(start + length);
    });

    adsr.st = length - adsr.a - adsr.d - adsr.r
    start = audioContext.currentTime;
    adsrEnvelope.gain.linearRampToValueAtTime(.5, start + adsr.a);
    adsrEnvelope.gain.linearRampToValueAtTime(adsr.s, start + adsr.a + adsr.d);
    adsrEnvelope.gain.linearRampToValueAtTime(adsr.s, start + adsr.a + adsr.d + adsr.st);
    adsrEnvelope.gain.linearRampToValueAtTime(0, start + adsr.a + adsr.d + adsr.st + adsr.r);

    for (r = r; r < this.model.gridRows; r++) {
        if (this.model.grid[r][this.beat] === 1) {
            source = audioContext.createBufferSource(); // Create Sound Source
            buffer = audioContext.createBuffer(this.drumSamples[this.model.gridRows - r - 1], true); // Create Mono Source Buffer from Raw Binary
            source.buffer = buffer; // Add Buffered Data to Object
            source.connect(this.analyser); // Connect Sound Source to Output
            source.start(audioContext.currentTime); // Play the Source when Triggered   
        }
    }
}

Comp680.Controller.prototype.update = function () {
    this.tick = (this.tick + 1) % 1000
    if (this.tick % 10 === 0) {
        this.beat++;
        this.beat %= 16;
        this.play();
    }
};

window.onload = function () {
    canvas = document.getElementById('c');
    Controller = new Comp680.Controller(canvas);

    window.setInterval(function () {
        Controller.update();
        Controller.draw();
    }, 1000 / 60);
};