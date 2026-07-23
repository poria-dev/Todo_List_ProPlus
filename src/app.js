const inp = document.getElementById("inp")
const btn1 = document.getElementById("btn1")
const select = document.getElementById("select")
const allcount = document.getElementById("allcount")
const activecount = document.getElementById("activecount")
const removecount = document.getElementById("removecount")
const orgbox = document.getElementById("orgbox")
const boxadd = document.getElementById("boxadd")
const boxremove = document.getElementById("boxremove")
const btn2 = document.getElementById("btn2")
let removeclick = document.querySelectorAll(".removeclick")
const progressBar = document.getElementById("progressBar")
const progressText = document.getElementById("progressText")





let arr = []
let art;
let og;
let rem;
let x;
let spa;
let h3;




let count = 0
let count2 = 0
let count3 = 0
let number = 0



let give = JSON.parse(localStorage.getItem("unique"))
// console.log(give);


if (give && give.length > 0) {

    arr = give

    give.forEach((val, index) => {

        create(val, index)

    })

}


// start btn1 ---------

btn1.addEventListener("click", () => {

    og = {
        title: inp.value,
        active: false,
        important: false,

    }

    if (og.title == "") {

        alert("Try Again ...")

    } else {
        arr.push(og)

        create(og)

        arr.forEach((vall, i) => {
            art.children[0].setAttribute("data-index", "on")

        })

        setTimeout(() => {
            boxadd.style.left = "2px"

            setTimeout(() => {
                boxadd.style.left = "-100%"

            }, 1200);
        }, 400);

    }




})


function create(task) {

    art = document.createElement("div")

    art.innerHTML = `<article class="orart w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950/30 border border-slate-800/40 rounded-2xl transition-all group gap-3 sm:gap-0">



        <div class=" flex-1 min-w-0 w-full">
            <h3 class="paraa text-sm font-medium text-slate-300 group-hover:text-slate-200 transition-all break-words">
               ${task.title}
            </h3>
        </div>

       
        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end border-t border-slate-800/30 sm:border-t-0 pt-3 sm:pt-0">


          <span onclick="edit(event)"
                  class="group w-11 h-11 flex justify-center items-center rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 cursor-pointer transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 hover:rotate-6">

                   <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                       viewBox="0 0 24 24"
                        stroke-width="1.8"
                          stroke="currentColor"
                                  class="w-5 h-5 text-slate-300 group-hover:text-amber-400 transition-all duration-300">

                                    <path stroke-linecap="round"
                             stroke-linejoin="round"
                                 d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"/>
                       </svg>

           </span>

       
            
                <button onclick="remove(event)"
                    class="removeclick group w-11 h-11 flex justify-center items-center rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 cursor-pointer transition-all duration-300 hover:bg-red-500/20 hover:border-red-400 hover:scale-110">

                    <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="w-5 h-5 text-slate-300 group-hover:text-red-400 transition-all">

                    <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79"/>
                    </svg>

                </button>

<span  onclick="important(event)"
                             class="group imstar w-11 h-11 flex justify-center items-center rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 text-slate-400 cursor-pointer transition-all duration-300 hover:bg-yellow-500/20 hover:border-yellow-400 hover:text-yellow-400 hover:scale-110 active:scale-95 shadow-lg hover:shadow-yellow-500/20"
                            title="Mark as Important">

                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
          class="w-5 h-5 transition-all duration-300 group-hover:rotate-12">

                   <path stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3l2.7 5.47 6.03.88-4.36 4.24 1.03 6-5.4-2.84-5.4 2.84 1.03-6L3.27 9.35l6.03-.88L12 3z" />

                 </svg>

</span> 




                <span onclick="active(event)"
                  data-status="off"
                         class="group w-11 h-11 flex justify-center items-center rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 text-slate-400 cursor-pointer transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-emerald-400 hover:scale-110 active:scale-95 shadow-lg hover:shadow-emerald-500/20"
                     title="Mark as Done">

                  <svg xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                       viewBox="0 0 24 24"
                    stroke-width="2"
                      stroke="currentColor"
                                class="w-5 h-5 transition-all duration-300 group-hover:scale-110">

                 <path stroke-linecap="round"
                              d="M4.5 12.75 10.5 18 19.5 6" />

                      </svg>

                </span>

                    
    </article>`


    if (task.important == true) {

        let article = art.querySelector(".orart");

        article.classList.add("important_star");
        article.classList.add("border");
        article.classList.add("border-yellow-300");
        article.classList.remove("border-slate-800/40");

        let star = article.querySelector(".imstar");

        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     class="w-5 h-5 text-yellow-400">
    <path fill-rule="evenodd"
    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.094 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.788 2.826c-.996.608-2.231-.289-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.211.749-2.305l5.404-.434 2.082-5.005Z"
    clip-rule="evenodd" />
                           </svg>`
            ;
    }

    if (task.active == true) {

        let ac = art.querySelector(".orart")

        let para = ac.querySelector(".paraa")

        let spa = ac.querySelector("[data-status]")

        ac.classList.add("active")

        ac.classList.add("bg-green-700")
        ac.classList.remove("bg-slate-950/30")

        para.classList.add("line-through")

        spa.setAttribute("data-status", "on")

        count++

        activecount.innerHTML = `active : ${count}`
    }

    orgbox.appendChild(art)


    count2++

    allcount.innerHTML = `All : ${count2}`


    inp.value = null
    inp.focus()







    localStorage.setItem("unique", JSON.stringify(arr))

}



function active(e) {


    spa = e.currentTarget

    // spa.setAttribute("data-status", "on")

    let box = spa.parentElement.parentElement
    box.classList.toggle("active")
    let para = box.querySelector(".paraa")
    // console.log(box);



    if (spa.getAttribute("data-status") == "off") {

        box.classList.add("bg-green-700")
        box.classList.remove("bg-slate-950/30")
        para.classList.add("line-through")
        spa.setAttribute("data-status", "on")
        count++
        activecount.innerHTML = `active : ${count}`




    } else if (spa.getAttribute("data-status") == "on") {
        box.classList.remove("bg-green-700")
        box.classList.add("bg-slate-950/30")
        para.classList.remove("line-through")
        spa.setAttribute("data-status", "off")
        count--
        activecount.innerHTML = `active : ${count}`



    }
    clone()
}


function remove(e) {


    removeclick = document.querySelectorAll(".removeclick")


    removeclick.forEach((item) => {

        item.setAttribute("disabled", "disabled")

    })



    rem = e.currentTarget
    let parent = rem.closest(".orart")


    rem.setAttribute("disabled", "disabled")


    let chance = 4
    window.chance = chance

    parent.classList.toggle("bg-red-600")
    parent.classList.remove("bg-slate-950/30")

    window.parent = parent

    setTimeout(() => {

        boxremove.style.right = 0

        setTimeout(() => {

            boxremove.style.right = "-100%"

        }, 4000);

        x = setInterval(() => {

            chance--

            if (chance < 0) {

                parent.remove()
                clearInterval(x)
                clone()

                count3++
                removecount.innerHTML = `remove : ${count3}`

                count2--
                allcount.innerHTML = `All : ${count2}`

                removeclick.forEach((item) => {

                    item.removeAttribute("disabled")

                })



                if (rem.nextElementSibling.nextElementSibling.getAttribute("data-status") == "on") {
                    count--
                    activecount.innerHTML = `Active : ${count}`
                }



            } else {
                boxremove.children[0].innerHTML = ` Time remaining : ${chance} `

                // ===========================================

            }

            // ===============================================

        }, 1000);


    }, 200);




}


function stop(e) {

    console.log(e.target);

    parent.classList.add("bg-slate-950/30")
    parent.classList.remove("bg-red-600")
    rem.removeAttribute("disabled", "disabled")
    if (count3 == 0) {
        removecount.innerHTML = `remove : ${count3}`
    } else {
        removecount.innerHTML = `remove : ${count3}`
    }
    setTimeout(() => {
        boxremove.style.right = "-100%"
    }, 400);

    removeclick.forEach((item) => {

        item.removeAttribute("disabled")

    })
    clearInterval(x)
    chance = 0

    console.log(chance);



}

select.addEventListener("change", () => {

    let temp = select.value

    // console.log(temp);

    const allart = document.querySelectorAll(".orart")


    allart.forEach((orgg) => {
        orgg.classList.add("flex")
        orgg.classList.remove("hidden")
    })


    if (temp == "active") {
        allart.forEach((val) => {

            if (val.classList.contains("active")) {

                val.classList.add("flex")
                val.classList.remove("hidden")

            } else {

                val.classList.add("hidden")
                val.classList.remove("flex")

            }

        })

    }

    if (temp == "important") {

        allart.forEach((val2) => {

            if (val2.classList.contains("important_star")) {

                val2.classList.add("flex")
                val2.classList.remove("hidden")

            } else {
                val2.classList.add("hidden")
                val2.classList.remove("flex")
            }

        })

    }


})


function important(e) {



    let star = e.currentTarget


    let star_parent = star.closest(".orart")

    if (star_parent.classList.contains("important_star")) {
        star_parent.classList.remove("important_star")
        star_parent.classList.remove("border")
        star_parent.classList.remove("border-yellow-300")
        star_parent.classList.add("border-slate-800/40")
        orgbox.appendChild(star_parent)



        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499c.173-.439.81-.439.98 0l2.115 5.342 5.764.588c.473.048.662.63.318.966l-4.172 4.07 1.22 5.679c.1.464-.389.818-.809.555L12 18.125l-5.116 2.736c-.42.263-.909-.091-.809-.555l1.22-5.68-4.172-4.07c-.344-.336-.155-.918.318-.966l5.764-.588 2.115-5.342z" />
                </svg>`
    } else {
        star_parent.classList.add("important_star")
        star_parent.classList.add("border")
        star_parent.classList.add("border-yellow-300")
        star_parent.classList.remove("border-slate-800/40")
        orgbox.prepend(star_parent)
        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     class="w-5 h-5 text-yellow-400">
    <path fill-rule="evenodd"
    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.094 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.788 2.826c-.996.608-2.231-.289-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.211.749-2.305l5.404-.434 2.082-5.005Z"
    clip-rule="evenodd" />
                           </svg>`

    }


    clone()

}



function edit(e) {

    let ed = e.currentTarget

    // console.log(ed);


    h3 = ed.closest(".orart").children[0].children[0]

    let valh3 = h3.innerHTML

    inp.value = valh3.trim()

    btn2.classList.add("flex")
    btn2.classList.remove("hidden")
    btn1.classList.add("hidden")
    btn1.classList.remove("flex")

}

btn2.addEventListener("click", () => {

    btn2.classList.remove("flex")
    btn2.classList.add("hidden")
    btn1.classList.add("block")
    btn1.classList.remove("hidden")


    let newvall = inp.value

    h3.innerHTML = newvall


    inp.value = null
    inp.focus()

    clone()


})




function clone(cl) {

    let clone = []

    let allh3 = document.querySelectorAll(".orart>div>.paraa")

    allh3.forEach((val) => {

        clone.push({
            title: val.innerHTML,
            important: val.closest(".orart").classList.contains("important_star"),
            active: val.closest(".orart").classList.contains("active"),
        })

    })

    arr = clone
    progress()

    localStorage.setItem("unique", JSON.stringify(arr))


}


function progress() {


    let total = arr.length

    if (total == 0) {

        progressBar.style.width = "0%"
        return

    }

    let done = 0

    arr.forEach((val) => {
        if (val.active == true) {

            done++

        }
    })


    let x = parseInt((done / total) * 100)

    progressBar.style.width = x + "%"
    progressText.innerHTML = x + "%"



}