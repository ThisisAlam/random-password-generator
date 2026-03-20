  	const toggleSymbols = document.getElementById("symbols")
            const toggleNumbers = document.getElementById("numbers")
            const modeBtn = document.getElementById("mode-btn")
            const numbrz = "0123456789".split("")
            const symbls = "~`!@#$%^&*()_-+={[}]|:;<>,.?/".split("")
            
            let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
            let showPass1 = document.getElementById("pass1-btn")
            let showPass2 = document.getElementById("pass2-btn")
            let slider = document.getElementById("slider")
			let value = document.getElementById("s-value")
			
            
            modeBtn.addEventListener("click", function () {
                document.body.classList.toggle("dark") }) 
                
            slider.addEventListener("input", function() { 
            	value.textContent = slider.value })
            
            
            
            showPass1.disabled = true
            showPass2.disabled = true
            let password1 = ""
            let password2 = ""
            
            function genPass() {
            	password1 = ""
                password2 = ""
            	showPass1.textContent=""
                showPass2.textContent=""
                let passLength = slider.value
            	let pool = letters
                
                if (toggleSymbols.checked) {
                	pool = pool.concat(symbls)
                }
                if (toggleNumbers.checked) {
                	pool = pool.concat(numbrz)
                }
                
                for (let i=0;i<passLength;i++) {
                let index1 = Math.floor(Math.random()*pool.length)
                showPass1.textContent += pool[index1]
                }
                for (let i=0;i<passLength;i++) {
                	let index2 = Math.floor(Math.random()*pool.length)
                    showPass2.textContent += pool[index2]
                }
                showPass1.disabled = false
            	showPass2.disabled = false
            }
            function copy1() {
            	let password1 = showPass1.textContent
                navigator.clipboard.writeText(password1)
                showPass1.textContent="The message is copied!"
            }
            function copy2() {
            	let password2 = showPass2.textContent
                navigator.clipboard.writeText(password2)
                showPass2.textContent="The message is copied!"
            }
            
        