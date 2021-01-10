/*
    FORDEE ANIMATION LIBRARY
    PAMANTASAN NG LUNGSOD NG MUNTINLUPA
    CLIQUE APP & CREDIT SERVICES
    BETA TEST v0.1
    
    CONTRIBUTOR:
    @JAYARIGLESIAS
    @AGEOPANTALEON
*/

let fordee = {
    init: () => { 
        fordee = () => {
            return bf02c4a053ef1b0b1115620e393630756b8f901b = {
                scrollAnimate: (x, y, z) => {
                    window.addEventListener('scroll', (e) => {
                        let id = document.getElementById(x);
                        let all = document.querySelectorAll(x);
                        let con = all.length > 0 ? all : id ? [id] : false;
                        if (con) {
                            con.forEach(element => {
                                let pos = element.getBoundingClientRect().top;
                                let off = z && bf02c4a053ef1b0b1115620e393630756b8f901b.matchObject(z,'visiblearea') ? bf02c4a053ef1b0b1115620e393630756b8f901b.matchObject(z,'visiblearea') : 1.2;
                                let scr = window.innerHeight / off;
                                setTimeout(() => {
                                    pos < scr ? element.classList.add(y) : element.classList.remove(y)
                                }, z && bf02c4a053ef1b0b1115620e393630756b8f901b.matchObject(z,'timeout') ? bf02c4a053ef1b0b1115620e393630756b8f901b.matchObject(z,'timeout') : 50);
                            })
                        }
                    })
                },
                onMousemove: (x, y) => {
                    let id = document.getElementById(x);
                    let img = document.getElementById(y);
            
                    id.style.perspective = '40px';
                    id.onmouseenter = (e) => { update(e) };
                    id.onmouseleave = (e) => { img.style = '' };
                    id.onmousemove = (e) => { update(e) };
            
                    let pos = { x1: 0, y1: 0, x2: 0, y2: 0 };
            
                    const updatePos = (e) => {
                        pos.x1 = e.clientX - pos.x2;
                        pos.y1 = (e.clientY - pos.y2) * -1;
                    }
            
                    const setPos = (e) => {
                        pos.x2 = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                        pos.y2 = e.offsetTop + Math.floor(e.offsetHeight / 2);
                    }
            
                    const update = (e) => {
                        updatePos(e);
                        let x = (pos.y1 / img.offsetHeight / .5).toFixed(2);
                        let y = (pos.x1 / img.offsetWidth / .5).toFixed(2);
                        let z = `rotateX(${x}deg) rotateY(${y}deg)`;
                        img.style.transform = z;
                        img.style.webkitTransform = z;
                    };
            
                    setPos(id);
                },
                toggle: (x, y) => {
                    let id = document.getElementById(x);
                    let all = document.querySelectorAll(x);
                    let con = all.length > 0 ? all : id ? [id] : false;
                    if (con) {
                        con.forEach(element => {
                            if (element.className.includes(y)) {
                                element.classList.remove(y);
                            } else {
                                element.classList.add(y);
                            }
                        })
                    }
                },
                matchObject: (x,y) => {
                    let z = null;
                    Object.keys(x).forEach(element => {
                        z = element.toLowerCase() == y.toLowerCase() ? x[element] : false;
                    });
        
                    return z;
                },
                console: () => {
                    console.log('console');
                }
            }
        }
    },
};

