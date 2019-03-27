(function(){
    function UserMove() {
        this.o = {
            alpha: 0,
            beta: 0,
            gamma: 0
        }
    
        this.initialUpdate = true;
        this.hasBeenActive = false;
    }
    
    UserMove.prototype.start = function(callback) {
        var gn = new GyroNorm();
    
        var config = {
            frequency: 500,
            decimalCount: 1,
            orientationBase: GyroNorm.WORLD
        }

        var that = this;
    
        gn.init(config).then(function() {
            gn.start(function(data) {
                that.handleOrientation(data);
            });
        }).catch(function(e) {
            UserMove.prototype.handleUnsupported();
        });
    }

    UserMove.prototype.handleOrientation = function(data) {
        var _o = JSON.parse(JSON.stringify(this.o));

        this.updateOrientation(data.do);

        if (
            this.deviceIsActive(_o) &&
            !this.hasBeenActive &&
            !this.initialUpdate)
        {
            this.handleActive();
            this.hasBeenActive = true;
        }

        if (this.initialUpdate) {
            this.initialUpdate = false;
        }
    }

    UserMove.prototype.updateOrientation = function(o) {
        this.o = {
            alpha: o.alpha,
            beta: o.beta,
            gamma: o.gamma
        };
    }

    UserMove.prototype.deviceIsActive = function(_o) {
        for (i in _o) {
            var diff = Math.abs(_o[i] - this.o[i]);   
            if (diff >= 1) {
                return true;
            }
        }
        return false;
    }

    UserMove.prototype.handleActive = function() {
        alert('active');
    }

    UserMove.prototype.handleUnsupported = function() {
        alert('unsupported');
    }

    var um = new UserMove();

    um.start();

})();