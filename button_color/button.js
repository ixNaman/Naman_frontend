function changeButtonColor() {
    console.log("anshul");
    const selectedColor = document.getElementById("colorDropdown").value;
    console.log(selectedColor);

    let button_list =document.getElementsByTagName("button");
    for(i=0;i<button_list.length;i++){
        button_list[i].style.backgroundColor=selectedColor;
    }

}

document.getElementById("colorDropdown").addEventListener("click" , changeButtonColor);
