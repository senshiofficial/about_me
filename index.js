$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function () {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": {
          "value": "#230063"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#4600c9",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover",
        "z-index": 80
      }
    }
  );

});

// JavaScript to handle truncation and "Read more" functionality
const textElement = document.querySelector('.truncate-text');
const readMoreButton = document.querySelector('#read-more-button');

if (textElement) {
  if (textElement.scrollHeight > textElement.clientHeight) {
    readMoreButton.style.display = 'block';

    readMoreButton.addEventListener('click', function () {
      if (textElement.style.whiteSpace === 'nowrap') {
        textElement.style.whiteSpace = 'normal';
        textElement.style.overflow = 'initial';
        textElement.style.textOverflow = 'unset';
        readMoreButton.textContent = 'Read less';
      } else {
        textElement.style.whiteSpace = 'nowrap';
        textElement.style.overflow = 'hidden';
        textElement.style.textOverflow = 'ellipsis';
        readMoreButton.textContent = 'Read more';
      }
    });
  }
}
