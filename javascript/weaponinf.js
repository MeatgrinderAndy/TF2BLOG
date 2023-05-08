let c1 = document.querySelector(' .w1');
        let d1 = document.querySelector(' .discr');
        let c2 = document.querySelector(' .w2');
        let d2 = document.querySelector(' .discr2');
        let c3 = document.querySelector(' .w3');
        let d3 = document.querySelector(' .discr3');
        d1.style.opacity = "0";
        d2.style.opacity = "0";
        d3.style.opacity = "0";
        d1.style.zIndex = "0";
        d2.style.zIndex = "0";
        d3.style.zIndex = "0";
        d1.style.scale = "0";
        d2.style.scale = "0";
        d3.style.scale = "0";
        
        c1.addEventListener('mouseover', cc1) 
        function cc1(event) {
            d1.style.opacity = "1";
            d1.style.zIndex = "1";
            d1.style.scale = "1";
            d1.style.transition = "0.08s";
        }
        c1.addEventListener('mouseout', cd1) 
        function cd1(event) {
            d1.style.opacity = "0";
            d1.style.zIndex = "-1";
            d1.style.scale = "0";
            
        }

        c2.addEventListener('mouseover', cc2) 
        function cc2(event) {
            d2.style.opacity = "1";
            d2.style.zIndex = "1";
            d2.style.scale = "1";
            d2.style.transition = "0.08s";
        }
        c2.addEventListener('mouseout', cd2) 
        function cd2(event) {
            d2.style.opacity = "0";
            d2.style.zIndex = "-1";
            d2.style.scale = "0";
        }

        c3.addEventListener('mouseover', cc3) 
        function cc3(event) {
            d3.style.opacity = "1";
            d3.style.zIndex = "1";
            d3.style.scale = "1";
            d3.style.transition = "0.08s";
        }
        c3.addEventListener('mouseout', cd3) 
        function cd3(event) {
            d3.style.opacity = "0";
            d3.style.zIndex = "-1";
            d3.style.scale = "0";
        }