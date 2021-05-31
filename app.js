let good = document.getElementById("tot");
let fast = document.getElementById("nhanh");
let cheap = document.getElementById("re");

function checkgood() {
    if (good.checked && fast.checked) {
        cheap.checked = false;
    }
}

function checkfast() {
    if (fast.checked && cheap.checked) {
        good.checked = false;
    }
}

function checkcheap() {
    if (cheap.checked && good.checked) {
        fast.checked = false;
    }
}