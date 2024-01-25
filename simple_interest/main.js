function calculate() {
    console.log("h")
    let p_value = document.getElementById("p").value
    let r_value = document.getElementById("r").value
    let t_value = document.getElementById("t").value
    if (!isNaN(p_value) && !isNaN(r_value) && !isNaN(t_value)) {
        document.getElementById("result").innerText = "the interest is :" + ((p_value * r_value * t_value) / 100)
    }
    if (p_value) {
        if (!isNaN(p_value)) {
            document.getElementById("err-p").style.display = "none";
            console.log("p_no")
            
        } else {
            document.getElementById("err-p").style.display = "block";
            console.log("p_yes")
        }

    }
    if (r_value) {
        if (!isNaN(r_value)) {
            document.getElementById("err-r").style.display = "none";
            console.log("gg")

            
        } else {
            document.getElementById("err-r").style.display = "block";
            console.log("n")
        }

    }
    if (t_value) {
        if (!isNaN(t_value)) {
            document.getElementById("err-t").style.display = "none";
            
        } else {
            document.getElementById("err-t").style.display = "block";
            console.log("n")
        }

    }

}
document.getElementById("p").addEventListener("input", calculate)
document.getElementById("r").addEventListener("input", calculate)
document.getElementById("t").addEventListener("input", calculate)



