import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo} from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const Particle = (props) => {

  // const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
        autoPlay: true,
        background: {
          color: {
            value: "#111111"
          },
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff"
            },
            opacity: 1
          },
          enable: false
        },
        backgroundMode: {
          enable: true,
          zIndex: -1
        },
        detectRetina: true,
        fpsLimit: 60,
        infection: {
          cure: true,
          delay: 0,
          enable: false,
          infections: 0,
          stages: []
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: []
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle"
            },
            onHover: {
              enable: false,
              mode: "attract",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
            },
            resize: false
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1
            },
            bounce: {
              distance: 200
            },
            bubble: {
              distance: 200,
              duration: 0.4
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5
              },
              radius: 60
            },
            grab: {
              distance: 100,
              links: {
                blink: false,
                consent: false,
                opacity: 1
              }
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff"
                  },
                  stop: {
                    value: "#000000"
                  }
                },
                radius: 1000
              },
              shadow: {
                color: {
                  value: "#000000"
                },
                length: 2000
              }
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1
            },
            slow: {
              factor: 3,
              radius: 200
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                color: {
                  value: "#ff0000",
                  animation: {
                    enable: true,
                    speed: 400,
                    sync: true
                  }
                },
                collisions: {
                  enable: false,
                  bounce: {
                    horizontal: {
                      random: {}
                    },
                    vertical: {
                      random: {}
                    }
                  }
                },
                links: {
                  enable: false,
                  shadow: {},
                  triangles: {}
                },
                move: {
                  outMode: "destroy",
                  speed: 5,
                  angle: {},
                  attract: {
                    rotate: {}
                  },
                  gravity: {},
                  noise: {
                    delay: {
                      random: {}
                    }
                  },
                  outModes: {},
                  trail: {}
                },
                size: {
                  value: 5,
                  animation: {
                    enable: true,
                    speed: 5,
                    minimumValue: 1,
                    sync: true,
                    startValue: "min",
                    destroy: "max"
                  },
                  random: {}
                },
                bounce: {
                  horizontal: {
                    random: {}
                  },
                  vertical: {
                    random: {}
                  }
                },
                life: {
                  delay: {
                    random: {}
                  },
                  duration: {
                    random: {}
                  }
                },
                number: {
                  density: {}
                },
                opacity: {
                  animation: {},
                  random: {}
                },
                rotate: {
                  animation: {}
                },
                shadow: {
                  offset: {}
                },
                shape: {},
                stroke: {
                  color: {
                    value: "",
                    animation: {
                      enable: false,
                      speed: 0,
                      sync: false
                    }
                  }
                },
                twinkle: {
                  lines: {},
                  particles: {}
                }
              }
            }
          }
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 16,
            value: true
          }
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 12
              },
              value: 1
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            }
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              }
            },
            enable: true,
            mode: "bounce"
          },
          color: {
            value: "#cecece",
            animation: {
              enable: false,
              speed: 100,
              sync: false
            }
          },
          life: {
            count: 37,
            delay: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              sync: false
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001
              },
              value: 0,
              sync: true
            }
          },
          links: {
            blink: true,
            color: {
              value: "random"
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 0,
            opacity: 1,
            shadow: {
              blur: false,
              color: {
                value: "#00ff00"
              },
              enable: false
            },
            triangles: {
              enable: false,
              frequency: 0
            },
            width: 1,
            warp: false
          },
          move: {
            angle: {
              offset: 45,
              value: 90
            },
            attract: {
              enable: false,
              rotate: {
                x: 3000,
                y: 3000
              }
            },
            direction: "none",
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50
            },
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0
              },
              enable: false
            },
            outModes: {
              default: "out"
            },
            random: false,
            size: false,
            speed: 2,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000"
              }
            },
            vibrate: false,
            warp: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000
            },
            limit: 0,
            value: 100
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.3
            },
            value: 0.8,
            animation: {
              enable: true,
              minimumValue: 0.3,
              speed: 0.5,
              sync: false
            }
          },
          reduceDuplicates: false,
          rotate: {
            random: false,
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false
            },
            direction: "clockwise",
            path: false
          },
          shadow: {
            blur: 51,
            color: {
              value: "#000000"
            },
            enable: false,
            offset: {
              x: 0,
              y: 0
            }
          },
          shape: {
            options: {},
            type: "circle"
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1
            },
            value: 3,
            animation: {
              destroy: "none",
              enable: true,
              minimumValue: 1,
              speed: 3,
              startValue: "max",
              sync: false
            }
          },
          stroke: {
            width: 0,
            color: {
              value: "",
              animation: {
                enable: false,
                speed: 0,
                sync: false
              }
            }
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1
            },
            particles: {
              enable: false,
              frequency: 13,
              opacity: 1
            }
          }
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: true,
        themes: []
      }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default Particle;