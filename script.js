const counters = document.querySelectorAll('.counter');
const speed = 1000; // the lower the slower

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerHTML;
        
        // lower inc to slow and higher to slow
        const inc = target / speed;

        if (count < target) {
            counter.innerHTML = count + inc;
            setInterval(updateCount, 1);
        }else{
            counter.innerHTML = target;
        }
    }
    
    updateCount();
})
