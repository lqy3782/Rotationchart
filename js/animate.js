function move(obj,target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }else {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = obj.offsetLeft + step +'px';
        }
    }, 20);
}