window.onload = function() {
	var carsouel = document.querySelector('.carsouel');
	var lis = carsouel.querySelectorAll('ul li');
	var ol = carsouel.querySelector('ol');
	var ul = carsouel.querySelector('ul');
	var btnLeft = carsouel.querySelector('.btn-left');
	var btnRight = carsouel.querySelector('.btn-right');
	var num = 0;
	var circle = 0;
	var flag = true;

	for (let i = 0; i < lis.length; i++) {
		let li = document.createElement('li');
		li.setAttribute('index', i);
		ol.appendChild(li);
		li.addEventListener('click', function() {
			for (let i = 0; i < ol.children.length; i++) {
				ol.children[i].className = '';
			}
			this.className = 'active';
			var index = this.getAttribute('index');
			move(ul, -index * lis[i].offsetWidth);
			num = index;
			circle = index;

		})
	}
	ol.children[0].className = 'active';
	var last = lis[0].cloneNode(true);
	ul.appendChild(last);
	btnRight.addEventListener('click', function() {
		if (flag) {
			flag = false;
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			circle++;
			if (circle >= ol.children.length) {
				circle = 0;
			}
			btnChange();
		}
	})
	btnLeft.addEventListener('click', function() {
		if (flag) {
			flag = false;
			if (num <= 0) {
				num = ul.children.length - 1;
				ul.style.left = -num * (carsouel.offsetWidth) + 'px';
			}
			num--;
			if (circle <= 0) {
				circle = ol.children.length;
			}
			circle--;
			btnChange();
		}

	})

	var timer = setInterval(() => {
		btnRight.click();
	}, 2000);
	carsouel.addEventListener('mouseleave', function() {
		timer = setInterval(() => {
			btnRight.click();
		}, 2000);
	})
	carsouel.addEventListener('mouseenter', function() {
		clearInterval(timer);
		timer = null;
	})


	function btnChange() {
		for (let i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'active';
		move(ul, -num * carsouel.offsetWidth, function() {
			flag = true;
		});
	}
}
